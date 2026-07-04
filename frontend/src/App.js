import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ArtisanList from "./pages/ArtisanList";
import ArtisanDetails from "./pages/ArtisanDetails";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisans" element={<ArtisanList />} />
        <Route path="/artisan/:id" element={<ArtisanDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;