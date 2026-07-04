import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ArtisanList from "./pages/ArtisanList";
import ArtisanDetails from "./pages/ArtisanDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisans" element={<ArtisanList />} />
        <Route path="/artisan/:id" element={<ArtisanDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;