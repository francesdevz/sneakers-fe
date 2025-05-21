import { LinkBarButton } from '../Component/ActionButton'; 
import logo from '../Common/Images/logo.png';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    if(location.pathname === "/profile") return null;
    return (
        <div className="container-fluid d-flex align-items-center justify-content-around border-bottom border-black">
            <div>
                <img
                    src={logo}
                    alt="Logo"
                    className="bg-black"
                    style={{ width: '180px', marginRight: '150px' }}
                />
            </div>
            <div className='col-4 d-flex justify-content-around'>
                <LinkBarButton label="Home" to="/" />
                <LinkBarButton 
                  label="Pages" 
                  to="/pages" 
                  dropdownItems={[
                      { label: "Home", to: "/" },
                      { label: "About", to: "/about" },
                      { label: "Collections", to: "/collections" },
                      { label: "Prices", to: "/prices" },
                      { label: "Services", to: "/services" },
                      { label: "Contact", to: "/contact" }
                  ]}
                  pathName={location.pathname}
                />
                <LinkBarButton label="Shop" to="/shop" />
                <LinkBarButton label="Collections" to="/collections" />
                <LinkBarButton 
                    label="Blog" 
                    to="/blog" 
                    dropdownItems={[
                      { label: "Archive", to: "/archive" },
                      { label: "Single Post", to: "/singlePost" },
                  ]}
                />
                <LinkBarButton label="Contact" to="/contact" />
            </div>
            <div className='col-3 d-flex justify-content-center'>
                <LinkBarButton icon={<Person2OutlinedIcon />} to="/profile" className={"me-3"} />
                <LinkBarButton icon ={<LocalMallOutlinedIcon/>} to="/pages" isCart={true}/>
            </div>
        </div>
    );
};

export default Navbar;
