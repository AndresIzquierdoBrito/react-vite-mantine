import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { PageLayout } from "./components/PageLayout.tsx";
import Layout from "./components/Layout.tsx";
import Contact from "./pages/Contact.tsx";
import Home from "./pages/Home.tsx";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import User from "./pages/User.tsx";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    it: { translation: it },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<PageLayout content={<Home />} />} />
    <Route
      path="contact/"
      element={<PageLayout content={<Contact />} />}
    ></Route>
    <Route
      path="user/"
      element={<PageLayout content={<User />} />}
    ></Route>
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
