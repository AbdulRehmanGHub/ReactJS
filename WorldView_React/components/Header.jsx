const Header = ({ theme }) => {
  const [isDark, setIsDark] = theme;

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDarkMode", JSON.stringify(!isDark));

    // Toggle `dark` class on body
    document.body.classList.toggle("dark", !isDark);
  };

  return (
    <header>
      <h1 className="logo">
        <a>World View - React</a>
      </h1>
      <p className="dark-mode" onClick={toggleTheme}>
        <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
        <span className="themeText">{isDark ? "Light" : "Dark"} Mode</span>
      </p>
    </header>
  );
};

export default Header;
