// Styling
import { ThemeButton, LinkStyle, LogoStyle } from "../styles";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <LogoStyle to="/">
        <img
          className="navbar-brand img-responsive"
          src="https://www.pngkey.com/png/full/373-3737092_cookie-clipart-logo-png-cookie-logo-png.png"
        />
      </LogoStyle>

      <div className="navbar-nav ml-auto">
        <LinkStyle to="/products" className="nav-item mx-2">
          Products
        </LinkStyle>
        <LinkStyle to="/products/add" className="nav-item mx-2">
          Add
        </LinkStyle>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
