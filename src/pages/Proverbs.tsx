import { useState } from 'react'
import './Proverbs.css'

interface Proverb {
  pashto: string
  transliteration: string
  english: string
  meaning: string
  category: string
}

const proverbs: Proverb[] = [
  {
    pashto: 'چې مور ونه لرې، نو تر ښکلو کښې ښه وی',
    transliteration: "Che mor wona lare, no tar shkalo kshe kha wey",
    english: "If you don't have a mother, you'd better be pretty",
    meaning: "Having a mother's love and protection is invaluable; without it, one must rely on other qualities to survive.",
    category: 'Family'
  },
  {
    pashto: 'اوبه چې تیرې شي نو د پلو لاندې تیریږي',
    transliteration: "Oba che tere shi no da palo lande terezi",
    english: "When water has passed, it goes under the bridge",
    meaning: "What's done is done; don't dwell on the past.",
    category: 'Wisdom'
  },
  {
    pashto: 'په یوه ګل پسرلی نه راځي',
    transliteration: "Pa yawa gul pasarlay na razi",
    english: "Spring doesn't come with one flower",
    meaning: "One positive sign doesn't guarantee complete success; patience is needed.",
    category: 'Patience'
  },
  {
    pashto: 'سپی به غپي، کاروان به تیریږي',
    transliteration: "Spay ba ghapi, karawan ba terezi",
    english: "The dog barks, the caravan moves on",
    meaning: "Don't let critics stop you from pursuing your goals.",
    category: 'Perseverance'
  },
  {
    pashto: 'د ماشوم خوله حق وایي',
    transliteration: "Da maashom khwla haq wayi",
    english: "A child's mouth speaks the truth",
    meaning: "Children are honest and speak without pretense.",
    category: 'Truth'
  },
  {
    pashto: 'چې لاس نه درکوي مو نه ورکوي',
    transliteration: "Che laas na darkawi mo na warkawi",
    english: "He who doesn't give you a hand won't give you his head",
    meaning: "Those who won't help with small things won't help with big ones either.",
    category: 'Friendship'
  },
  {
    pashto: 'د غر سر ته تلل آسان دي، خو راتلل ګران دي',
    transliteration: "Da ghar sar ta tlal aasaan day, kho raatlal graan day",
    english: "Going up the mountain is easy, but coming down is hard",
    meaning: "Starting something is easier than seeing it through.",
    category: 'Wisdom'
  },
  {
    pashto: 'ګلان په اغزو کې شته',
    transliteration: "Gulaan pa aghzo ke shta",
    english: "Flowers grow among thorns",
    meaning: "Beautiful things come with difficulties; good things require sacrifice.",
    category: 'Life'
  },
  {
    pashto: 'هر چا خپل کور ښه ښکاري',
    transliteration: "Har cha khpal kor kha shkari",
    english: "Everyone's own home looks good to them",
    meaning: "We value what is ours; there's no place like home.",
    category: 'Home'
  },
  {
    pashto: 'زړه زړه ته لار لري',
    transliteration: "Zra zra ta laar lari",
    english: "Heart has a way to heart",
    meaning: "Genuine emotions and intentions can always reach another person.",
    category: 'Love'
  },
  {
    pashto: 'مېلمه د خدای مېلمه ده',
    transliteration: "Melmah da khuday melmah da",
    english: "A guest is God's guest",
    meaning: "Hospitality is sacred; guests should be treated with utmost respect.",
    category: 'Hospitality'
  },
  {
    pashto: 'صبر تلخ دی خو میوه یې خوږه ده',
    transliteration: "Sabr talkh day kho mewa ye khwaga da",
    english: "Patience is bitter but its fruit is sweet",
    meaning: "Enduring difficulties leads to good outcomes.",
    category: 'Patience'
  },
  {
    pashto: 'په کارونو کې عجله مه کوه',
    transliteration: "Pa karuno ke ajala ma kawa",
    english: "Don't rush in matters",
    meaning: "Take your time and think before acting.",
    category: 'Wisdom'
  },
  {
    pashto: 'لمر ته ګوته نه نیول کیږي',
    transliteration: "Lmar ta gota na newal kegi",
    english: "The sun cannot be hidden with a finger",
    meaning: "Truth cannot be concealed; it always comes out.",
    category: 'Truth'
  },
  {
    pashto: 'د نیکو نوم ژوندی وي',
    transliteration: "Da neeko nom zhwanday wey",
    english: "The name of the good lives on",
    meaning: "Good deeds and reputation outlast a person's life.",
    category: 'Legacy'
  },
  {
    pashto: 'علم د ځان لپاره زلمی کوي',
    transliteration: "Elm da dzaan lapara zalmay kawi",
    english: "Knowledge makes a man strong for himself",
    meaning: "Education empowers an individual.",
    category: 'Education'
  },
]

