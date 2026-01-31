import { useState } from 'react'
import './Alphabet.css'

interface Letter {
  pashto: string
  name: string
  transliteration: string
  sound: string
  example: string
  exampleMeaning: string
}

const pashtoAlphabet: Letter[] = [
  { pashto: 'ا', name: 'Alef', transliteration: 'a', sound: 'a as in "father"', example: 'اوبه', exampleMeaning: 'water' },
  { pashto: 'ب', name: 'Be', transliteration: 'b', sound: 'b as in "boy"', example: 'بابا', exampleMeaning: 'father' },
  { pashto: 'پ', name: 'Pe', transliteration: 'p', sound: 'p as in "pen"', example: 'پښتو', exampleMeaning: 'Pashto' },
  { pashto: 'ت', name: 'Te', transliteration: 't', sound: 't as in "top"', example: 'تور', exampleMeaning: 'black' },
  { pashto: 'ټ', name: 'Ṭe', transliteration: 'ṭ', sound: 'retroflex t', example: 'ټوپ', exampleMeaning: 'jump' },
  { pashto: 'ث', name: 'Se', transliteration: 's', sound: 'th as in "think"', example: 'ثبوت', exampleMeaning: 'proof' },
  { pashto: 'ج', name: 'Jim', transliteration: 'j', sound: 'j as in "jam"', example: 'جامه', exampleMeaning: 'dress' },
  { pashto: 'چ', name: 'Che', transliteration: 'č', sound: 'ch as in "chair"', example: 'چای', exampleMeaning: 'tea' },
  { pashto: 'ح', name: 'He', transliteration: 'ḥ', sound: 'h (pharyngeal)', example: 'حق', exampleMeaning: 'right' },
  { pashto: 'خ', name: 'Khe', transliteration: 'kh', sound: 'ch as in "loch"', example: 'خور', exampleMeaning: 'sister' },
  { pashto: 'څ', name: 'Tse', transliteration: 'ts', sound: 'ts as in "cats"', example: 'څه', exampleMeaning: 'what' },
  { pashto: 'ځ', name: 'Dze', transliteration: 'dz', sound: 'dz as in "adze"', example: 'ځان', exampleMeaning: 'self' },
  { pashto: 'د', name: 'Dal', transliteration: 'd', sound: 'd as in "dog"', example: 'دا', exampleMeaning: 'this' },
  { pashto: 'ډ', name: 'Ḍal', transliteration: 'ḍ', sound: 'retroflex d', example: 'ډوډۍ', exampleMeaning: 'bread' },
  { pashto: 'ذ', name: 'Zal', transliteration: 'z', sound: 'th as in "the"', example: 'ذکر', exampleMeaning: 'mention' },
  { pashto: 'ر', name: 'Re', transliteration: 'r', sound: 'r as in "run"', example: 'روغ', exampleMeaning: 'healthy' },
  { pashto: 'ړ', name: 'Ṛe', transliteration: 'ṛ', sound: 'retroflex r', example: 'ړوند', exampleMeaning: 'blind' },
  { pashto: 'ز', name: 'Ze', transliteration: 'z', sound: 'z as in "zoo"', example: 'زړه', exampleMeaning: 'heart' },
  { pashto: 'ژ', name: 'Zhe', transliteration: 'zh', sound: 's as in "pleasure"', example: 'ژوند', exampleMeaning: 'life' },
  { pashto: 'ږ', name: 'Ge', transliteration: 'ǵ', sound: 'voiced g (velar fricative)', example: 'ږوږ', exampleMeaning: 'voice' },
  { pashto: 'س', name: 'Sin', transliteration: 's', sound: 's as in "sun"', example: 'سر', exampleMeaning: 'head' },
  { pashto: 'ش', name: 'Shin', transliteration: 'sh', sound: 'sh as in "ship"', example: 'شپه', exampleMeaning: 'night' },
  { pashto: 'ښ', name: 'Ṣhin', transliteration: 'ṣ̌', sound: 'sh (retroflex)', example: 'ښه', exampleMeaning: 'good' },
  { pashto: 'ص', name: 'Ṣad', transliteration: 'ṣ', sound: 's (emphatic)', example: 'صبر', exampleMeaning: 'patience' },
  { pashto: 'ض', name: 'Ḍad', transliteration: 'ḍ', sound: 'd (emphatic)', example: 'ضرور', exampleMeaning: 'necessary' },
  { pashto: 'ط', name: 'Ṭa', transliteration: 'ṭ', sound: 't (emphatic)', example: 'طبیب', exampleMeaning: 'doctor' },
  { pashto: 'ظ', name: 'Ẓa', transliteration: 'ẓ', sound: 'z (emphatic)', example: 'ظالم', exampleMeaning: 'cruel' },
  { pashto: 'ع', name: 'Ayn', transliteration: 'ʿ', sound: 'voiced pharyngeal', example: 'علم', exampleMeaning: 'knowledge' },
  { pashto: 'غ', name: 'Ghayn', transliteration: 'gh', sound: 'French r', example: 'غر', exampleMeaning: 'mountain' },
  { pashto: 'ف', name: 'Fe', transliteration: 'f', sound: 'f as in "fun"', example: 'فکر', exampleMeaning: 'thought' },
  { pashto: 'ق', name: 'Qaf', transliteration: 'q', sound: 'k (uvular)', example: 'قلم', exampleMeaning: 'pen' },
  { pashto: 'ک', name: 'Kaf', transliteration: 'k', sound: 'k as in "king"', example: 'کور', exampleMeaning: 'house' },
  { pashto: 'ګ', name: 'Gaf', transliteration: 'g', sound: 'g as in "go"', example: 'ګل', exampleMeaning: 'flower' },
  { pashto: 'ل', name: 'Lam', transliteration: 'l', sound: 'l as in "love"', example: 'لاس', exampleMeaning: 'hand' },
  { pashto: 'م', name: 'Mim', transliteration: 'm', sound: 'm as in "man"', example: 'مور', exampleMeaning: 'mother' },
  { pashto: 'ن', name: 'Nun', transliteration: 'n', sound: 'n as in "no"', example: 'نوم', exampleMeaning: 'name' },
  { pashto: 'ڼ', name: 'Ṇun', transliteration: 'ṇ', sound: 'retroflex n', example: 'مڼه', exampleMeaning: 'apple' },
  { pashto: 'و', name: 'Waw', transliteration: 'w/o/u', sound: 'w as in "water"', example: 'ور', exampleMeaning: 'door' },
  { pashto: 'ه', name: 'He', transliteration: 'h/a', sound: 'h as in "hat"', example: 'هلک', exampleMeaning: 'boy' },
  { pashto: 'ی', name: 'Ye', transliteration: 'y/i', sound: 'y as in "yes"', example: 'یو', exampleMeaning: 'one' },
  { pashto: 'ۍ', name: 'Pashtun Ye', transliteration: 'əi', sound: 'schwa + y', example: 'نجلۍ', exampleMeaning: 'girl' },
  { pashto: 'ې', name: 'Ye with tail', transliteration: 'e', sound: 'e as in "bed"', example: 'ستوري', exampleMeaning: 'stars' },
  { pashto: 'ئ', name: 'Hamza on Ye', transliteration: 'ʾ', sound: 'glottal stop', example: 'رائي', exampleMeaning: 'opinion' },
]

