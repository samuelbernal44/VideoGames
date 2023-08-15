import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import { LandingPage, HomePage, Detail, Form, SearchResults } from './views';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      document.body.classList.add('landing-page');
    } else {
      document.body.classList.remove('landing-page');
    }
  }, [pathname]);

  return (
    <>
      {pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage class="landing-page" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/name" element={<SearchResults />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
