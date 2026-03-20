import { useState } from 'react'
import './Resources.css'

const repoIssuesUrl = import.meta.env.VITE_REPO_ISSUES_URL ?? 'https://github.com/tasal9/ZamAI_Pashto/issues/new'

const poetryCollection = [
  {
    title: 'Rahman Baba',
    titlePashto: 'رحمان بابا',
    description: 'Mystical, reflective poetry that is often the first doorway into classical Pashto verse.',
    focus: 'Poetry, ethics, spirituality',
  },
  {
    title: 'Khushal Khan Khattak',
    titlePashto: 'خوشحال خان خټک',
    description: 'Poetry and writing centered on courage, dignity, identity, and public life.',
    focus: 'Poetry, history, leadership',
  },
  {
    title: 'Landay Folk Tradition',
    titlePashto: 'لنډۍ',
    description: 'Short oral poems that carry love, grief, wit, resistance, and memory in compact form.',
    focus: 'Folk poetry, oral tradition',
  },
]

const readingShelf = [
  {
    title: 'Beginner Reading Passages',
    type: 'Learner texts',
    description: 'Short passages with simple sentence patterns for new readers building confidence.',
  },
  {
    title: 'Folktales & Story Summaries',
    type: 'Storytelling',
    description: 'Narratives that preserve memory, humor, moral lessons, and everyday cultural references.',
  },
  {
    title: 'Poetry Reading Paths',
    type: 'Literary entry points',
    description: 'Curated routes into classical and folk poetry for readers who want more than vocabulary drills.',
  },
  {
    title: 'Children & Family Reading',
    type: 'Home learning',
    description: 'Friendly reading material that families can use to keep Pashto active across generations.',
  },
]

const namesCollection = [
  { name: 'مینه', transliteration: 'Meena', meaning: 'Love', note: 'A warm and widely recognized Pashto name and word.' },
  { name: 'هیله', transliteration: 'Hila', meaning: 'Hope', note: 'A name tied to optimism and future possibility.' },
  { name: 'بریالۍ', transliteration: 'Baryalai / Baryalai', meaning: 'Successful', note: 'Used for accomplishment, dignity, and aspiration.' },
  { name: 'ننګیالی', transliteration: 'Nangyali', meaning: 'Brave / honorable', note: 'Connected to courage and public honor.' },
  { name: 'سپوږمۍ', transliteration: 'Spogmai', meaning: 'Moon', note: 'A poetic name linked to beauty and light.' },
  { name: 'زرغونه', transliteration: 'Zarghoona', meaning: 'Green / flourishing', note: 'Carries the sense of growth and life.' },
]

const mediaDiasporaCollection = [
  {
    title: 'BBC Pashto',
    type: 'News and reporting',
    description: 'A major source for contemporary Pashto news, interviews, and public affairs coverage.',
  },
  {
    title: 'VOA Pashto',
    type: 'News and discussion',
    description: 'Useful for current events, public debate, and audio exposure to formal spoken Pashto.',
  },
  {
    title: 'Azadi and community radio',
    type: 'Audio culture',
    description: 'Important listening spaces for news, commentary, and speech rhythms across regions.',
  },
  {
    title: 'Diaspora learning circles',
    type: 'Community life abroad',
    description: 'Family groups, student networks, and local classes that keep Pashto active outside the homeland.',
  },
]

const contributionTypes = [
  { value: 'word', label: 'Word or phrase' },
  { value: 'idiom', label: 'Idiom or proverb' },
  { value: 'reading', label: 'Reading or story summary' },
  { value: 'culture', label: 'Cultural note or diaspora note' },
]

type ContributionType = (typeof contributionTypes)[number]['value']

type CopyStatus = {
  status: 'success' | 'error'
  message: string
}

