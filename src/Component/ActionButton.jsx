import { Link } from 'react-router-dom';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Badge } from '@mui/material';
import { Shop2Outlined } from '@mui/icons-material';
/**
 * A reusable button-like link component for the navbar with optional dropdown.
 *
 * @param {Object} props
 * @param {JSX.Element} [props.icon] Optional icon to display
 * @param {string} props.label Text to display
 * @param {string} [props.to] Route path
 * @param {Array} [props.dropdownItems] Array of dropdown items: { label, to }
 * @param {string} [props.className] Optional class names
 * @param {string} [props.pathName] Optional to detect the current url
 * @param {Boolean} [props.isCart] Optional to determine if it is a cart icon
 * @param {Object} [props.style] Optional style
 * @returns {JSX.Element}
 */
export const LinkBarButton = ({ 
    icon = null,
    label, 
    to = "/", 
    dropdownItems = null,
    className = "", 
    pathName,
    isCart = false,
    style = {},
    ...htmlProps 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    if (dropdownItems) {
        return (
            <div 
                className="nav-item dropdown"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <span
                    className={`nav-link dropdown-toggle ${className}`} 
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded={isOpen}
                >
                    {icon && <span className="me-2">{icon}</span>}
                    {label}
                </span>
                <ul className={`dropdown-menu border-black ${isOpen ? "show" : ""}`}>
                    {dropdownItems.map((item, idx) => (
                        <li key={idx}>
                            <Link 
                                className={
                                    `dropdown-item ${idx !== dropdownItems.length - 1 ? "border-bottom border-black" : ""} 
                                    ${item.to === pathName ? "bg-black text-white" : ""}`
                                } 
                                to={item.to}
                            >
                                {item.label}                              
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <Link 
            to={to} 
            className={`nav-link ${className} position-relative`} 
            {...htmlProps} 
            style={style}
        >

            {/* Render label as usual */}
            {label}

            {/* Cart icon with badge */}
            {icon && isCart && (
            <Badge
                badgeContent={0}
                showZero
                overlap="circular"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    '& .MuiBadge-badge': {
                        backgroundColor: 'black',
                        color: 'white',
                        fontSize: '10px'
                    },
                }}
            >
                {/* The cart icon */}
                <span className="me-2">{icon}</span>
            </Badge>
            )}

            {/* Non-cart icon (normal use) */}
            {icon && !isCart && <span className="me-2">{icon}</span>}

        </Link>
    )
};
