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
            Open-source tools for Pashto language learning, AI translation, and cultural preservation
          </p>
        </div>

        {/* Mission Section */}
        <div className="mission-section fade-in">
          <div className="mission-card card">
            <h2>🎯 Our Mission</h2>
            <p className="pashto-text">زموږ هدف</p>
            <p className="mission-text">
              ZamAI is dedicated to creating digital tools and resources to help preserve, 
              teach, and celebrate Pashto language and Afghan culture through technology. 
              We believe that language preservation is essential for maintaining cultural 
              heritage and connecting communities across generations.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="what-we-do">
          <h2>What We Do</h2>
          <p className="pashto-text">موږ څه کوو</p>
          
          <div className="services-grid">
            <div className="service-card card">
              <div className="service-icon">📚</div>
              <h3>Language Learning</h3>
              <p className="pashto-text">ژبه زده کول</p>
              <p>
                Interactive tools for learning the Pashto alphabet, building vocabulary, 
                and mastering essential phrases for everyday communication.
              </p>
            </div>
            
            <div className="service-card card">
              <div className="service-icon">🤖</div>
              <h3>AI Translation</h3>
              <p className="pashto-text">AI ژباړه</p>
              <p>
                Advanced machine learning models for Pashto-English translation, 
                trained on diverse datasets to provide accurate and culturally-aware translations.
              </p>
            </div>
            
            <div className="service-card card">
              <div className="service-icon">🏛️</div>
              <h3>Cultural Preservation</h3>
              <p className="pashto-text">کلتوري ساتنه</p>
              <p>
                Documenting and sharing Pashto proverbs, poetry, and traditions 
                to ensure they are preserved for future generations.
              </p>
            </div>
            
            <div className="service-card card">
              <div className="service-icon">💻</div>
              <h3>Open Source</h3>
              <p className="pashto-text">خلاص سرچینه</p>
              <p>
                All our tools and datasets are open-source, enabling developers 
                and researchers worldwide to contribute to Pashto language technology.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Projects */}
        <div className="projects-section">
          <h2>Our Projects</h2>
          <p className="pashto-text">زموږ پروژې</p>
          
          <div className="projects-grid">
            <div className="project-card card">
              <h3>ZamAI-LLama3-Pashto</h3>
              <p className="project-desc">
                An advanced LLaMA-3-based AI model fine-tuned for Pashto and English, 
                capable of text generation, tutoring, and conversational AI.
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
                Specialized translation model for accurate Pashto-English and 
                English-Pashto translation with cultural context preservation.
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
                Centralized, automated pipeline for collecting, cleaning, and 
                normalizing Pashto language data for AI/ML model training.
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
            <p className="pipeline-cta-kicker">Corpus Building</p>
            <h2>See how the Pashto data pipeline works</h2>
            <p className="pashto-text">د پښتو د معلوماتو پایپ لاین وګورئ</p>
            <p>
              Review the collection workflow, source guidance, and runnable scraping scripts used to gather
              articles, PDFs, and training corpora.
            </p>
          </div>
          <Link to="/pipeline" className="btn btn-primary btn-lg pipeline-cta-link">
            Open Data Pipeline
          </Link>
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
          <h2>Contributing</h2>
          <p className="pashto-text">مرسته کول</p>
          <p className="contributing-text">
            ZamAI is an open-source project, and we welcome contributions from 
            developers, linguists, and anyone passionate about Pashto language preservation.
          </p>
          
          <div className="contribute-ways">
            <div className="contribute-card">
              <span className="contribute-icon">💻</span>
              <h4>Code</h4>
              <p>Contribute to our repositories on GitHub</p>
            </div>
            <div className="contribute-card">
              <span className="contribute-icon">📝</span>
              <h4>Content</h4>
              <p>Help add vocabulary, proverbs, and translations</p>
            </div>
            <div className="contribute-card">
              <span className="contribute-icon">🔍</span>
              <h4>Review</h4>
              <p>Help verify accuracy of translations and content</p>
            </div>
            <div className="contribute-card">
              <span className="contribute-icon">📢</span>
              <h4>Spread</h4>
              <p>Share ZamAI with others interested in Pashto</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="contact-section card">
          <h2>Get in Touch</h2>
          <p className="pashto-text">موږ سره اړیکه ونیسئ</p>
          <p>
            Have questions, suggestions, or want to collaborate? 
            We'd love to hear from you!
          </p>
          <div className="contact-links">
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
          <p className="quote-trans">"Language is the identity of a nation"</p>
        </div>
      </div>
    </div>
  )
}

export default About
