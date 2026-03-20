import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

function getConfiguredEditor() {
  const email = process.env.EDITOR_EMAIL?.trim()
  const passwordHash = process.env.EDITOR_PASSWORD_HASH?.trim()
  const password = process.env.EDITOR_PASSWORD?.trim()

  if (!email || (!passwordHash && !password)) {
    return null
  }

  return {
    email,
    passwordHash,
    password,
  }
}

function getJwtSecret() {
  if (process.env.JWT_SECRET?.trim()) {
    return process.env.JWT_SECRET.trim()
  }

  if (process.env.NODE_ENV !== 'production') {
    return 'zamai-dev-secret-change-me'
  }

  throw new Error('JWT_SECRET is required in production.')
}

export function getAuthStatus() {
  const editor = getConfiguredEditor()

  return {
    configured: Boolean(editor),
    email: editor?.email ?? null,
  }
}

export async function authenticateEditor(email, password) {
  const editor = getConfiguredEditor()

  if (!editor) {
    return { configured: false, valid: false }
  }

  if (email.trim().toLowerCase() !== editor.email.toLowerCase()) {
    return { configured: true, valid: false }
  }

  const validPassword = editor.passwordHash
    ? await bcrypt.compare(password, editor.passwordHash)
    : password === editor.password

  return {
    configured: true,
    valid: validPassword,
    editor: validPassword ? { email: editor.email } : undefined,
  }
}

export function createEditorToken(editor) {
  return jwt.sign(editor, getJwtSecret(), { expiresIn: '12h' })
}

export function verifyEditorToken(token) {
  return jwt.verify(token, getJwtSecret())
}

export function requireEditor(req, res, next) {
  const authorizationHeader = req.headers.authorization

  if (!authorizationHeader?.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Editor authentication is required.' })
    return
  }

  const token = authorizationHeader.slice('Bearer '.length)

  try {
    const editor = verifyEditorToken(token)
    req.editor = editor
    next()
  } catch {
    res.status(401).json({ message: 'Your editor session is invalid or expired.' })
  }
}