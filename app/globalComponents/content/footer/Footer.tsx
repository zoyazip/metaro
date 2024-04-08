import './footer.css'

interface FooterProps {
    currentLanguage: LanguageType
}

const Footer = ({currentLanguage}: FooterProps) => {
    return (
        <section className='footerContainer'>
            <div className='footer'>
                <a href='./Code of Conduct.pdf' target='_blank'>{currentLanguage.codeOfConduct}</a>
            </div>
        </section>
    )
}

export default Footer