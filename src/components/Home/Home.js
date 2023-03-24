import HeroSection from '../hero_section/hero_section'
import ServicesSection from '../servises/services'
import PopularSection from '../popular_flight/popularsection'
import ExploreSection from '../explore/explore'
// import SubscribeSection from './subscribe/index'
import ChooseUsSection from '../choose_us/choose_us'
import {useState} from 'react'



const Homepage = () => {
    const [showModal, setShowModel] =useState(false)
    return (
        <>
         
         <HeroSection />

            <ServicesSection/>
            <PopularSection/>
            <ChooseUsSection/>
            {/* <SubscribeSection/> */}
            <ExploreSection/>
          
        </>
    );
}

export default Homepage;