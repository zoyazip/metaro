import Image from 'next/image'
import './characteristics.css'

interface CharacteristicProps {
    currentLanguage: LanguageType
}

const Characteristics = ({currentLanguage}: CharacteristicProps) => {
const characteristics = [
    {
        icon: './contract.svg',
        text: currentLanguage.contractManufacturer
    },
    {
        icon: './years.svg',
        text: currentLanguage.years
    },
    {
        icon: './employees.svg',
        text: currentLanguage.employees
    },
    {
        icon: './turnover.svg',
        text: currentLanguage.turnover
    },
    {
        icon: './induvidualParts.svg',
        text: currentLanguage.induvidualParts
    },
    {
        icon: './singlePeace.svg',
        text: currentLanguage.singlePiece
    },
    {
        icon: './area.svg',
        text: currentLanguage.producionArea
    },
    {
        icon: './exported.svg',
        text: currentLanguage.countriesExport
    },
]

    return (
        <section className='charecteristicsContainer' id='about'>
            {characteristics.map((item, index) => (
                <div id={'item-' + index} key={index} className='charecteristicsContainerItem'>
                    <div className='characteristicsIcon'>
                        <Image src={item.icon} alt='Characteristic Icon' width={100} height={100} />
                    </div>
                    <div className='characteristicsText'>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Characteristics