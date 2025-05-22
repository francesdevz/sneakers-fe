import heroHeader from '../Common/Images/shoes-header copy.png';
import { LinkBarButton } from './ActionButton';
import { motion } from "framer-motion"; 

/**
 * 
 * @returns {import('react').JSX.Element}
 */
const Hero = () => {
    return (
        <div 
            className="container-md position-relative d-flex flex-column justify-content-center"
            style={{ height: '612px' }}
        >
            {/* Background Image */}
            <motion.img 
                src={heroHeader} 
                alt="Hero background" 
                className="position-absolute top-30 start-50" 
                style={{width: 650, marginLeft: 25}}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            />

            {/* Foreground Text */}
            <h5>
                <span className="me-2 fs-5 align-middle text-black">*</span>
                Sneaker Collection
            </h5>

            <motion.h1 
                style={{
                    fontSize: '80px',
                    width: '700px'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                GOOD SHOES TAKE YOU GOOD PLACES
            </motion.h1>

            <motion.div 
                className='heroBtn'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                style={{width: '120px'}}
            >
                <LinkBarButton 
                    label='Shop Now'
                    className='link-bar-btn ps-4 pe-4 pt-2 pb-2 border border-black mt-4'
                    style={{width: '120px'}}
                />
            </motion.div>
        </div>
    );
};

export default Hero;
