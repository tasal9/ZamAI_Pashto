import { Link } from 'react-router-dom'
import './Home.css'

const features = [
  {
    icon: '📝',
    title: 'Pashto Alphabet',
    titlePashto: 'پښتو الفبا',
    description: 'Learn the Pashto script, letter forms, and sound patterns with a clear starting point for new readers.',
    link: '/alphabet',
  },
  {
    icon: '📚',
    title: 'Vocabulary Builder',
    titlePashto: 'لغات جوړونه',
    description: 'Grow everyday vocabulary for family life, study, work, travel, and community conversation.',
    link: '/vocabulary',
  },
  {
    icon: '🔄',
    title: 'Translator',
    titlePashto: 'ژباړن',
    description: 'Move between Pashto and English quickly for learning, drafting, and daily communication.',
    link: '/translator',
  },
  {
    icon: '💬',
    title: 'Proverbs & Culture',
    titlePashto: 'متلونه او کلتور',
    description: 'Explore proverbs, meanings, and cultural wisdom that carry Pashto identity across generations.',
    link: '/proverbs',
  },
  {
    icon: '🏠',
    title: 'Reviewed Resources',
    titlePashto: 'تایید شوې سرچینې',
    description: 'Browse approved poetry, books, names, media, and reference collections prepared for public use.',
    link: '/resources',
  },
  {
    icon: '🗂️',
    title: 'Data Pipeline',
    titlePashto: 'د معلوماتو پایپ لاین',
    description: 'See how Pashto text, books, and digital sources can be gathered for open language technology.',
    link: '/pipeline',
  },
]

const platformAudiences = [
  {
    title: 'For Users',
    titlePashto: 'د کاروونکو لپاره',
    description: 'Access practical Pashto tools, approved reference material, and reliable learning surfaces in one place.',
  },
  {
    title: 'For Learners',
    titlePashto: 'د زده کوونکو لپاره',
    description: 'Move from alphabet and vocabulary into structured reading, reference, and translation support.',
  },
  {
    title: 'For Editors & Teachers',
    titlePashto: 'د سمونګرو او ښوونکو لپاره',
    description: 'Use curated material, editorial review, and reusable collections for teaching and public publication.',
  },
  {
    title: 'For Builders',
    titlePashto: 'د جوړوونکو لپاره',
    description: 'Build against stable workflows, reviewed data, and platform-level infrastructure for Pashto software.',
  },
]

const resourceAreas = [
  {
    title: 'Language Learning',
    items: ['Alphabet and script basics', 'Useful vocabulary', 'Starter translation support'],
    link: '/alphabet',
    cta: 'Open learning tools',
  },
  {
    title: 'Reference Collections',
    items: ['Proverbs and sayings', 'Contextual cultural references', 'Structured entries that preserve meaning and usage'],
    link: '/proverbs',
    cta: 'Open reference collection',
  },
  {
    title: 'Platform Workflows',
    items: ['Data collection workflows', 'Documented export and review flow', 'Open-source language infrastructure'],
    link: '/docs',
    cta: 'Open platform docs',
  },
  {
    title: 'Approved Library Surfaces',
    items: ['Poetry and reading collections', 'Names and meanings', 'Media and diaspora references'],
    link: '/resources',
    cta: 'Open reviewed library',
  },
]

const collectionPreviews = [
  {
    title: 'Poetry Collection',
    titlePashto: 'د شاعرۍ زېرمتون',
    items: ['Rahman Baba poetry', 'Khushal Khan Khattak selections', 'Landay folk verse'],
    link: '/resources/poetry',
  },
  {
    title: 'Names & Meanings',
    titlePashto: 'نومونه او ماناوې',
    items: ['مینه - love', 'هیله - hope', 'ننګیالی - courageous'],
    link: '/resources/names',
  },
  {
    title: 'Media Reference',
    titlePashto: 'رسنۍ او کډوالي',
    items: ['BBC Pashto', 'VOA Pashto', 'Diaspora learning circles'],
    link: '/resources/media',
  },
]

const contributionLanes = [
  {
    title: 'Lexical Entries',
    description: 'Submit useful words, phrases, greetings, and regional usage notes with enough context for review.',
  },
  {
    title: 'Idioms & Proverbs',
    description: 'Add proverbs and idioms with short explanations so editors can verify meaning and usage.',
  },
  {
    title: 'Reading Passages',
    description: 'Contribute short readings, excerpts, or summaries suitable for public reference collections.',
  },
  {
    title: 'Reference Notes',
    description: 'Document names, customs, oral history, media references, and diaspora notes in reviewable form.',
  },
]

