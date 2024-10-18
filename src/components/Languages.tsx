import React from 'react'
import { LanguageProp } from '../utils/interfaces'

const Languages: React.FC<LanguageProp> = ({
    selectedLanguage,
    setSelectedLanguage,
    languages
  }) => { 
  return (
        <select 
        value={selectedLanguage} 
        onChange={(e) => setSelectedLanguage(e.target.value)} 
        className="form-select mb-3 select-lang"
        >
        {languages.length > 0 ? (
        languages.map((language) => (
            <option key={language.iso_639_1} value={language.iso_639_1}>
            {language.english_name}
            </option>
        ))
        ) : (
        <option disabled>Loading languages...</option>
        )}
    </select>
  )
}

export default Languages