import './services.css'

interface ServicesProps {
    currentLanguage: LanguageType
}

const Services = ({currentLanguage}: ServicesProps) => {
    const servicesData = [
        {
            title: currentLanguage.turning,
            data: [{
                name: currentLanguage.cncLatheTitle,
                desc: currentLanguage.cncLatheSubTitle
            },
            {
                name: currentLanguage.latheTitle,
                desc: currentLanguage.latheSubTitle
            }]
        },
         {
            title: currentLanguage.milling,
            data: [{
                name: currentLanguage.cncMillTitle,
                desc: currentLanguage.cncMillSubTitle
            },
            {
                name: currentLanguage.horizontalAndVerticalTitle,
                desc: currentLanguage.horizontalAndVerticalSubTitle
            }]
        },
        {
            title: currentLanguage.metalCutting,
            data: [{
                name: currentLanguage.cncWaterjetTitle,
                desc: currentLanguage.cncWaterjetSubTitle
            },
            {
                name: currentLanguage.cncLaserTitle,
                desc: currentLanguage.cncLaserSubTitle
            },
            {
                name: currentLanguage.cncPressTitle,
                desc: currentLanguage.cncPressSubTitle
            }]
        },
        {
            title: currentLanguage.welding,
            data: [{
                name: currentLanguage.steelTitle,
                desc: ''
            },
            {
                name: currentLanguage.weldingTitle,
                desc: currentLanguage.weldingSubTitle
            }]
        },
        {
            title: currentLanguage.surfaceTreatment,
            data: [{
                name: currentLanguage.shotBlastingTitle,
                desc: currentLanguage.shotBlastingSubTitle
            },
            {
                name: currentLanguage.wetPaintingTitle,
                desc: currentLanguage.wetPaintingSubTitle
            }]
        },
        {
            title: currentLanguage.assembly,
            data: [{
                name: currentLanguage.workshopTitle,
                desc: currentLanguage.workshopSubTitle
            }]
        }
    ]


    return (
        <section className='servicesContainer' id='services'>
            <div className='services'>
                <div className='servicesHeader'>
                    <h2>
                        {currentLanguage.weldingText}
                    </h2>
                </div>
                <div className='servicesList'>
                    {servicesData.map((service, serviceIndex) => (
                        <div key={serviceIndex} className='servicesListItem'>
                            <div className='servicesListItemTitle'>
                                <h2 id={'serviceTitle'}>{service.title}</h2>
                            </div>
                            <div className='servicesListItemData'>
                                <ul>
                                    {service.data.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <h3>{item.name}</h3>
                                            <p>{item.desc}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <a href='./Metaro Equipment.pdf' target='_blank' id='servicesBtn'>{currentLanguage.equipment}</a>
            </div>
        </section>
    )
}

export default Services