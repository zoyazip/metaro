'use client'

import Image from 'next/image'
import './certificates.css'
import { useState } from 'react';

interface CertificatesProps {
    currentLanguage: LanguageType
}

const Certificates = ({currentLanguage}: CertificatesProps) => {

    const certificates = [
        {
            image: './iso9001.svg',
            text: 'ISO 9001:2015'
        },
        {
            image: './iso14001.svg',
            text: 'ISO 14001:2015'
        },
        {
            image: './iso3834.svg',
            text: 'ISO 3834-2:2006'
        }
    ]

    const [showCertificates, setShowCertificates] = useState(false);

    const toggleCertificates = () => {
        setShowCertificates(!showCertificates);
        console.log("clicked")
    }

    return (
        <section className='certificatesContainer' id='certifications'>
            <div className='showCertificates' onClick={toggleCertificates}>
                <h2>{currentLanguage.certifications}</h2>
                <div>
                    <Image src='./certificatesArrow.svg' alt='Certificate Arrow' width={30} height={30} className={showCertificates ? 'rotateArrow' : ''} />
                </div>
            </div>
            <div className={`certificates ${showCertificates ? 'show' : ''}`}>
                {certificates.map((item, index) => (
                    <div key={index} className='certificate'>
                        <div className='certificateImage'>
                            <Image src={item.image} alt={item.text + ' Icon'} width={180} height={180} />
                        </div>
                        <div className='certificatesText'>
                            <h3>{item.text}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Certificates