const categories = ['All', ...new Set(proverbs.map((p) => p.category))]

function Proverbs() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedProverb, setExpandedProverb] = useState<number | null>(null)

  const filteredProverbs = selectedCategory === 'All' 
    ? proverbs 
    : proverbs.filter((p) => p.category === selectedCategory)

  const getRandomProverb = () => {
    const randomIndex = Math.floor(Math.random() * proverbs.length)
    setExpandedProverb(randomIndex)
  }

  return (
    <div className="proverbs-page">
      <div className="container">
        <div className="page-header fade-in">
          <h1>Pashto Proverbs & Wisdom</h1>
          <p className="pashto-text page-title-pashto">پښتو متلونه او حکمت</p>
          <p className="page-subtitle">
            Discover traditional Pashto proverbs that reflect Afghan culture, values, and wisdom
          </p>
        </div>

        {/* Featured Proverb */}
        <div className="featured-proverb card fade-in">
          <div className="featured-badge">✨ Featured Proverb</div>
          <p className="featured-pashto pashto-text">{proverbs[0].pashto}</p>
          <p className="featured-trans">{proverbs[0].transliteration}</p>
          <p className="featured-english">"{proverbs[0].english}"</p>
          <p className="featured-meaning">{proverbs[0].meaning}</p>
          <button className="btn btn-outline random-btn" onClick={getRandomProverb}>
            🎲 Random Proverb
          </button>
        </div>

        {/* Category Filter */}
        <div className="proverbs-filter">
          <h3>Browse by Category</h3>
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Proverbs Grid */}
        <div className="proverbs-grid">
          {filteredProverbs.map((proverb, index) => (
            <div 
              key={index} 
              className={`proverb-card card ${expandedProverb === index ? 'expanded' : ''}`}
              onClick={() => setExpandedProverb(expandedProverb === index ? null : index)}
            >
              <div className="proverb-category-tag">{proverb.category}</div>
              <p className="proverb-pashto pashto-text">{proverb.pashto}</p>
              <p className="proverb-trans">{proverb.transliteration}</p>
              <p className="proverb-english">"{proverb.english}"</p>
              {expandedProverb === index && (
                <div className="proverb-meaning fade-in">
                  <h4>💡 Meaning:</h4>
                  <p>{proverb.meaning}</p>
                </div>
              )}
              <span className="expand-hint">
                {expandedProverb === index ? 'Click to collapse' : 'Click for meaning'}
              </span>
            </div>
          ))}
        </div>

        {/* Cultural Context */}
        <div className="cultural-context">
          <h2>About Pashto Proverbs</h2>
          <p className="pashto-text">د پښتو متلونو په اړه</p>
          
          <div className="context-grid">
            <div className="context-card card">
              <h3>📜 Rich Oral Tradition</h3>
              <p>
                Pashto proverbs (متلونه - Matluna) are an essential part of Pashtun 
                oral tradition, passed down through generations. They encapsulate 
                centuries of wisdom, experience, and cultural values.
              </p>
            </div>
            
            <div className="context-card card">
              <h3>🏔️ Pashtunwali Values</h3>
              <p>
                Many proverbs reflect the principles of Pashtunwali, the traditional 
                Pashtun code of conduct, including honor (Nang), hospitality 
                (Melmastia), and courage (Tureh).
              </p>
            </div>
            
            <div className="context-card card">
              <h3>🎭 Poetic Expression</h3>
              <p>
                Pashto proverbs often use metaphors from nature, daily life, and 
                the rugged Afghan landscape to convey deep philosophical messages 
                in concise, memorable phrases.
              </p>
            </div>
            
            <div className="context-card card">
              <h3>📚 Educational Value</h3>
              <p>
                Learning Pashto proverbs helps understand not just the language 
                but the mindset, values, and cultural identity of the Pashtun people.
              </p>
            </div>
          </div>
        </div>

        {/* Landay Section */}
        <div className="landay-section card">
          <h2>🎵 Pashto Landay (لنډۍ)</h2>
          <p>
            Landay is a traditional form of Pashto folk poetry, typically composed 
            of two lines with 9 and 13 syllables respectively. These short poems 
            express love, war, homeland, and grief.
          </p>
          <div className="landay-example">
            <p className="landay-pashto pashto-text">
              که ما یار ته لیدلی دی سترګو ته ګوره
            </p>
            <p className="landay-trans">
              Ka ma yaar ta ledaly day stargo ta gora
            </p>
            <p className="landay-english">
              "If I have seen my beloved, look into my eyes"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proverbs
