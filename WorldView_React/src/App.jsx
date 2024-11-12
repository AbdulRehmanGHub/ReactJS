import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const App = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")) || false
  );

  useEffect(() => {
    // Set initial theme based on localStorage
    if (isDark) {
      document.body.classList.add("dark");
    }
  }, [isDark]);

  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />
    </>
  );
};

export default App;
