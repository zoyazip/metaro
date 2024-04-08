import './metaroMap.css'

const MetaroMap = () => {
    return (
                    <iframe
                    className='metaroMap'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2142.4124670982683!2d25.451738877195286!3d57.5223938543239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ebeea5e04a757b%3A0xa16f14c751616d32!2sCempu%20iela%2021A%2C%20Valmiera%2C%20LV-4201!5e0!3m2!1sen!2slv!4v1705176478382!5m2!1sen!2slv"
                        width="600"
                        height="450"
                        style={{ border: 0, overflow: 'hidden' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        >
                    </iframe>
            );
};


export default MetaroMap