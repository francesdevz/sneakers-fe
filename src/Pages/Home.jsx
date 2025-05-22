import Hero from '../Component/Hero';
import shoeHero from '../Common/Images/shoe-2-min.png';
import { LinkBarButton } from '../Component/ActionButton';
import { motion } from "framer-motion"; 
import CustomerDivider from '../Component/CustomerDivider';

const Home = () => {
    return (
        <>
            <div>
                <Hero />
                <div 
                    className='container-md d-flex flex-column justify-content-center align-items-center text-center'
                    style={{ height: '150px' }}
                >
                    <motion.h5
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="me-2 align-middle text-black">*</span>
                        ELEVATE YOUR STYLE
                    </motion.h5>
                    <motion.h2
                        className='d-flex align-items-center justify-content-center flex-wrap'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Step Into Style Where Sneaker Dreams Take Flight! 
                        <motion.img 
                            src={shoeHero}
                            alt="Sneaker"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            style={{ width: 100, marginLeft: 20 }}
                        />
                    </motion.h2>
                    <motion.div 
                        className='heroBtn mt-3'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        style={{ width: '120px' }}
                    >
                        <LinkBarButton 
                            label='VIEW ALL'
                            className='link-bar-btn ps-4 pe-4 pt-2 pb-2 border border-black'
                            style={{ width: '120px' }}
                        />
                    </motion.div>
                </div>
                <CustomerDivider/>
            </div>
        </>
    );
};

export default Home;
