import { LinkBarButton } from '../Component/ActionButton'; 
import logo from '../Common/Images/logo.png';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
                    style={{ width: '180px', marginRight: '150px' }}
                />
            </div>
            <div className='col-4 d-flex justify-content-around'>
                <LinkBarButton label="Home" to="/" />
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
                <LinkBarButton 
                    icon={
                        <SearchIcon 
                            fontSize='small'
                        />
                    } 
                    to="/search-product" 
                    style={{ fontSize: '1px'}} 
                    className={"me-3"} 
                />
                <LinkBarButton 
                    icon={
                        <Person2OutlinedIcon 
                            fontSize='small'
                        />
                    } 
                    to="/profile" 
                    className={"me-3"} 
                />
                <LinkBarButton 
                    icon={
                        <FavoriteBorderIcon 
                            fontSize='small'
                        />
                    } 
                    to="/wish-list" 
                    className={"me-3"} 
                />
                <LinkBarButton 
                    icon ={
                        <LocalMallOutlinedIcon
                            fontSize='small'
                        />
                    } 
                    to="/cart" 
                    isCart={true} 
                    className={"me-3"}
                />
            </div>
        </div>
    );
};

export default Navbar;
