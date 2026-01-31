import { useState } from 'react'
import './Translator.css'

// Simple dictionary for basic translations
const dictionary: Record<string, { ps: string; en: string }[]> = {
  'hello': [{ ps: 'سلام', en: 'hello' }],
  'سلام': [{ ps: 'سلام', en: 'hello / peace' }],
  'goodbye': [{ ps: 'نور امان', en: 'goodbye' }],
  'thank you': [{ ps: 'مننه', en: 'thank you' }],
  'مننه': [{ ps: 'مننه', en: 'thank you' }],
  'yes': [{ ps: 'هو', en: 'yes' }],
  'هو': [{ ps: 'هو', en: 'yes' }],
  'no': [{ ps: 'نه', en: 'no' }],
  'نه': [{ ps: 'نه', en: 'no' }],
  'water': [{ ps: 'اوبه', en: 'water' }],
  'اوبه': [{ ps: 'اوبه', en: 'water' }],
  'bread': [{ ps: 'ډوډۍ', en: 'bread' }],
  'ډوډۍ': [{ ps: 'ډوډۍ', en: 'bread' }],
  'house': [{ ps: 'کور', en: 'house/home' }],
  'home': [{ ps: 'کور', en: 'house/home' }],
  'کور': [{ ps: 'کور', en: 'house/home' }],
  'mother': [{ ps: 'مور', en: 'mother' }],
  'مور': [{ ps: 'مور', en: 'mother' }],
  'father': [{ ps: 'پلار', en: 'father' }],
  'پلار': [{ ps: 'پلار', en: 'father' }],
  'brother': [{ ps: 'ورور', en: 'brother' }],
  'ورور': [{ ps: 'ورور', en: 'brother' }],
  'sister': [{ ps: 'خور', en: 'sister' }],
  'خور': [{ ps: 'خور', en: 'sister' }],
  'love': [{ ps: 'مینه', en: 'love' }],
  'مینه': [{ ps: 'مینه', en: 'love' }],
  'peace': [{ ps: 'سوله', en: 'peace' }],
  'سوله': [{ ps: 'سوله', en: 'peace' }],
  'good': [{ ps: 'ښه', en: 'good' }],
  'ښه': [{ ps: 'ښه', en: 'good' }],
  'bad': [{ ps: 'بد', en: 'bad' }],
  'بد': [{ ps: 'بد', en: 'bad' }],
  'life': [{ ps: 'ژوند', en: 'life' }],
  'ژوند': [{ ps: 'ژوند', en: 'life' }],
  'heart': [{ ps: 'زړه', en: 'heart' }],
  'زړه': [{ ps: 'زړه', en: 'heart' }],
  'flower': [{ ps: 'ګل', en: 'flower' }],
  'ګل': [{ ps: 'ګل', en: 'flower' }],
  'sun': [{ ps: 'لمر', en: 'sun' }],
  'لمر': [{ ps: 'لمر', en: 'sun' }],
  'moon': [{ ps: 'سپوږمۍ', en: 'moon' }],
  'سپوږمۍ': [{ ps: 'سپوږمۍ', en: 'moon' }],
  'star': [{ ps: 'ستوری', en: 'star' }],
  'ستوری': [{ ps: 'ستوری', en: 'star' }],
  'mountain': [{ ps: 'غر', en: 'mountain' }],
  'غر': [{ ps: 'غر', en: 'mountain' }],
  'river': [{ ps: 'سیند', en: 'river' }],
  'سیند': [{ ps: 'سیند', en: 'river' }],
  'tree': [{ ps: 'ونه', en: 'tree' }],
  'ونه': [{ ps: 'ونه', en: 'tree' }],
  'book': [{ ps: 'کتاب', en: 'book' }],
  'کتاب': [{ ps: 'کتاب', en: 'book' }],
  'school': [{ ps: 'ښوونځی', en: 'school' }],
  'ښوونځی': [{ ps: 'ښوونځی', en: 'school' }],
  'teacher': [{ ps: 'ښوونکی', en: 'teacher' }],
  'ښوونکی': [{ ps: 'ښوونکی', en: 'teacher' }],
  'student': [{ ps: 'زده کوونکی', en: 'student' }],
  'friend': [{ ps: 'ملګری', en: 'friend' }],
  'ملګری': [{ ps: 'ملګری', en: 'friend' }],
}

const commonPhrases = [
  { pashto: 'زه پښتو زده کوم', english: 'I am learning Pashto' },
  { pashto: 'ستا نوم څه دی؟', english: 'What is your name?' },
  { pashto: 'زما نوم ... دی', english: 'My name is ...' },
  { pashto: 'څنګه یې؟', english: 'How are you?' },
  { pashto: 'زه ښه یم، مننه', english: 'I am fine, thank you' },
  { pashto: 'تاسو د کوم ځای یاست؟', english: 'Where are you from?' },
  { pashto: 'زه افغانستان ته ورځم', english: 'I am going to Afghanistan' },
  { pashto: 'دا څومره ده؟', english: 'How much is this?' },
]

