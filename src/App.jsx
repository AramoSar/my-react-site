import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './layouts/MainLayout';
import { Home, Services, About, Contact, Emergency } from './pages';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/emergency" element={<Emergency />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
