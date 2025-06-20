import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SplashScreen from './components/common/SplashScreen';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

import HomePage from './pages/HomePage';
import HireMePage from './pages/HirePage';
import AuthPage from './pages/AuthPage';
import ProjectDetailPage from './pages/ProjectDeatilsPage';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    const [showSplash, setShowSplash] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 120,
        });
    }, []);

    if (showSplash) {
        return <SplashScreen />;
    }

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/hireme" element={<HireMePage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/project/:id" element={<ProjectDetailPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
