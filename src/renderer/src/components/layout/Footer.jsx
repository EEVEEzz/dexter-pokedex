import React, { useEffect } from "react";
import $ from "jquery";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const location = useLocation();

  const pathMathRoute = (route) => {
    console.log(route)
    try {
      if (route && location.pathname.includes("/pokemon/")) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const value = JSON.parse(localStorage.getItem("theme"));

  function dracula() {
    $("html").attr("data-theme", "dracula");
    setTheme("dracula");
  }

  function dark() {
    $("html").attr("data-theme", "dark");
    setTheme("dark");
  }

  function light() {
    $("html").attr("data-theme", "light");
    setTheme("light");
  }

  function retro() {
    $("html").attr("data-theme", "retro");
    setTheme("retro");
  }

  function cupcake() {
    $("html").attr("data-theme", "cupcake");
    setTheme("cupcake");
  }

  function lofi() {
    $("html").attr("data-theme", "lofi");
    setTheme("lofi");
  }

  function cyberpunk() {
    $("html").attr("data-theme", "cyberpunk");
    setTheme("cyberpunk");
  }

  function pastel() {
    $("html").attr("data-theme", "pastel");
    setTheme("pastel");
  }

  function aqua() {
    $("html").attr("data-theme", "aqua");
    setTheme("aqua");
  }

  useEffect(() => {
    function getCurrentTheme() {
      if (!value) {
        setTheme("dark");
      } else {
        setTheme(value);
        $("html").attr("data-theme", value);
      }
    }

    getCurrentTheme();
  }, [value]);

  return (
    <>
      {!pathMathRoute("/pokemon/") && (
        <>
          <footer className="footer p-10 bg-neutral text-neutral-content footer-center">
            <div>Copyright &copy; {year}</div>

            <div>
              <p>Switch Themes</p>
              <div className="grid grid-cols-3 xl:grid-cols-9 lg:grid-cols-5 md:grid-cols-5 gap-5">
                <div
                  onClick={() => dracula()}
                  className="dracula-switch btn btn-sm btn-outline bg-neutral text-neutral-content"
                >
                  Dracula
                </div>
                <div
                  onClick={() => dark()}
                  className="dark-switch btn btn-sm btn-outline bg-neutral text-neutral-content"
                >
                  Dark
                </div>
                <div
                  onClick={() => light()}
                  className="light-switch btn btn-sm btn-outline bg-neutral text-neutral-content"
                >
                  Light
                </div>
                <div
                  onClick={() => retro()}
                  className="retro-switch btn btn-sm btn-outline bg-neutral text-neutral-content"
                >
                  Retro
                </div>
                <div
                  onClick={() => cupcake()}
                  className="cupcake-switch btn btn-sm btn-outline bg-neutral text-neutral-content"
                >
                  Cupcake
                </div>
                <div
                  onClick={() => lofi()}
                  className="lofi-switch btn btn-sm btn-outline bg-neutral text-neutral-content"
                >
                  Lofi
                </div>
                <div
                  onClick={() => cyberpunk()}
                  className="cyberpunk-switch btn btn-sm btn-outline bg-neutral text-neutral-content"
                >
                  Cyberpunk
                </div>
                <div
                  onClick={() => pastel()}
                  className="pastel-switch btn btn-sm btn-outline bg-neutral text-neutral-content"
                >
                  Pastel
                </div>
                <div
                  onClick={() => aqua()}
                  className="aqua-switch btn btn-sm btn-outline bg-neutral text-neutral-content"
                >
                  Aqua
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Footer;
