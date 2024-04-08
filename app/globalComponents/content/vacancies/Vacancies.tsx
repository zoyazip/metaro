import './vacancies.css'
import Image from 'next/image';

interface VacanciesProps { 
    currentLanguage: LanguageType
}

const Vacancies = ({currentLanguage}: VacanciesProps) => {

    const vacancies = [
        {
            name: currentLanguage.cncMillOperatorTitle,
            desc: currentLanguage.cncMillOperatorSubTitle,
            available: true,
            link: '#'
        },
        {
            name: currentLanguage.cncLatheOperatorTitle,
            desc: currentLanguage.cncMillOperatorSubTitle,
            available: false,
            link: '#'
        },
        {
            name: currentLanguage.industrialPainterTitle,
            desc: currentLanguage.industrialPainterSubTitle,
            available: false,
            link: '#'
        },
        {
            name: currentLanguage.sheetProcessingOperatorTitle,
            desc: currentLanguage.sheetProcessingOperatorSubTitle,
            available: false,
            link: '#'
        },
        {
            name: currentLanguage.engineerTitle,
            desc: currentLanguage.engineerSubTitle,
            available: false,
            link: '#'
        },
        {
            name: currentLanguage.qualityControllTitle,
            desc: currentLanguage.qualityControllSubTitle,
            available: false,
            link: '#'
        }
    ]

    return (
        <section className='vacanciesContainer' id='vacancies'>
            <h1>{currentLanguage.vacanciesTitle}</h1>
            <div className='vacancies' >
                <div className='vacanciesList'>
                   <ul>
                        {vacancies.map((vacancy, index) => (
                            <li 
                                key={index} 
                                id={ vacancy.available ? 'available' : 'notAvailable' }
                                className='vacancyItem'>
                                <div className='vacancyData'>
                                    <div className='vacancyName'>
                                        <h3>{vacancy.name}</h3>
                                    </div>
                                    <p>{vacancy.desc}</p>
                                </div>
                                <div className='vacancyArrow'>
                                    <Image src='/vacancyArrow.svg' width={40} height={40} alt='vacancyArrow'/>
                                </div>
                            </li>
                        ))}
                   </ul>
                </div>
            </div>
        </section>
    )
}

export default Vacancies