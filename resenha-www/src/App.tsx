import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PlansPage from './pages/PlansPage';
import LogoPage from './pages/LogoPage';

import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/planos" element={<PlansPage />} />
        <Route path="/logo" element={<LogoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
