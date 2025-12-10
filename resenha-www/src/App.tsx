import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PlansPage from './pages/PlansPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/planos" element={<PlansPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
