import Image from 'next/image'
import './contentHeader.css'

interface ContentHeaderProps {
    currentLanguage: LanguageType
}

const ContentHeader = ({currentLanguage}: ContentHeaderProps) => {


    return (
        <header className='contentHeader' id='home'>
            <video autoPlay muted loop playsInline className='headerBgVideo'>
                <source src="./bg.mp4" type="video/mp4"/>
            </video>
            <div className='headerVideoOverlap'>
                <div className='headerPrimaryText'>
                    <h1>{currentLanguage.title}</h1>
                </div>
                <div className='headerSecondaryText'>
                    <p>{currentLanguage.subTitle}</p>
                </div>
                <div className='headerArrow'>
                    <Image src='./arrow.svg' alt='arrow' width={83} height={83}/>
                </div>
            </div>
        </header>
    )
}

export default ContentHeader