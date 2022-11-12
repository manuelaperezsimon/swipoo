import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderStyled>
        <h1 className="header__title">Swipoo</h1>
        <img
          src="img/swipoo-logo.svg"
          alt="Swipoo logo"
          className="header__logo"
        ></img>
      </HeaderStyled>
    </>
  );
};

export default Header;
