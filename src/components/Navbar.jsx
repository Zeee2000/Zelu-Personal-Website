import {useState} from 'react';
import PropTypes from 'prop-types';
import {navLinks} from '../constants';
import {logo} from '../assets';

const NavLink = ({link, active, setActive, setIsMenuOpen}) => (
    <a
        key={link.id}
        href={`#${link.id}`}
        className={`rounded-md px-3 py-2 text-sm font-medium ${active === link.id ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
        onClick={() => {
            setActive(link.id);
            setIsMenuOpen(false);
        }}
    >
        {link.title}
    </a>
);

NavLink.propTypes = {
    link: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    active: PropTypes.string.isRequired,
    setActive: PropTypes.func.isRequired,
    setIsMenuOpen: PropTypes.func.isRequired,
};

const HamburgerButton = ({isMenuOpen, setIsMenuOpen}) => (
    <button
        type="button"
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
        aria-controls="mobile-menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
        <span className="sr-only">Open main menu</span>
        {isMenuOpen ? (
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        ) : (
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
        )}
    </button>
);

HamburgerButton.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    setIsMenuOpen: PropTypes.func.isRequired,
};

const Navbar = () => {
    const [active, setActive] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 z-50 shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <img className="h-20 w-20 sm:h-20" src={logo} alt="Your Company"/>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center sm:ml-auto">
                        <div className="flex space-x-4">
                            {navLinks.map((link) => (
                                <NavLink key={link.id} link={link} active={active} setActive={setActive}
                                         setIsMenuOpen={setIsMenuOpen}/>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <HamburgerButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg sm:hidden" id="mobile-menu">
                    <div className="flex flex-col py-1">
                        {navLinks.map((link) => (
                            <NavLink key={link.id} link={link} active={active} setActive={setActive}
                                     setIsMenuOpen={setIsMenuOpen}/>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;