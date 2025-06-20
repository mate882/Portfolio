import React from 'react';
import SplashScreen from './components/common/SplashScreen';
import Header from './components/common/Header';
import Footer from './components/common/Footer';


function App() {
    const [showSplash, setShowSplash] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (showSplash) {
        return <SplashScreen />;
    }

    return(
        <>
            <Header />
            <Footer />
        </>
    );

}

export default App
