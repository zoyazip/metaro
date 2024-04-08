'use client'

import './gallery.css'
import { useState } from 'react';
import Image from 'next/image';

interface GalleryProps {
    currentLanguage: LanguageType
}

const Gallery = ({currentLanguage}: GalleryProps) => {
    const [selectedImage, setSelectedImage] = useState('/pix1.jpg');
    const images = ['/pix1.jpg', '/pix2.jpg', '/pix3.jpg', '/pix4.jpg', '/pix5.jpg', '/pix6.jpg', '/pix7.jpg', '/pix8.jpg', '/pix9.jpg',];
    return (
        <section className='galleryContainer' id='gallery'>
            <h1>{currentLanguage.galleryTitle}</h1>
            <div className='gallery'>
                    <div className='galleryList'>
                        <div className='selectedImage'>
                            <Image src={selectedImage} alt="Selected" width={600} height={630} objectFit="contain" />
                        </div>
                        <div className='imageGrid'>
                            {images.map((img, index) => (
                                <div key={index} className='gridItem' onClick={() => setSelectedImage(img)}>
                                    <Image src={img} alt={`Thumbnail ${index}`} layout="responsive" objectFit="contain" width={180} height={180}/>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Gallery