function Translator() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [direction, setDirection] = useState<'en-ps' | 'ps-en'>('en-ps')
  const [isTranslating, setIsTranslating] = useState(false)

  const handleTranslate = () => {
    if (!inputText.trim()) {
      setOutputText('')
      return
    }

    setIsTranslating(true)
    
    // Simulate translation delay
    setTimeout(() => {
      const words = inputText.toLowerCase().trim().split(/\s+/)
      const translatedWords: string[] = []
      let foundTranslation = false

      // Try to find direct match first
      const exactMatch = dictionary[inputText.toLowerCase().trim()]
      if (exactMatch) {
        if (direction === 'en-ps') {
          setOutputText(exactMatch[0].ps)
        } else {
          setOutputText(exactMatch[0].en)
        }
        foundTranslation = true
      } else {
        // Word by word translation
        for (const word of words) {
          const match = dictionary[word]
          if (match) {
            translatedWords.push(direction === 'en-ps' ? match[0].ps : match[0].en)
            foundTranslation = true
          } else {
            translatedWords.push(word)
          }
        }
        
        if (foundTranslation) {
          setOutputText(translatedWords.join(' '))
        } else {
          setOutputText('Translation not found. Try common words like: hello, goodbye, thank you, water, bread, house, mother, father, love, peace')
        }
      }
      
      setIsTranslating(false)
    }, 500)
  }

  const swapDirection = () => {
    setDirection(direction === 'en-ps' ? 'ps-en' : 'en-ps')
    setInputText(outputText)
    setOutputText(inputText)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText)
  }

  return (
    <div className="translator-page">
      <div className="container">
        <div className="page-header fade-in">
          <h1>Pashto Translator</h1>
          <p className="pashto-text page-title-pashto">پښتو ژباړن</p>
          <p className="page-subtitle">
            Translate between Pashto and English with our dictionary-based translation tool
          </p>
        </div>

        <div className="translator-card card fade-in">
          <div className="translator-header">
            <div className="language-label">
              {direction === 'en-ps' ? '🇬🇧 English' : '🇦🇫 Pashto'}
            </div>
            <button className="swap-btn" onClick={swapDirection} title="Swap languages">
              ⇄
            </button>
            <div className="language-label">
              {direction === 'en-ps' ? '🇦🇫 Pashto' : '🇬🇧 English'}
            </div>
          </div>

          <div className="translator-body">
            <div className="translator-input-area">
              <textarea
                className={`translator-textarea ${direction === 'ps-en' ? 'pashto-text' : ''}`}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={direction === 'en-ps' ? 'Enter English text...' : 'پښتو متن ولیکئ...'}
                rows={5}
              />
              <div className="char-count">{inputText.length} characters</div>
            </div>

            <div className="translator-actions">
              <button 
                className="btn btn-primary translate-btn"
                onClick={handleTranslate}
                disabled={isTranslating}
              >
                {isTranslating ? 'Translating...' : 'Translate'}
              </button>
            </div>

            <div className="translator-output-area">
              <textarea
                className={`translator-textarea output ${direction === 'en-ps' ? 'pashto-text' : ''}`}
                value={outputText}
                readOnly
                placeholder={direction === 'en-ps' ? 'ژباړه به دلته ښکاره شي...' : 'Translation will appear here...'}
                rows={5}
              />
              {outputText && (
                <button className="copy-btn" onClick={copyToClipboard} title="Copy to clipboard">
                  📋
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="translator-info">
          <div className="info-card card">
            <h3>💡 Tips for Better Translation</h3>
            <ul>
              <li>Use simple, common words for best results</li>
              <li>Try translating one word at a time for accuracy</li>
              <li>Check the vocabulary section for verified translations</li>
              <li>This is a basic dictionary-based translator for learning purposes</li>
            </ul>
          </div>
        </div>

        <div className="common-phrases">
          <h2>Common Phrases</h2>
          <p className="pashto-text">عام جملې</p>
          <div className="phrases-grid">
            {commonPhrases.map((phrase, index) => (
              <div key={index} className="phrase-card card">
                <p className="phrase-pashto pashto-text">{phrase.pashto}</p>
                <p className="phrase-english">{phrase.english}</p>
                <button 
                  className="use-phrase-btn"
                  onClick={() => {
                    setInputText(phrase.pashto)
                    setDirection('ps-en')
                  }}
                >
                  Use this phrase
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="ai-notice card">
          <h3>🤖 About ZamAI Translator</h3>
          <p>
            This translator uses a curated dictionary for educational purposes. 
            For production-grade Pashto-English translation, check out the 
            <strong> ZamAI-Translator-Pashto-EN</strong> model on Hugging Face, 
            which provides more comprehensive AI-powered translation capabilities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Translator
