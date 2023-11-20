import logo from "../icons_assets/Logo.svg";

const Nav = () => {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="little lemon logo" />
      </a>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
