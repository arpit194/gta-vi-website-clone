import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-15 py-12 fixed top-0 z-50">
      <a href="#hero" className="h-13 w-13 flex justify-center items-center">
        <img src="/logo.svg" alt="logo" className="h-8 w-8 invert" />
      </a>
      <Menu />
    </nav>
  );
};

export default Navbar;