const stats = [
  { value: '44', label: 'Alphabet Letters', labelPashto: 'الفبا توري' },
  { value: '60+', label: 'Vocabulary Words', labelPashto: 'لغات' },
  { value: '16', label: 'Proverbs', labelPashto: 'متلونه' },
  { value: '50M+', label: 'Native Speakers', labelPashto: 'مورنۍ ژبې ویونکي' },
]

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <p className="hero-kicker">Open Pashto Language Platform</p>
            <h1>
              <span className="highlight">Pashto</span> tools, reviewed resources, and language infrastructure in one platform
              <span className="hero-pashto pashto-text">د پښتو وسایل, تایید شوې سرچینې او ژبنیز بنسټونه په یوه پلیټفارم کې</span>
            </h1>
            <p className="hero-subtitle">
              ZamAI Pashto brings together learning tools, curated public collections, and maintainable
              workflows for building durable Pashto language software and reference content.
            </p>
            <div className="hero-actions">
              <Link to="/about" className="btn btn-primary btn-lg">
                View Platform Overview
                <span className="pashto-text">مرکز وپلټئ</span>
              </Link>
              <Link to="/resources" className="btn btn-outline btn-lg">
                Browse Reviewed Resources
              </Link>
              <Link to="/alphabet" className="btn btn-outline btn-lg">
                Open Learning Tools
              </Link>
            </div>
          </div>
          <div className="hero-visual fade-in">
            <div className="hero-card">
              <div className="hero-letters pashto-text">
                <span>پ</span>
                <span>ښ</span>
                <span>ت</span>
                <span>و</span>
              </div>
              <p>Reviewed content, usable tooling, and reproducible workflows for Pashto online</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="container">
          <div className="section-header">
            <h2>Who The Platform Supports</h2>
            <p className="pashto-text">دا ځای د چا لپاره دی</p>
            <p>ZamAI is structured for users, editors, and builders who need reliable Pashto tools and documented workflows.</p>
          </div>
          <div className="pillars-grid">
            {platformAudiences.map((pillar) => (
              <article key={pillar.title} className="pillar-card card">
                <h3>{pillar.title}</h3>
                <p className="pashto-text">{pillar.titlePashto}</p>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-label-pashto pashto-text">{stat.labelPashto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Platform Modules</h2>
            <p className="pashto-text">د پښتو بنسټیز وسایل</p>
            <p>Each module exposes a specific user surface inside the broader Pashto platform.</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="feature-card card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p className="feature-title-pashto pashto-text">{feature.titlePashto}</p>
                <p className="feature-description">{feature.description}</p>
                <span className="feature-link">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="resource-hub-section">
        <div className="container">
          <div className="section-header">
            <h2>Platform Surface Map</h2>
            <p className="pashto-text">دلته څه باید وي</p>
            <p>The platform is organized across tools, reviewed collections, and documented workflows rather than a single general hub.</p>
          </div>
          <div className="resource-hub-grid">
            {resourceAreas.map((area) => (
              <article key={area.title} className="resource-hub-card card">
                <h3>{area.title}</h3>
                <ul>
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to={area.link} className="resource-hub-link">
                  {area.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="collections-preview-section">
        <div className="container">
          <div className="section-header">
            <h2>Supported Public Collections</h2>
            <p className="pashto-text">ژوندي پښتو ټولګې</p>
            <p>These collection surfaces represent the approved public library the platform can maintain and expand.</p>
          </div>
          <div className="collections-preview-grid">
            {collectionPreviews.map((collection) => (
              <article key={collection.title} className="collection-preview-card card">
                <h3>{collection.title}</h3>
                <p className="pashto-text">{collection.titlePashto}</p>
                <div className="collection-preview-list">
                  {collection.items.map((item) => (
                    <div key={item} className="collection-preview-item">
                      <span>•</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <Link to={collection.link} className="resource-hub-link">
                  View the collection
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Pashto Section */}
      <section className="about-pashto-section">
        <div className="container">
          <div className="about-pashto-content">
            <div className="about-pashto-text">
              <h2>About Pashto Language</h2>
              <p className="pashto-text">د پښتو ژبې په اړه</p>
              <p>
                Pashto (پښتو) is an Eastern Iranian language spoken by over 50 million 
                people, primarily in Afghanistan and Pakistan. It is one of the two 
                official languages of Afghanistan and has a rich literary tradition 
                dating back centuries.
              </p>
              <p>
                The language features a unique alphabet derived from the Arabic script, 
                with additional letters to represent sounds specific to Pashto. Learning 
                Pashto opens doors to understanding Afghan culture, poetry, history, family life,
                and the living voice of Pashto communities across the world.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About ZamAI
              </Link>
            </div>
            <div className="about-pashto-visual">
              <div className="language-card">
                <h4>Quick Facts</h4>
                <ul>
                  <li><strong>Native Name:</strong> <span className="pashto-text">پښتو</span></li>
                  <li><strong>Language Family:</strong> Indo-Iranian</li>
                  <li><strong>Script:</strong> Pashto alphabet (Arabic-derived)</li>
                  <li><strong>Speakers:</strong> 50+ million</li>
                  <li><strong>Official in:</strong> Afghanistan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="future-topics-section">
        <div className="container">
          <div className="future-topics-card card">
            <div className="future-topics-copy">
              <h2>Contribution Intake Categories</h2>
              <p className="pashto-text">د ټولنې د مرستې لارې</p>
              <p>
                Public submissions stay open, but they enter a structured editorial workflow before they become part of the platform library.
              </p>
            </div>
            <div className="future-topics-list">
              {contributionLanes.map((lane) => (
                <div key={lane.title} className="future-topic-item">
                  <span>•</span>
                  <div>
                    <h4>{lane.title}</h4>
                    <p>{lane.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Operate, contribute to, and extend the Pashto platform</h2>
            <p className="pashto-text">راځئ چې د پښتو لپاره آنلاین یو قوي کور جوړ کړو</p>
            <p>Use the live tools, submit reviewed content, or open the docs to understand how the platform is structured.</p>
            <div className="cta-actions">
              <Link to="/docs" className="btn btn-primary btn-lg">
                Open Platform Docs
              </Link>
              <Link to="/resources#contribute" className="btn btn-outline btn-lg cta-secondary-btn">
                Submit Reviewed Content
              </Link>
              <Link to="/pipeline" className="btn btn-outline btn-lg cta-secondary-btn">
                Inspect Data Pipeline
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
