import './pageContent.css'
import ContentHeader from './header/ContentHeader'
import Characteristics from './characteristics/Characteristics'
import Turnkey from './turnkey/Turnkey'
import Certificates from './certificates/Certificates'
import Capabilities from './capabilities/Capabilities'
import Services from './services/Services'
import Gallery from './gallery/Gallery'
import Vacancies from './vacancies/Vacancies'
import Contacts from './contacts/Contacts'
import Credentials from './credentials/Credentials'
import Funds from './funds/Funds'
import Footer from './footer/Footer'

interface PageContentProps {
  currentLanguage: LanguageType;
}

const PageContent = ({currentLanguage}: PageContentProps) => {

    return (
        <div className='pageContentContainer'>
            <div className='pageContent'>
                <ContentHeader currentLanguage={currentLanguage}/>
                <div className='pageContentInnerContainer'>
                    <Characteristics currentLanguage={currentLanguage} />
                </div>
                <Turnkey currentLanguage={currentLanguage}/>
                <Certificates currentLanguage={currentLanguage}/>
                <Capabilities currentLanguage={currentLanguage}/>
                <Services currentLanguage={currentLanguage}/>
                <Gallery currentLanguage={currentLanguage}/>
                <Vacancies currentLanguage={currentLanguage}/>
                <Contacts currentLanguage={currentLanguage}/>
                <Credentials currentLanguage={currentLanguage}/>
                <Funds />
                <Footer currentLanguage={currentLanguage}/>
            </div>
        </div>
    )
}

export default PageContent