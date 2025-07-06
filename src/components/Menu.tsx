import NavMenu from "./NavMenu";
import { useState } from "react";
import MenuButton from "./MenuButton";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="flex justify-center items-center size-13 z-51 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuButton isOpen={isOpen} />
      </button>
      <NavMenu isOpen={isOpen} />
    </>
  );
};

export default Menu;
