import { useState } from 'react'
import './Vocabulary.css'

interface Word {
  pashto: string
  english: string
  pronunciation: string
  category: string
  example?: string
  exampleTranslation?: string
}

const vocabularyWords: Word[] = [
  // Greetings
  { pashto: 'سلام', english: 'Hello/Peace', pronunciation: 'Salaam', category: 'Greetings' },
  { pashto: 'نور امان', english: 'Goodbye', pronunciation: 'Noor amaan', category: 'Greetings' },
  { pashto: 'مننه', english: 'Thank you', pronunciation: 'Manana', category: 'Greetings' },
  { pashto: 'خوش آمدې', english: 'Welcome', pronunciation: 'Khush aamade', category: 'Greetings' },
  { pashto: 'څنګه یې؟', english: 'How are you?', pronunciation: 'Tsanga ye?', category: 'Greetings' },
  { pashto: 'ښه یم', english: 'I am fine', pronunciation: 'Kha yam', category: 'Greetings' },
  
  // Family
  { pashto: 'مور', english: 'Mother', pronunciation: 'Mor', category: 'Family' },
  { pashto: 'پلار', english: 'Father', pronunciation: 'Plaar', category: 'Family' },
  { pashto: 'خور', english: 'Sister', pronunciation: 'Khor', category: 'Family' },
  { pashto: 'ورور', english: 'Brother', pronunciation: 'Wror', category: 'Family' },
  { pashto: 'نیکه', english: 'Grandfather', pronunciation: 'Neeka', category: 'Family' },
  { pashto: 'نیا', english: 'Grandmother', pronunciation: 'Nyaa', category: 'Family' },
  { pashto: 'زوی', english: 'Son', pronunciation: 'Zoy', category: 'Family' },
  { pashto: 'لور', english: 'Daughter', pronunciation: 'Lor', category: 'Family' },
  
  // Numbers
  { pashto: 'یو', english: 'One', pronunciation: 'Yo', category: 'Numbers' },
  { pashto: 'دوه', english: 'Two', pronunciation: 'Dwa', category: 'Numbers' },
  { pashto: 'درې', english: 'Three', pronunciation: 'Dre', category: 'Numbers' },
  { pashto: 'څلور', english: 'Four', pronunciation: 'Tsalor', category: 'Numbers' },
  { pashto: 'پنځه', english: 'Five', pronunciation: 'Pinza', category: 'Numbers' },
  { pashto: 'شپږ', english: 'Six', pronunciation: 'Shpag', category: 'Numbers' },
  { pashto: 'اووه', english: 'Seven', pronunciation: 'Owwa', category: 'Numbers' },
  { pashto: 'اته', english: 'Eight', pronunciation: 'Ata', category: 'Numbers' },
  { pashto: 'نهه', english: 'Nine', pronunciation: 'Naha', category: 'Numbers' },
  { pashto: 'لس', english: 'Ten', pronunciation: 'Las', category: 'Numbers' },
  
  // Colors
  { pashto: 'سور', english: 'Red', pronunciation: 'Sor', category: 'Colors' },
  { pashto: 'شین', english: 'Green', pronunciation: 'Sheen', category: 'Colors' },
  { pashto: 'آسماني', english: 'Blue', pronunciation: 'Aasmaani', category: 'Colors' },
  { pashto: 'ژیړ', english: 'Yellow', pronunciation: 'Zheehr', category: 'Colors' },
  { pashto: 'تور', english: 'Black', pronunciation: 'Tor', category: 'Colors' },
  { pashto: 'سپین', english: 'White', pronunciation: 'Spin', category: 'Colors' },
  
  // Body Parts
  { pashto: 'سر', english: 'Head', pronunciation: 'Sar', category: 'Body' },
  { pashto: 'سترګې', english: 'Eyes', pronunciation: 'Starge', category: 'Body' },
  { pashto: 'غوږ', english: 'Ear', pronunciation: 'Ghwag', category: 'Body' },
  { pashto: 'خوله', english: 'Mouth', pronunciation: 'Khwla', category: 'Body' },
  { pashto: 'لاس', english: 'Hand', pronunciation: 'Laas', category: 'Body' },
  { pashto: 'پښه', english: 'Foot', pronunciation: 'Psha', category: 'Body' },
  { pashto: 'زړه', english: 'Heart', pronunciation: 'Zra', category: 'Body' },
  
  // Food
  { pashto: 'ډوډۍ', english: 'Bread', pronunciation: 'Dodai', category: 'Food' },
  { pashto: 'اوبه', english: 'Water', pronunciation: 'Oba', category: 'Food' },
  { pashto: 'چای', english: 'Tea', pronunciation: 'Chaai', category: 'Food' },
  { pashto: 'غوښه', english: 'Meat', pronunciation: 'Ghwasha', category: 'Food' },
  { pashto: 'وریجې', english: 'Rice', pronunciation: 'Wrije', category: 'Food' },
  { pashto: 'مڼه', english: 'Apple', pronunciation: 'Mana', category: 'Food' },
  
  // Nature
  { pashto: 'غر', english: 'Mountain', pronunciation: 'Ghar', category: 'Nature' },
  { pashto: 'سیند', english: 'River', pronunciation: 'Seend', category: 'Nature' },
  { pashto: 'ونه', english: 'Tree', pronunciation: 'Wana', category: 'Nature' },
  { pashto: 'ګل', english: 'Flower', pronunciation: 'Gul', category: 'Nature' },
  { pashto: 'لمر', english: 'Sun', pronunciation: 'Lmar', category: 'Nature' },
  { pashto: 'سپوږمۍ', english: 'Moon', pronunciation: 'Spogmai', category: 'Nature' },
  { pashto: 'ستوري', english: 'Stars', pronunciation: 'Storay', category: 'Nature' },
  
  // Common Verbs
  { pashto: 'تلل', english: 'To go', pronunciation: 'Tlal', category: 'Verbs' },
  { pashto: 'راتلل', english: 'To come', pronunciation: 'Raatlal', category: 'Verbs' },
  { pashto: 'خوړل', english: 'To eat', pronunciation: 'Khooral', category: 'Verbs' },
  { pashto: 'وینل', english: 'To see', pronunciation: 'Waynal', category: 'Verbs' },
  { pashto: 'اورېدل', english: 'To hear', pronunciation: 'Awredal', category: 'Verbs' },
  { pashto: 'لیکل', english: 'To write', pronunciation: 'Likal', category: 'Verbs' },
  { pashto: 'لوستل', english: 'To read', pronunciation: 'Lostal', category: 'Verbs' },
  
  // Places
  { pashto: 'کور', english: 'House/Home', pronunciation: 'Kor', category: 'Places' },
  { pashto: 'ښوونځی', english: 'School', pronunciation: 'Khwundzai', category: 'Places' },
  { pashto: 'بازار', english: 'Market', pronunciation: 'Baazaar', category: 'Places' },
  { pashto: 'جومات', english: 'Mosque', pronunciation: 'Jomaat', category: 'Places' },
  { pashto: 'شفاخانه', english: 'Hospital', pronunciation: 'Shifaakhaana', category: 'Places' },
]

