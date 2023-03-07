import { useState } from "react";

export default function TopMenu(currentItem, setTestValue) {
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const linkClicked = (event) => {
    const link = event.target;
    const id = link.id;
    // setPage(id);
  };

  // console.log(currentItem);

  //   const currentItem = props.currenItem;
  //   const { currentItem } = props;

  return (
    <div className="top-menu">
      {open === false ? (
        <div className="top-menu__burger">
          <div className="" onClick={toggleMenu}>
            <h1>📘</h1>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="" onClick={toggleMenu}>
            📖
          </h1>
          <div className="top-menu__navigation row justify-content-center align-items-center">
            <a
              className={
                "link" +
                (currentItem.currentItem === "" ? " link--highlighted" : "")
              }
              onClick={linkClicked}
              id="about"
              href="#"
            >
              Home
            </a>
            <a
              className={
                "link" +
                (currentItem.currentItem === "about"
                  ? " link--highlighted"
                  : "")
              }
              onClick={linkClicked}
              id="about"
              href="#about"
            >
              About Us
            </a>
            <a
              className={
                "link" +
                (currentItem.currentItem === "contact"
                  ? " link--highlighted"
                  : "")
              }
              onClick={linkClicked}
              id="about"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
