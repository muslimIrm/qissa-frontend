import React, { lazy, Suspense } from 'react';

// Components
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import Verse from '../components/verse/Verse'

import Footer from '../components/footer/Footer'

const LastStories = lazy(()=> import('../components/last_sotries/LastStories'))
const ContactSection = lazy(()=> import('../components/contact/Contact'))
const HomePage = () => {

    return (
        <>
            <Header />
            <Home />
            <Verse />
            <Suspense fallback={"loading lastStoriesSection"}><LastStories /></Suspense>
            <Suspense fallback={"loading ContactSection"}><ContactSection /></Suspense>
            <Footer />
        </>
    );
}

export default HomePage