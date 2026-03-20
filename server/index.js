import express from 'express'
import {
  authenticateEditor,
  createEditorToken,
  getAuthStatus,
  requireEditor,
} from './auth.js'
import {
  createSubmission,
  ensureDataFiles,
  exportApprovedEntriesToLibrary,
  getApprovedEntries,
  getSubmissions,
  importApprovedEntriesFromLibrary,
  isCollectionKey,
  reviewSubmission,
} from './dataStore.js'

const app = express()
const port = Number(process.env.PORT ?? 3001)

await ensureDataFiles()
await importApprovedEntriesFromLibrary()

app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.get('/api/auth/status', (_req, res) => {
  res.json(getAuthStatus())
})

app.post('/api/auth/login', async (req, res) => {
  const { email = '', password = '' } = req.body ?? {}
  const authResult = await authenticateEditor(String(email), String(password))

  if (!authResult.configured) {
    res.status(503).json({
      message: 'Editor authentication is not configured. Set EDITOR_EMAIL and EDITOR_PASSWORD_HASH or EDITOR_PASSWORD.',
    })
    return
  }

  if (!authResult.valid || !authResult.editor) {
    res.status(401).json({ message: 'Invalid editor email or password.' })
    return
  }

  res.json({
    token: createEditorToken(authResult.editor),
    editor: authResult.editor,
  })
})

app.get('/api/auth/session', requireEditor, (req, res) => {
  res.json({ editor: req.editor })
})

app.post('/api/submissions', async (req, res) => {
  try {
    const submission = await createSubmission(req.body ?? {})
    res.status(201).json(submission)
  } catch (error) {
    res.status(400).json({ message: error instanceof Error ? error.message : 'Unable to create submission.' })
  }
})

app.get('/api/resources/:collection', async (req, res) => {
  const { collection } = req.params

  if (!isCollectionKey(collection)) {
    res.status(404).json({ message: 'Unknown resource collection.' })
    return
  }

  const entries = await getApprovedEntries(collection)
  res.json(entries)
})

app.get('/api/admin/submissions', requireEditor, async (_req, res) => {
  const submissions = await getSubmissions()
  res.json(submissions)
})

app.patch('/api/admin/submissions/:id', requireEditor, async (req, res) => {
  const { id } = req.params
  const { status, editorialNotes } = req.body ?? {}

  try {
    const updatedSubmission = await reviewSubmission(id, String(status), editorialNotes)

    if (!updatedSubmission) {
      res.status(404).json({ message: 'Submission not found.' })
      return
    }

    res.json(updatedSubmission)
  } catch (error) {
    res.status(400).json({ message: error instanceof Error ? error.message : 'Unable to review submission.' })
  }
})

app.post('/api/admin/export-approved', requireEditor, async (_req, res) => {
  const exportResult = await exportApprovedEntriesToLibrary()
  res.json(exportResult)
})

app.post('/api/admin/import-approved', requireEditor, async (_req, res) => {
  const importResult = await importApprovedEntriesFromLibrary()
  res.json(importResult)
})

app.listen(port, () => {
  const authStatus = getAuthStatus()
  console.log(`ZamAI community API listening on http://localhost:${port}`)
  console.log(authStatus.configured
    ? `Editor login configured for ${authStatus.email}`
    : 'Editor login is not configured yet. Add EDITOR_EMAIL and EDITOR_PASSWORD_HASH or EDITOR_PASSWORD to your .env file.')
})