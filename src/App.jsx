import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import DefaultLayout from "./Layout/DefaultLayout";

import Contacts from "./pages/Contacts";
import HomePage from "./pages/HomePage";
import OurTypicProducts from "./pages/OurTypicProduct";
import Hero from "./components/hero";
import BurgerFromId from "./pages/BurgerFromId";

import Alert from "./components/Alert";
import { AlertProvider } from "./contexts/AlertContexts";

export default function App() {
  return (
    <>
      <AlertProvider>
        <Alert message="ciao" />
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/OurTypicProduct" element={<OurTypicProducts />} />
              <Route path="/BurgerFromId/:id" element={<BurgerFromId />} />
              <Route path="/Chi Siamo" element={<Contacts />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </>
  );
}
