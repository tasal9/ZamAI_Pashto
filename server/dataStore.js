import { randomUUID } from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const collectionKeys = ['poetry', 'books', 'names', 'media']
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = path.join(rootDir, 'data')
const submissionsPath = path.join(dataDir, 'community-submissions.json')
const libraryPath = path.join(dataDir, 'community-library.json')

function createEmptyLibraryExport() {
  return {
    exportedAt: null,
    entries: {
      poetry: [],
      books: [],
      names: [],
      media: [],
    },
  }
}

async function readJson(filePath, fallbackValue) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContent)
  } catch {
    return fallbackValue
  }
}

async function writeJson(filePath, value) {
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

function isValidCollection(collection) {
  return collectionKeys.includes(collection)
}

function normalizeTags(tags) {
  return Array.isArray(tags)
    ? tags.map((tag) => String(tag).trim()).filter(Boolean)
    : []
}

function normalizeSubmissionDraft(draft) {
  return {
    collection: draft.collection,
    title: String(draft.title ?? '').trim(),
    titlePashto: String(draft.titlePashto ?? '').trim() || undefined,
    summary: String(draft.summary ?? '').trim(),
    body: String(draft.body ?? '').trim(),
    contributor: String(draft.contributor ?? '').trim() || undefined,
    region: String(draft.region ?? '').trim() || undefined,
    tags: normalizeTags(draft.tags),
  }
}

function toResourceEntry(submission) {
  return {
    id: submission.id,
    collection: submission.collection,
    title: submission.title,
    titlePashto: submission.titlePashto,
    summary: submission.summary,
    body: submission.body,
    tags: normalizeTags(submission.tags),
    region: submission.region,
    contributor: submission.contributor,
    verificationStatus: 'community-approved',
  }
}

function submissionFromResourceEntry(collection, entry) {
  return {
    id: String(entry.id ?? `imported-${collection}-${randomUUID()}`),
    collection,
    title: String(entry.title ?? '').trim(),
    titlePashto: String(entry.titlePashto ?? '').trim() || undefined,
    summary: String(entry.summary ?? '').trim(),
    body: String(entry.body ?? '').trim(),
    contributor: String(entry.contributor ?? '').trim() || undefined,
    region: String(entry.region ?? '').trim() || undefined,
    tags: normalizeTags(entry.tags),
    createdAt: String(entry.createdAt ?? new Date().toISOString()),
    status: 'approved',
    editorialNotes: 'Imported from data/community-library.json',
    source: 'import',
  }
}

export async function ensureDataFiles() {
  await fs.mkdir(dataDir, { recursive: true })

  try {
    await fs.access(submissionsPath)
  } catch {
    await writeJson(submissionsPath, [])
  }

  try {
    await fs.access(libraryPath)
  } catch {
    await writeJson(libraryPath, createEmptyLibraryExport())
  }
}

export async function getSubmissions() {
  return readJson(submissionsPath, [])
}

async function saveSubmissions(submissions) {
  await writeJson(submissionsPath, submissions)
}

export async function getApprovedEntries(collection) {
  const submissions = await getSubmissions()

  return submissions
    .filter((submission) => submission.collection === collection && submission.status === 'approved')
    .map(toResourceEntry)
}

export async function createSubmission(draft) {
  const normalizedDraft = normalizeSubmissionDraft(draft)

  if (!isValidCollection(normalizedDraft.collection)) {
    throw new Error('Invalid collection.')
  }

  if (!normalizedDraft.title || !normalizedDraft.summary || !normalizedDraft.body) {
    throw new Error('Title, summary, and detailed context are required.')
  }

  const submission = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    status: 'pending',
    editorialNotes: undefined,
    source: 'submission',
    ...normalizedDraft,
  }

  const submissions = await getSubmissions()
  await saveSubmissions([submission, ...submissions])
  return submission
}

export async function reviewSubmission(id, status, editorialNotes) {
  if (!['approved', 'rejected'].includes(status)) {
    throw new Error('Invalid review status.')
  }

  const submissions = await getSubmissions()
  const submissionIndex = submissions.findIndex((submission) => submission.id === id)

  if (submissionIndex === -1) {
    return null
  }

  const updatedSubmission = {
    ...submissions[submissionIndex],
    status,
    editorialNotes: String(editorialNotes ?? '').trim() || undefined,
    reviewedAt: new Date().toISOString(),
  }

  submissions[submissionIndex] = updatedSubmission
  await saveSubmissions(submissions)
  return updatedSubmission
}

export async function exportApprovedEntriesToLibrary() {
  const submissions = await getSubmissions()
  const approvedEntries = submissions.filter((submission) => submission.status === 'approved')

  const nextLibraryExport = createEmptyLibraryExport()
  nextLibraryExport.exportedAt = new Date().toISOString()

  for (const collection of collectionKeys) {
    nextLibraryExport.entries[collection] = approvedEntries
      .filter((submission) => submission.collection === collection)
      .map(toResourceEntry)
  }

  await writeJson(libraryPath, nextLibraryExport)

  return {
    path: 'data/community-library.json',
    exportedAt: nextLibraryExport.exportedAt,
    count: approvedEntries.length,
    library: nextLibraryExport,
  }
}

export async function importApprovedEntriesFromLibrary() {
  const libraryExport = await readJson(libraryPath, createEmptyLibraryExport())
  const submissions = await getSubmissions()
  let importedCount = 0

  for (const collection of collectionKeys) {
    const entries = Array.isArray(libraryExport.entries?.[collection])
      ? libraryExport.entries[collection]
      : []

    for (const entry of entries) {
      const importedSubmission = submissionFromResourceEntry(collection, entry)
      const existingIndex = submissions.findIndex((submission) => submission.id === importedSubmission.id)

      if (existingIndex === -1) {
        submissions.unshift(importedSubmission)
      } else {
        submissions[existingIndex] = {
          ...submissions[existingIndex],
          ...importedSubmission,
          status: 'approved',
        }
      }

      importedCount += 1
    }
  }

  await saveSubmissions(submissions)

  return {
    importedCount,
    totalApproved: submissions.filter((submission) => submission.status === 'approved').length,
    path: 'data/community-library.json',
  }
}

export function isCollectionKey(value) {
  return isValidCollection(value)
}