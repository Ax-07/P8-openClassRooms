import { NavBar } from "/src/components/NavBar";
import logo from "/src/assets/images/LOGO.svg";

export const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <NavBar className="header__nav" />
    </header>
  );
};
