import MetaroMap from '../map/MetaroMap'
import './credentials.css'

interface CredentialsProps {
    currentLanguage: LanguageType
}

const Credentials = ({currentLanguage}: CredentialsProps) => {

    return (
        <section className='credentialsContainer'>
            <div className='credentials'>
                <div className='credentialsSide'>
                    <h3>SIA METĀRO</h3>
                    <div className='credentialsInnerContainer'>
                        <div className='credentialsAddress'>
                            <p>{currentLanguage.street}</p>
                            <p>{currentLanguage.city}</p>
                            <p>{currentLanguage.postIndex}</p>
                            <div className='credentialsA'>
                                <h4>{currentLanguage.contactTelTitle}</h4>
                                <a href='tel:+37162202259' target='_blank'>+371 62202259</a>
                            </div>
                            <div className='credentialsA'>
                                <h4>{currentLanguage.contactEmailTitle}</h4>
                                <a href='mailto:info@metaro.lv' target='_blank'>info@metaro.lv</a>
                            </div>
                        </div>
                        <div className='credentialsTime'>
                            <h4 className='credentialsTimeTitle'>
                                {currentLanguage.workingHours}
                            </h4>
                            <div className='credentialsTimeData'>
                                <h4>{currentLanguage.workingDays}</h4>
                                <p>{currentLanguage.workingHoursSubTitle}</p>
                            </div>
                            <div className='credentialsTimeData'>
                                <h4>{currentLanguage.workingHoursFridayTitle}</h4>
                                <p>{currentLanguage.workingHoursFridaySubTitle}</p>
                            </div>
                        </div>
                        <div className='credentialsRequisites'>
                            <h4 className='credentialsRequisitesTitle'>
                                {currentLanguage.bankAccount}
                            </h4>
                            <h4>{currentLanguage.bankAccountTitle}</h4>
                            <div className='credentialsRequisitesData'>
                                <h4>{currentLanguage.bankAccountCodeTitle}</h4>
                                <p>{currentLanguage.bankAccountCodeSubTitle}</p>
                            </div>
                            <div className='credentialsRequisitesDataKont'>
                                <h4>{currentLanguage.accountNumberTitle}</h4>
                                <p>{currentLanguage.accountNumberSubTitle}</p>
                            </div>
                        </div>
                        <div className='credentialsPVN'>
                            <h4 className='credentialsPVNTitle'>
                                {currentLanguage.vatTitle}
                            </h4>
                            <div className='credentialsPVNData'>
                                <p>{currentLanguage.vatSubTitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <MetaroMap /> 
                    
                </div>
            </div>
        </section>
    )
}

export default Credentials