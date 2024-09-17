import Logo from '../assets/images/logo.svg'
import iconMenu from '../assets/images/icon-menu.svg'
import iconClose from '../assets/images/icon-close-menu.svg'


const Nav: React.FC = () => {
//   const { isOpen, toggleNav } = useNav(); // Access context values
    return (
      <nav className="mb-8 sm:flex mt-10 mx-5 ">
        <div className="flex gap-10">
          <img className="sm:ml-9" src={Logo} alt="logo" />
          <div className="">
            <ul className="sm:flex hidden gap-10 font-Epilogue font-semibold text-neutral-MediumGray">
              <li>Features</li>
              <li>Company</li>
              <li>Careers</li>
              <li>About</li>
            </ul>
          </div>

          <img
            className="sm:hidden mx-40 sm:max-w-screen-xs cursor-pointer"
            src={iconMenu}
            alt="icon-menu"
          />
        </div>

        <div className="sm:flex hidden gap-10 ml-auto font-Epilogue-regular font-semibold text-neutral-MediumGray">
          <button>Login</button>
          <button className=" hover:border border-black px-2">Register</button>
        </div>
      </nav>
    );
}

export default Nav;