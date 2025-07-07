// Components
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import LastStories from '../components/last_sotries/LastStories'
import ContactSection from '../components/verse/contact/Contact'
import Verse from '../components/verse/Verse'

import Footer from '../components/footer/Footer'
const HomePage = () => {

    return (
        <>
            <Header />
            <Home />
            <Verse />
            <LastStories />
            <ContactSection />
            <Footer />
        </>
    );
}

export default HomePage