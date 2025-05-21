import heroHeader from '../Common/Images/shoes-header.png';

const Hero = () => {
    return (
        <div 
            className="container-md position-relative d-flex flex-column justify-content-center"
            style={{ height: '612px' }}
        >
            {/* Background Image */}
            <img 
                src={heroHeader} 
                alt="Hero background" 
                className="position-absolute top-30 start-0 w-100 h-100" 
                style={{ objectFit: 'cover', zIndex: -1 }}
            />

            {/* Foreground Text */}
            <h5>
                <span className="me-2 fs-5 align-middle text-danger">*</span>
                Unparalleled Service
            </h5>
            <h1 
                style={{
                    fontSize: '112px',
                    width: '700px'
                }}
            >
                Discover All Our Shoes Store !
            </h1>
        </div>
    );
};

export default Hero;
