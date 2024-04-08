import './contacts.css'

interface ContactsProps {
    currentLanguage: LanguageType
}

const Contacts = ({currentLanguage}: ContactsProps) => {
    const contacts = [
        {
            title: currentLanguage.inquiruesTitle,
            tel: '+371 25 654 406',
            hrefTel: '+37125654406',
            email: 'arturs@metaro.lv'
        },
        {
            title: currentLanguage.financesTitle,
            tel: '+371 29 226 788',
            hrefTel: '+37129226788',
            email: 'janis@metaro.lv'
        },
        {
            title: currentLanguage.productionTitle,
            tel: '+371 20 295 649',
            hrefTel: '+37120295649',
            email: 'girts@metaro.lv'
        },
        {
            title: currentLanguage.sheetProcessingTitle,
            tel: '+371 27 042 009',
            hrefTel: '+37127042009',
            email: 'ralfs@metaro.lv'
        },
    ]


    return (
        <section className='contactsContainer' id='contacts'>
            <div className='contacts'>
                <div className='contactsHeader'>
                    <h1>{currentLanguage.contactsTitle}</h1>
                </div>
                <div className='contactsList'>
                    <ul>
                         {contacts.map((contact, index) => (
                            <li key={index}>
                                <div className='contactTitle'>
                                    <h3>{contact.title}</h3>
                                </div>
                                <div className='contactData'>
                                    <div className='contactDetails'>
                                        <h5>{currentLanguage.inquiriesTelSubTitle}</h5>
                                        <a href={`tel:${contact.hrefTel}`} target='_blank'>{contact.tel}</a>
                                    </div>
                                    <div className='contactDetails'>
                                        <h5>{currentLanguage.inquiriesEmailSubTitle}</h5>
                                        <a href={`mailto:${contact.email}`} target='_blank'>{contact.email}</a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contacts