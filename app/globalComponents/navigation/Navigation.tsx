"use client"

import Image from 'next/image'
import './navigation.css'
import React, { useState } from 'react'
import fin from "../languages/fin"
import eng from "../languages/eng"
import swe from "../languages/swe"
import lv from "../languages/lv"

interface NavigationProps {
  click: (language: LanguageType) => void;
  language: LanguageType;
}

const Navigation = ({click, language}: NavigationProps) => {

    const changeLanguage = (languageChange: LanguageType) => {
        console.log("called")
        click(languageChange)
    }

    const [displayMenu, setDisplayMenu] = useState('hidden')
    const [burgerStatus, setBurgerStatus] = useState('./burgerClosed.svg')

    const toggleMobileMenu = () => {
        if (burgerStatus === './burgerClosed.svg') {
            setBurgerStatus('./burgerOpen.svg')
            setDisplayMenu('visible')
            document.body.style.overflow = 'hidden'
        } else {
            setBurgerStatus('./burgerClosed.svg')
            setDisplayMenu('hidden')
            document.body.style.overflow = 'auto'
        }
    }

    const scrollToAnchor = (elementId: string) => {
        const yOffset = -300;
        const element = document.getElementById(elementId)
        const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset

        window.scrollTo({top: y, behavior: 'smooth'});
    }

    return (
        <nav className='navigationContainer'>
            <div className={`navigationTop ${displayMenu}`}>
                <div className='navigationSocialIcons'>
                    <Image src="./facebook.svg" width={25} height={25} alt='Facebook'/>
                    <Image src="./instagram.svg" width={25} height={25} alt='Instagram'/>
                    <Image src="./linkedin.svg" width={25} height={25} alt='LinkedIn'/>
                </div>
                <div className='navigationContacts'>
                    <div className='navigationPhone'>
                        <Image src="./tel.svg" width={25} height={25} alt='phone'/>
                        <a className='navigationContactLink' href='tel:+37125654406' target='_blank'>+371 25 654 406</a>
                    </div>
                    <div className='navigationMail'>
                        <Image src="./mail.svg" width={25} height={25} alt='phone'/>
                        <a className='navigationContactLink' href='mailto:info@metaro.lv' target='_blank'>info@metaro.lv</a>
                    </div>
                </div>
                <div className='navigationLanguages'>
                        <Image src="./lv.svg" width={25} height={25} alt='Lv' onClick={() => changeLanguage(lv)}/>
                        <Image src="./eng.svg" width={25} height={25} alt='Eng' onClick={() => changeLanguage(eng)}/>
                        <Image src="./fi.svg" width={25} height={25} alt='Fin' onClick={() => changeLanguage(fin)}/>
                        <Image src="./swe.svg" width={25} height={25} alt='Swe' onClick={() => changeLanguage(swe)}/>
                    </div>
            </div>
            <div className='navigationBottomFullsize'>
                <div className='navigationBottom'>
                    <div className='navigationLogo'>
                        <a href='#'>
                            <Image src='/metaro_logo.png' alt='Metaro Logo' width={100} height={90}/>
                        </a>
                    </div>
                    <div className={`navigationLinks ${displayMenu}`}>
                        <a onClick={() => {scrollToAnchor("home")}}>{language.home}</a>
                        <a onClick={() => {scrollToAnchor("about")}}>{language.about}</a>
                        <a onClick={() => {scrollToAnchor("certifications")}}>{language.certifications}</a>
                        <a onClick={() => {scrollToAnchor("services")}}>{language.services}</a>
                        <a onClick={() => {scrollToAnchor("gallery")}}>{language.gallery}</a>
                        <a onClick={() => {scrollToAnchor("vacancies")}}>{language.vacancies}</a>
                    </div>
                    <div className={`navigationContactUsBtn ${displayMenu}`}>
                        <a onClick={() => {scrollToAnchor("contacts")}} className='contactUsBtn'>{language.contactUs}</a>
                    </div>
                    <div className={`NavigationBurgerMenuIcon`}>
                        <Image src={burgerStatus} width={40} height={40} alt='BurgerMenuClosed' onClick={toggleMobileMenu}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;