import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header fade-in">
          <h1>About ZamAI Pashto</h1>
          <p className="pashto-text page-title-pashto">د ZamAI پښتو په اړه</p>
          <p className="page-subtitle">
            Platform overview for Pashto tools, reviewed resources, and maintainable language infrastructure
          </p>
        </div>

        {/* Mission Section */}
        <div className="mission-section fade-in">
          <div className="mission-card card">
            <h2>Platform Mission</h2>
            <p className="pashto-text">زموږ هدف</p>
            <p className="mission-text">
              ZamAI Pashto is building a durable platform for Pashto language software,
              reviewed public resources, and reproducible data workflows. The goal is not
              only to publish tools, but to document and maintain the operational surfaces
              required for long-term Pashto use online.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="what-we-do">
          <h2>Platform Capabilities</h2>
          <p className="pashto-text">موږ څه کوو</p>
          
          <div className="services-grid">
            <div className="service-card card">
              <div className="service-icon">📚</div>
              <h3>Learning Surfaces</h3>
              <p className="pashto-text">ژبه زده کول</p>
              <p>
                Public learning modules for the alphabet, vocabulary, and translation tasks
                that make Pashto easier to study and use consistently.
              </p>
            </div>
            
            <div className="service-card card">
              <div className="service-icon">🤖</div>
              <h3>Translation Direction</h3>
              <p className="pashto-text">AI ژباړه</p>
              <p>
                Translation tooling and model direction for Pashto-English use cases,
                supported by curated data and platform documentation.
              </p>
            </div>
            
            <div className="service-card card">
              <div className="service-icon">🏛️</div>
              <h3>Reviewed Reference Collections</h3>
              <p className="pashto-text">کلتوري ساتنه</p>
              <p>
                Approved collections for proverbs, poetry, names, books, and media references
                that can be published and expanded through editorial review.
              </p>
            </div>
            
            <div className="service-card card">
              <div className="service-icon">💻</div>
              <h3>Operational Infrastructure</h3>
              <p className="pashto-text">خلاص سرچینه</p>
              <p>
                Open-source runtime components, documented workflows, and versioned content
                management for maintainers and builders working on Pashto language technology.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Projects */}
        <div className="projects-section">
          <h2>Platform Components</h2>
          <p className="pashto-text">زموږ پروژې</p>
          
          <div className="projects-grid">
            <div className="project-card card">
              <h3>ZamAI-LLama3-Pashto</h3>
              <p className="project-desc">
                A model track for Pashto and English generation, tutoring, and conversational use,
                positioned as one component in the broader ZamAI platform.
              </p>
              <div className="project-tags">
                <span className="tag">LLM</span>
                <span className="tag">Pashto</span>
                <span className="tag">Hugging Face</span>
              </div>
            </div>
            
            <div className="project-card card">
              <h3>ZamAI-Translator</h3>
              <p className="project-desc">
                Translation-focused platform component for Pashto-English and English-Pashto
                workflows backed by curated datasets and operational documentation.
              </p>
              <div className="project-tags">
                <span className="tag">Translation</span>
                <span className="tag">NMT</span>
                <span className="tag">BiLingual</span>
              </div>
            </div>
            
            <div className="project-card card">
              <h3>Data Processing Pipeline</h3>
              <p className="project-desc">
                The ingestion and transformation layer for collecting, cleaning, reviewing,
                and publishing Pashto language data into maintainable downstream assets.
              </p>
              <div className="project-tags">
                <span className="tag">Data</span>
                <span className="tag">ETL</span>
                <span className="tag">NLP</span>
              </div>
              <Link to="/pipeline" className="project-link">
                Explore the pipeline workflow
              </Link>
            </div>
          </div>
        </div>

        <div className="pipeline-cta card">
          <div>
            <p className="pipeline-cta-kicker">Operational Reference</p>
            <h2>Review the live pipeline and platform documentation</h2>
            <p className="pashto-text">د پښتو د معلوماتو پایپ لاین وګورئ</p>
            <p>
              Use the pipeline page for the runnable collection assets, then open the docs page for API,
              contribution, and export references used by maintainers.
            </p>
          </div>
          <div className="pipeline-cta-actions">
            <Link to="/pipeline" className="btn btn-primary btn-lg pipeline-cta-link">
              Open Data Pipeline
            </Link>
            <Link to="/docs" className="btn btn-outline btn-lg pipeline-cta-link">
              Open Platform Docs
            </Link>
          </div>
        </div>

        {/* About Pashto Language */}
        <div className="about-language card">
          <div className="language-content">
            <div className="language-text">
              <h2>About Pashto Language</h2>
              <p className="pashto-text">د پښتو ژبې په اړه</p>
              <p>
                Pashto (پښتو) is an Eastern Iranian language of the Indo-European family. 
                It is one of the two official languages of Afghanistan and is spoken by 
                approximately 50-60 million people worldwide.
              </p>
              <ul>
                <li><strong>Classification:</strong> Indo-European → Iranian → Eastern Iranian</li>
                <li><strong>Script:</strong> Pashto alphabet (modified Arabic script)</li>
                <li><strong>Direction:</strong> Right-to-left (RTL)</li>
                <li><strong>Dialects:</strong> Kandahari, Peshawari, and regional variants</li>
                <li><strong>Official Status:</strong> National language of Afghanistan</li>
              </ul>
            </div>
            <div className="language-visual">
              <div className="pashto-sample">
                <h4 className="pashto-text">پښتو</h4>
                <p>Pashto</p>
                <div className="flag-colors">
                  <span className="flag-black"></span>
                  <span className="flag-red"></span>
                  <span className="flag-green"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contributing */}
        <div className="contributing-section">
          <h2>Contribution Modes</h2>
          <p className="pashto-text">مرسته کول</p>
          <p className="contributing-text">
            The platform supports code changes, content submissions, editorial review, and public distribution.
            Each contribution path should map to a documented workflow instead of an ad hoc update.
          </p>
          
          <div className="contribute-ways">
            <div className="contribute-card">
              <span className="contribute-icon">💻</span>
              <h4>Code</h4>
              <p>Extend platform components, routes, and infrastructure in the repository.</p>
            </div>
            <div className="contribute-card">
              <span className="contribute-icon">📝</span>
              <h4>Content</h4>
              <p>Submit new resource entries for editorial review and public publication.</p>
            </div>
            <div className="contribute-card">
              <span className="contribute-icon">🔍</span>
              <h4>Review</h4>
              <p>Verify translation quality, context, and collection integrity before approval.</p>
            </div>
            <div className="contribute-card">
              <span className="contribute-icon">📢</span>
              <h4>Operate</h4>
              <p>Use the docs, moderation flow, and export process to keep public data current.</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="contact-section card">
          <h2>Platform Links</h2>
          <p className="pashto-text">موږ سره اړیکه ونیسئ</p>
          <p>
            Use the public repository, model page, and platform docs as the primary operational entry points.
          </p>
          <div className="contact-links">
            <Link to="/docs" className="contact-link">
              <span>📘</span> Platform Docs
            </Link>
            <a href="https://github.com/ZamAI-Pashto" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span>🔗</span> GitHub Organization
            </a>
            <a href="https://huggingface.co/tasal9" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span>🤗</span> Hugging Face Models
            </a>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="footer-quote">
          <p className="quote-pashto pashto-text">ژبه د ولس هویت دی</p>
          <p className="quote-trans">"Language infrastructure helps that identity endure online."</p>
        </div>
      </div>
    </div>
  )
}

export default About
