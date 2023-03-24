
import Aos from "aos";
import "aos/dist/aos.css"
import Image from "next/image";
import {useEffect} from 'react';
import chooseus from '../../images/chooseus.png'


const ChooseUsSection = () => {
    useEffect(() => {
        Aos.init({ duration: 600 });
     
      }, []);
       
  return (
        <section className="chooseus-section">
            <div className="container">
                <div className="row" data-aos="fade-right" >
                    <div className="col-xl-4 col-lg-6 col-md-12 chooseus-img">
                        <Image className="img-fluid" src={chooseus} alt="image" />
                    </div>
                    <div className="col-xl-8 col-lg-6 col-md-12" data-aos="fade-left" >
                        <h2 className="chooseus-title"> Why Choose Us? </h2>
                        <ol>
                            <li><p>Instead of wasting hours hunting for inexpensive, fanciful bargains, quickly discover the greatest travel possibilities with Fliotravels.</p></li>
                            <li><p>Even before you start your travel, you can unwind because with Fliotravels there are no unwelcome surprises, deceptive charges, or hidden costs.</p></li>
                            <li><p>Discover our advice on when to fly, where to go, and how to save more on your upcoming plans</p></li>
                            <li><p>Fliotravels help in creating better travel with various amenities including cost, food, and other crucial aspects.</p></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
  );
};
export default ChooseUsSection;