function Alphabet() {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredAlphabet = pashtoAlphabet.filter(
    (letter) =>
      letter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      letter.transliteration.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="alphabet-page">
      <div className="container">
        <div className="page-header fade-in">
          <h1>Pashto Alphabet</h1>
          <p className="pashto-text page-title-pashto">پښتو الفبا</p>
          <p className="page-subtitle">
            Learn the 44 letters of the Pashto alphabet with pronunciation guides and examples
          </p>
        </div>

        <div className="alphabet-controls">
          <input
            type="text"
            placeholder="Search by name or transliteration..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="alphabet-info">
            <span>📝 {filteredAlphabet.length} letters</span>
            <span>🔤 Right to Left script</span>
          </div>
        </div>

        <div className="alphabet-grid">
          {filteredAlphabet.map((letter, index) => (
            <button
              key={index}
              className={`letter-card ${selectedLetter?.pashto === letter.pashto ? 'selected' : ''}`}
              onClick={() => setSelectedLetter(letter)}
            >
              <span className="letter-pashto pashto-text">{letter.pashto}</span>
              <span className="letter-name">{letter.name}</span>
              <span className="letter-trans">{letter.transliteration}</span>
            </button>
          ))}
        </div>

        {selectedLetter && (
          <div className="letter-detail card fade-in">
            <button className="close-btn" onClick={() => setSelectedLetter(null)}>×</button>
            <div className="letter-detail-content">
              <div className="letter-detail-main">
                <span className="letter-big pashto-text">{selectedLetter.pashto}</span>
                <div className="letter-info">
                  <h2>{selectedLetter.name}</h2>
                  <p className="transliteration">Transliteration: <strong>{selectedLetter.transliteration}</strong></p>
                  <p className="sound">Sound: {selectedLetter.sound}</p>
                </div>
              </div>
              <div className="letter-example">
                <h4>Example Word:</h4>
                <div className="example-word">
                  <span className="example-pashto pashto-text">{selectedLetter.example}</span>
                  <span className="example-meaning">{selectedLetter.exampleMeaning}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="alphabet-tips card">
          <h3>📚 Learning Tips</h3>
          <ul>
            <li><strong>Right to Left:</strong> Pashto is written from right to left</li>
            <li><strong>Connected Letters:</strong> Most letters connect to adjacent letters</li>
            <li><strong>Retroflex Sounds:</strong> Letters with dots below (ټ, ډ, ړ, ڼ) are pronounced with the tongue curled back</li>
            <li><strong>Unique Letters:</strong> څ, ځ, ږ, ښ, ڼ, ۍ, ې are unique to Pashto</li>
            <li><strong>Practice Daily:</strong> Consistent practice helps with memorization</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Alphabet