function Resources() {
  const [contributionType, setContributionType] = useState<ContributionType>('word')
  const [title, setTitle] = useState('')
  const [pashtoText, setPashtoText] = useState('')
  const [meaning, setMeaning] = useState('')
  const [context, setContext] = useState('')
  const [contributor, setContributor] = useState('')
  const [region, setRegion] = useState('')
  const [copyStatus, setCopyStatus] = useState<CopyStatus | null>(null)

  const submissionDraft = [
    `Contribution type: ${contributionTypes.find((item) => item.value === contributionType)?.label}`,
    `Title: ${title || '[add a short title]'}`,
    `Pashto text: ${pashtoText || '[add Pashto text]'}`,
    `Meaning or translation: ${meaning || '[add meaning or translation]'}`,
    `Context or notes: ${context || '[add context, source, or usage notes]'}`,
    `Contributor name: ${contributor || '[optional name]'}`,
    `Region or diaspora context: ${region || '[optional region, dialect, or diaspora note]'}`,
  ].join('\n')

  const issueTitle = title
    ? `Pashto community submission: ${title}`
    : 'Pashto community submission'

  const issueUrl = `${repoIssuesUrl}?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(submissionDraft)}`

  const handleCopyDraft = async () => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API unavailable')
      }

      await navigator.clipboard.writeText(submissionDraft)
      setCopyStatus({ status: 'success', message: 'Draft copied' })
    } catch {
      setCopyStatus({ status: 'error', message: 'Copy failed. Use the draft below manually.' })
    }

    window.setTimeout(() => {
      setCopyStatus(null)
    }, 1800)
  }

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="container resources-hero-content fade-in">
          <div>
            <p className="resources-kicker">Pashto Resources & Community</p>
            <h1>A living Pashto shelf for language, memory, media, and community</h1>
            <p className="pashto-text resources-title-pashto">د ژبې، حافظې، رسنیو او ټولنې لپاره ژوندۍ پښتو سرچینې</p>
            <p className="resources-subtitle">
              This page gathers the kinds of materials Pashto speakers and learners look for beyond tools alone:
              poetry, reading paths, names, media, diaspora references, and ways to contribute new content.
            </p>
          </div>
          <div className="resources-hero-card card">
            <h3>What this page should hold</h3>
            <ul>
              <li>Poetry and oral tradition</li>
              <li>Reading shelves and book paths</li>
              <li>Names, meanings, and identity notes</li>
              <li>Media and diaspora connections</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2>Poetry & Oral Tradition</h2>
            <p className="pashto-text">شاعري او شفاهي دود</p>
            <p>Poetry is one of the clearest ways Pashto lives across time, memory, and public feeling.</p>
          </div>
          <div className="resources-grid three-up">
            {poetryCollection.map((entry) => (
              <article key={entry.title} className="resource-card card">
                <h3>{entry.title}</h3>
                <p className="pashto-text">{entry.titlePashto}</p>
                <p>{entry.description}</p>
                <span className="resource-meta">{entry.focus}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section alt-surface">
        <div className="container">
          <div className="section-header">
            <h2>Books & Reading Paths</h2>
            <p className="pashto-text">کتابونه او د لوست لارې</p>
            <p>Reading support should exist for children, new learners, heritage speakers, and serious readers alike.</p>
          </div>
          <div className="resources-grid two-up">
            {readingShelf.map((entry) => (
              <article key={entry.title} className="resource-card card">
                <h3>{entry.title}</h3>
                <span className="resource-meta">{entry.type}</span>
                <p>{entry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2>Names & Meanings</h2>
            <p className="pashto-text">نومونه او ماناوې</p>
            <p>Names carry family memory, poetry, values, aspiration, and regional identity.</p>
          </div>
          <div className="name-grid">
            {namesCollection.map((entry) => (
              <article key={entry.name} className="name-card card">
                <h3 className="pashto-text">{entry.name}</h3>
                <p className="name-transliteration">{entry.transliteration}</p>
                <p className="name-meaning">{entry.meaning}</p>
                <p>{entry.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section alt-surface">
        <div className="container">
          <div className="section-header">
            <h2>Media & Diaspora Connections</h2>
            <p className="pashto-text">رسنۍ او د کډوالۍ اړیکې</p>
            <p>Pashto also lives through journalism, radio, family networks, study circles, and communities abroad.</p>
          </div>
          <div className="resources-grid two-up">
            {mediaDiasporaCollection.map((entry) => (
              <article key={entry.title} className="resource-card card">
                <h3>{entry.title}</h3>
                <span className="resource-meta">{entry.type}</span>
                <p>{entry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section" id="contribute">
        <div className="container">
          <div className="section-header">
            <h2>Contribute to the Pashto Hub</h2>
            <p className="pashto-text">د پښتو مرکز ته مرسته واستوئ</p>
            <p>There is no backend submission system yet, so this flow helps you prepare a clean draft and send it through GitHub.</p>
          </div>

          <div className="contribution-layout">
            <div className="contribution-guide card">
              <h3>Contribution Lanes</h3>
              <div className="contribution-lanes">
                {contributionTypes.map((item) => (
                  <div key={item.value} className="contribution-lane">
                    <h4>{item.label}</h4>
                    <p>
                      {item.value === 'word' && 'Daily expressions, greetings, kinship terms, or regional phrasing.'}
                      {item.value === 'idiom' && 'Idioms, mataluna, and short explanations that preserve meaning and usage.'}
                      {item.value === 'reading' && 'Short readings, story summaries, learner passages, or public-domain references.'}
                      {item.value === 'culture' && 'Customs, naming traditions, diaspora experiences, and context notes.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="contribution-form card">
              <h3>Prepare a Submission Draft</h3>
              <div className="form-grid">
                <label>
                  <span>Contribution type</span>
                  <select value={contributionType} onChange={(event) => setContributionType(event.target.value as ContributionType)}>
                    {contributionTypes.map((item) => (
                      <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                  </select>
                </label>

                <label>
                  <span>Title</span>
                  <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Short title for your contribution" />
                </label>

                <label className="form-span-2">
                  <span>Pashto text</span>
                  <textarea value={pashtoText} onChange={(event) => setPashtoText(event.target.value)} placeholder="Add the Pashto word, proverb, excerpt, or note" rows={4} />
                </label>

                <label>
                  <span>Meaning or translation</span>
                  <input value={meaning} onChange={(event) => setMeaning(event.target.value)} placeholder="Meaning, gloss, or translation" />
                </label>

                <label>
                  <span>Region or diaspora context</span>
                  <input value={region} onChange={(event) => setRegion(event.target.value)} placeholder="Optional: Kandahar, Peshawar, UK diaspora, etc." />
                </label>

                <label className="form-span-2">
                  <span>Context or notes</span>
                  <textarea value={context} onChange={(event) => setContext(event.target.value)} placeholder="Explain usage, source, who says it, or why it matters" rows={4} />
                </label>

                <label className="form-span-2">
                  <span>Contributor name</span>
                  <input value={contributor} onChange={(event) => setContributor(event.target.value)} placeholder="Optional name or handle" />
                </label>
              </div>

              <div className="contribution-actions">
                <button type="button" className="btn btn-primary" onClick={() => { void handleCopyDraft() }}>
                  Copy Draft
                </button>
                <a className="btn btn-outline" href={issueUrl} target="_blank" rel="noopener noreferrer">
                  Open GitHub Issue Draft
                </a>
              </div>

              {copyStatus ? (
                <p className={`copy-feedback ${copyStatus.status === 'error' ? 'copy-feedback-error' : ''}`} role="status">
                  {copyStatus.message}
                </p>
              ) : null}

              <div className="draft-preview">
                <h4>Submission Preview</h4>
                <pre>{submissionDraft}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources