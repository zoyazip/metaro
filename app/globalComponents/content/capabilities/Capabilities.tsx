import Image from 'next/image'
import './capabilities.css'

interface CapabilitiesProps {
    currentLanguage: LanguageType
}

const Capabilities = ({currentLanguage}: CapabilitiesProps) => {

    const capabilities = [
        {
            image: './SolidWorksLogo.svg',
            text: currentLanguage.capabilitiesSolidworks
        },
        {
            image: './CamWorksLogo.svg',
            text: currentLanguage.capabilitiesSolidCam
        },
        {
            image: './MonitorLogo.svg',
            text: currentLanguage.capabilitiesERP
        }
    ]

    return (
        <section className='capabilitiesContainer'>
            <h1>{currentLanguage.capabilitiesTitle}</h1>
            <div className='capabilities'>
                {
                    capabilities.map((item, index) => (
                        <div className='capability' id={`cap-item-${index}`} key={index}>
                            <div className='capabilityImage'>
                                <Image src={item.image} alt={item.text} width={365} height={76} />
                            </div>
                            <div className='capabilityText'>
                                <p>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Capabilities