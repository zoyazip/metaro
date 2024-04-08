import Image from 'next/image'
import './funds.css'

const Funds = () => {
    return (
        <section className='fundsContainer'>
            <div className='funds'>
                <Image src='/footerInfo.png' alt='Nacionālais Attīstības Plāns 2020' width={400} height={104}/>
            </div>
        </section>
    )
}

export default Funds