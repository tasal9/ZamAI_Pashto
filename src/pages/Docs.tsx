import { Link } from 'react-router-dom'
import './Docs.css'

const docSections = [
  {
    id: 'api',
    title: 'API Surface',
    titlePashto: 'د API سطحه',
    description: 'The frontend communicates with the backend through a small set of stable routes for auth, submissions, collection reads, moderation, and library sync.',
    bullets: [
      'Auth routes establish and validate editor sessions.',
      'Submission routes receive new public contributions.',
      'Collection routes expose approved public resource entries.',
      'Admin routes handle review actions, import, and export.',
    ],
    links: [
      { to: '/pipeline#project-interfaces', label: 'See pipeline interfaces' },
      { to: '/resources/moderation', label: 'Open moderation workspace' },
    ],
  },
  {
    id: 'export',
    title: 'Versioned Data Export',
    titlePashto: 'نسخه لرونکی د معلوماتو صادرول',
    description: 'Approved entries are exported into a versioned library file so content can be reviewed in git and deployed consistently across environments.',
    bullets: [
      'Runtime submissions stay separate from the public approved library.',
      'Editors export approved content into data/community-library.json.',
      'The versioned file becomes the reviewable public dataset for the site.',
      'Import support allows the backend to restore approved entries from versioned state.',
    ],
    links: [
      { to: '/resources/moderation#versioned-export', label: 'Open export workflow' },
    ],
  },
  {
    id: 'contributions',
    title: 'Contribution Workflow',
    titlePashto: 'د مرستې کاري بهیر',
    description: 'The platform accepts submissions openly, but publication stays editor-controlled through a review queue and versioned export step.',
    bullets: [
      'Contributors submit poetry, books, names, and media entries from the resources page.',
      'Editors review context, quality, duplication, and usage notes before approval.',
      'Only approved entries appear on public collection pages.',
      'Editorial notes provide a documented path for corrections or resubmission.',
    ],
    links: [
      { to: '/resources#contribute', label: 'Open contribution docs' },
      { to: '/resources/moderation', label: 'Open editor review queue' },
    ],
  },
]

const runtimeCards = [
  {
    title: 'Frontend',
    summary: 'React and Vite power the public tools, resource views, and documentation surface.',
  },
  {
    title: 'Backend',
    summary: 'Express handles session auth, submission persistence, moderation, and export operations.',
  },
  {
    title: 'Content Layer',
    summary: 'Approved library data is versioned while runtime submission data remains operational.',
  },
]

const endpointExamples = [
  {
    method: 'GET',
    path: '/api/health',
    purpose: 'Basic API health check for local runtime validation.',
    example: 'curl http://localhost:3001/api/health',
  },
  {
    method: 'POST',
    path: '/api/auth/login',
    purpose: 'Create an editor session and return a JWT token for protected moderation actions.',
    example: 'curl -X POST http://localhost:3001/api/auth/login -H "Content-Type: application/json" -d "{\"email\":\"editor@example.com\",\"password\":\"your-password\"}"',
  },
  {
    method: 'GET',
    path: '/api/resources/poetry',
    purpose: 'Read approved public entries for a collection surface.',
    example: 'curl http://localhost:3001/api/resources/poetry',
  },
  {
    method: 'POST',
    path: '/api/admin/export-approved',
    purpose: 'Export approved entries into the versioned community library file.',
    example: 'curl -X POST http://localhost:3001/api/admin/export-approved -H "Authorization: Bearer <token>"',
  },
]

const maintainerFiles = [
  {
    path: 'server/index.js',
    role: 'API route registration for auth, submissions, collections, moderation, import, and export.',
  },
  {
    path: 'server/auth.js',
    role: 'Editor authentication, password verification, JWT issuing, and protected middleware.',
  },
  {
    path: 'server/dataStore.js',
    role: 'Runtime persistence, submission review state, and versioned library import/export behavior.',
  },
  {
    path: 'src/lib/communityStorage.ts',
    role: 'Frontend client wrapper for auth, collection reads, submissions, and moderation actions.',
  },
  {
    path: 'data/community-library.json',
    role: 'Versioned approved public library content intended for review and commit.',
  },
  {
    path: 'data/community-submissions.json',
    role: 'Operational submission state used by the moderation workflow at runtime.',
  },
]

