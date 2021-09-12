import React from 'react';
import logo from '../components/home/assets/logo.png'
import Navbar from '../components/home/navbar';
import LandingSection from '../components/home/landingsection'
import EvenSection from '../components/home/evensection';
import AltSection from '../components/home/altsection';
import './home.css';
import MetaTags from 'react-meta-tags';
import landingPicture from '../components/home/assets/landingsection.gif'
import evenSectionImg from '../components/home/assets/evensection.png'
import altSectionImg from '../components/home/assets/altsection.png'
import Footer from '../components/home/footer';

const Home = (props) => {
    const navItems = [
        "REGISTER",
        "ABOUT PRODUCT",
        "GITHUB",
        "CONTACT"
    ]

    const titles = [
        "dante's interview",
        "plan and prepare",
        "dashboard + flashcards + planners",
        "let's democratise"
    ]

    const subtitles = [
        "Dante's Interview is an homage on a literary classic, Dante's Inferno. While it describes Italian writer Dante Alighieri's journey through hell, Dante's Interview helps you, an aspiring tech student, navigate through tech interview hell.",
        "Dante's Interview is your personalised notebook to help you for your next interview. Have you ever forgotten about an obscure LeetCode challenge from a year ago? Ever applied to so many jobs that you forget all about them?\
        Dante's Interview helps you keep track of job statuses and tech concepts that you can reinforce through flashcards.",
        "A fun, intuitive take on flashcards, a calendar and card system to keep track of upcoming events and job statuses, and an all-in-one dashboard to go along",
        "Dante's Interview will eventually be open source! Currently under development for National University of Singapore's CS3219 module \
        as a personal project. Feel free to check out the GitHub repo or contact me!"
    ]
    
    const buttonTitles = [
        "REGISTER/SIGN IN",
        "CONTRIBUTE"
    ]
    return (
        <div>
            <MetaTags>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </MetaTags>
            <Navbar logo={logo} navItems={navItems} />
            <LandingSection title={titles[0]} subtitle={subtitles[0]} firstButtonText={buttonTitles[0]} secondButtonText={buttonTitles[1]} img={landingPicture} />
            <EvenSection title={titles[1]} subtitle={subtitles[1]}  img={evenSectionImg} />
            <AltSection title={titles[2]} subtitle={subtitles[2]}  img={altSectionImg} />
            <Footer title={titles[3]} subtitle={subtitles[3]} />
        </div>
    )
}

export default Home;