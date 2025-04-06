import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import MediaPage from "./pages/MediaPage";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
        <Toaster position="top-right" />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
