import './turnkey.css'

interface TurnKeyProps {
    currentLanguage: LanguageType
}

const Turnkey = ( {currentLanguage}: TurnKeyProps) => {

    return (
        <section className='turnkeyContainer'>
            <div className='turnkey'>
                <div className='turnkeyItem'>
                    <h2>{currentLanguage.turnkeySolutionTitle}</h2>
                    <p>{currentLanguage.turnKeySolutionSubTitle}</p>
                </div>
                <div className='turnkeyItem'>
                    <h2>{currentLanguage.contractManufacturerTitle}</h2>
                    <p>{currentLanguage.contractManufacturerSubTitle}</p>
                </div>
            </div>
        </section>
    )
}

export default Turnkey