const categories = ['All', ...new Set(vocabularyWords.map((w) => w.category))]

function Vocabulary() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [learnedWords, setLearnedWords] = useState<Set<string>>(new Set())

  const filteredWords = vocabularyWords.filter((word) => {
    const matchesCategory = selectedCategory === 'All' || word.category === selectedCategory
    const matchesSearch =
      word.pashto.includes(searchTerm) ||
      word.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.pronunciation.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleLearned = (word: string) => {
    const newLearned = new Set(learnedWords)
    if (newLearned.has(word)) {
      newLearned.delete(word)
    } else {
      newLearned.add(word)
    }
    setLearnedWords(newLearned)
  }

  const getDailyWord = () => {
    const today = new Date()
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
    )
    return vocabularyWords[dayOfYear % vocabularyWords.length]
  }

  const dailyWord = getDailyWord()

  return (
    <div className="vocabulary-page">
      <div className="container">
        <div className="page-header fade-in">
          <h1>Vocabulary Builder</h1>
          <p className="pashto-text page-title-pashto">لغات جوړونه</p>
          <p className="page-subtitle">
            Build your Pashto vocabulary with essential words and phrases
          </p>
        </div>

        {/* Daily Word */}
        <div className="daily-word card fade-in">
          <div className="daily-word-badge">📅 Word of the Day</div>
          <div className="daily-word-content">
            <div className="daily-word-main">
              <span className="daily-pashto pashto-text">{dailyWord.pashto}</span>
              <span className="daily-english">{dailyWord.english}</span>
            </div>
            <div className="daily-word-info">
              <p><strong>Pronunciation:</strong> {dailyWord.pronunciation}</p>
              <p><strong>Category:</strong> {dailyWord.category}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="vocabulary-controls">
          <input
            type="text"
            placeholder="Search words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
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

        {/* Stats */}
        <div className="vocabulary-stats">
          <div className="stat">
            <span className="stat-number">{filteredWords.length}</span>
            <span className="stat-label">Words</span>
          </div>
          <div className="stat">
            <span className="stat-number">{learnedWords.size}</span>
            <span className="stat-label">Learned</span>
          </div>
          <div className="stat">
            <span className="stat-number">{Math.round((learnedWords.size / vocabularyWords.length) * 100)}%</span>
            <span className="stat-label">Progress</span>
          </div>
        </div>

        {/* Word Grid */}
        <div className="vocabulary-grid">
          {filteredWords.map((word, index) => (
            <div
              key={index}
              className={`word-card card ${learnedWords.has(word.pashto) ? 'learned' : ''}`}
            >
              <div className="word-content">
                <span className="word-pashto pashto-text">{word.pashto}</span>
                <span className="word-english">{word.english}</span>
                <span className="word-pronunciation">{word.pronunciation}</span>
              </div>
              <div className="word-actions">
                <span className="word-category">{word.category}</span>
                <button
                  className={`learn-btn ${learnedWords.has(word.pashto) ? 'active' : ''}`}
                  onClick={() => toggleLearned(word.pashto)}
                  title={learnedWords.has(word.pashto) ? 'Mark as unlearned' : 'Mark as learned'}
                >
                  {learnedWords.has(word.pashto) ? '✓' : '○'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredWords.length === 0 && (
          <div className="no-results">
            <p>No words found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Vocabulary
