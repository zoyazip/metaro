"use client"

import PageContent from './globalComponents/content/PageContent'
import Navigation from './globalComponents/navigation/Navigation'
import styles from './page.module.css'
import { useState } from 'react'
// import 'normalize.css/normalize.css'

import lv from "./globalComponents/languages/lv"


export default function Home() {

  
  const [language, setLanguage] = useState(lv)

  const handleLanguageChange = (languageChange: LanguageType) => {
    setLanguage(languageChange)
    console.log(`Language was switched to ${language}`)
  }

  return (
    <main className={styles.main}>
      <Navigation click={setLanguage} language={language}/>
      <PageContent currentLanguage={language} />
    </main>
  )
}