function Docs() {
  return (
    <div className="docs-page">
      <section className="docs-hero">
        <div className="container docs-hero-content fade-in">
          <div>
            <p className="docs-kicker">Platform Documentation</p>
            <h1>Operational docs for the ZamAI Pashto platform</h1>
            <p className="pashto-text docs-title-pashto">د ZamAI پښتو پلیټفارم لپاره عملیاتي مستندات</p>
            <p className="docs-subtitle">
              Use this page as the formal reference surface for API behavior, contribution flow,
              editor review, and versioned publishing across the platform.
            </p>
            <div className="docs-hero-actions">
              <a href="#api" className="btn btn-primary btn-lg">Read API docs</a>
              <a href="#export" className="btn btn-outline btn-lg">Read export flow</a>
              <a href="#contributions" className="btn btn-outline btn-lg">Read contribution flow</a>
            </div>
          </div>

          <div className="docs-hero-card card">
            <h3>Documentation scope</h3>
            <ul>
              <li>Platform architecture and interfaces</li>
              <li>Versioned library publishing flow</li>
              <li>Editor-controlled contribution workflow</li>
              <li>Runtime links to the live operational pages</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="docs-runtime-section">
        <div className="container">
          <div className="section-header">
            <h2>Runtime Overview</h2>
            <p className="pashto-text">د پلیټفارم لنډه کتنه</p>
            <p>The current platform is organized around a small runtime stack with clear content and review boundaries.</p>
          </div>
          <div className="docs-runtime-grid">
            {runtimeCards.map((card) => (
              <article key={card.title} className="card docs-runtime-card">
                <h3>{card.title}</h3>
                <p>{card.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="docs-sections">
        <div className="container docs-section-stack">
          {docSections.map((section) => (
            <article key={section.id} id={section.id} className="docs-section-card card">
              <div className="docs-section-header">
                <div>
                  <h2>{section.title}</h2>
                  <p className="pashto-text">{section.titlePashto}</p>
                </div>
                <span className="docs-anchor">#{section.id}</span>
              </div>
              <p className="docs-section-description">{section.description}</p>
              <ul className="docs-bullet-list">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="docs-link-row">
                {section.links.map((link) => (
                  <Link key={link.label} to={link.to} className="docs-inline-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="docs-sections">
        <div className="container docs-section-stack">
          <article className="docs-section-card card">
            <div className="docs-section-header">
              <div>
                <h2>Endpoint Examples</h2>
                <p className="pashto-text">د پای ټکیو بېلګې</p>
              </div>
              <span className="docs-anchor">#examples</span>
            </div>
            <p className="docs-section-description">
              These examples map the live backend surface into concrete local calls maintainers can use while validating behavior.
            </p>
            <div className="docs-example-grid">
              {endpointExamples.map((endpoint) => (
                <article key={`${endpoint.method}-${endpoint.path}`} className="docs-example-card">
                  <div className="docs-endpoint-header">
                    <span className={`docs-method docs-method-${endpoint.method.toLowerCase()}`}>{endpoint.method}</span>
                    <code>{endpoint.path}</code>
                  </div>
                  <p>{endpoint.purpose}</p>
                  <pre className="docs-code-block"><code>{endpoint.example}</code></pre>
                </article>
              ))}
            </div>
          </article>

          <article className="docs-section-card card">
            <div className="docs-section-header">
              <div>
                <h2>Maintainer File Map</h2>
                <p className="pashto-text">د ساتونکو د فایلونو نقشه</p>
              </div>
              <span className="docs-anchor">#files</span>
            </div>
            <p className="docs-section-description">
              These are the primary files to inspect when changing platform behavior, content publishing, or operational workflow.
            </p>
            <div className="docs-file-grid">
              {maintainerFiles.map((file) => (
                <article key={file.path} className="docs-file-card">
                  <code>{file.path}</code>
                  <p>{file.role}</p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="docs-cta-section">
        <div className="container">
          <div className="docs-cta card">
            <div>
              <h2>Open the operational surfaces</h2>
              <p className="pashto-text">د پلیټفارم کاري برخې پرانیزئ</p>
              <p>
                Use the live pages when you need execution detail, then return here for the formal overview of how the system fits together.
              </p>
            </div>
            <div className="docs-cta-actions">
              <Link to="/pipeline" className="btn btn-primary">Open data pipeline</Link>
              <Link to="/resources" className="btn btn-outline">Open resources</Link>
              <Link to="/resources/moderation" className="btn btn-outline">Open moderation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Docs