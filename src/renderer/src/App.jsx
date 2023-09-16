import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { AlertProvider } from "./context/alert/AlertContext";
import { MovesProvider } from "./context/moves/MovesContext";
import { AbilityProvider } from "./context/abilities/AbilityContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import PokemonPage from "./pages/PokemonPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MovesPage from "./pages/MovesPage";
import { PokemonProvider } from "./context/pokemon/PokemonContext";
import AbilityPage from "./pages/AbilityPage";
import PokeNav from "./components/pokemon/PokeNav";


function App() {
  return (
    <PokemonProvider>
      <AbilityProvider>
        <MovesProvider>
          <AlertProvider>
            <Router>
              <div className="flex flex-col justify-between h-screen">
                <Navbar title="DEXTER" />

                <main className="container mx-auto px-3 pb-1">
                  <div className="flex justify-center">
                    <Alert className="flex-end " />
                  </div>

                  <Routes>
                    <Route path={"/"} element={<HomePage />} />
                    <Route path={"/about"} element={<AboutPage />} />
                    <Route path={"/pokemon/:id"} element={<PokemonPage />} />
                    <Route path={"/move/:id"} element={<MovesPage />} />
                    <Route path={"/ability/:id"} element={<AbilityPage />} />
                    <Route path={"/notfound"} element={<NotFoundPage />} />
                    <Route path={"/*"} element={<NotFoundPage />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </Router>
          </AlertProvider>
        </MovesProvider>
      </AbilityProvider>
    </PokemonProvider>
  );
}

export default App
