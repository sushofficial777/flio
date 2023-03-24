import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import Image from "next/image";





const ExploreSection = () => {

    // const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 600 });
     
      }, []);
    
    

    
    const exploreSection = [
        {
            "icon":'/images/usa.jpg',
            "card_title" : "Load Booking",
            "title" : "ZBV",
            "price":"450"
        },
        {
            "icon":'/images/rusia.jpg',
            "card_title" : "Top International Flights Deals",
            "title" : "HGR",
            "price":"330"
        },
        {
            "icon":'/images/nightview.jpg',
            "card_title" : "Round Trip Flights Deals",
            "title" : "CAK",
            "price":"600"
        },
        {
            "icon":'/images/night2.jpg',
            "card_title" : "Round Trip Flights Deals",
            "title" : "GNV",
            "price":"510"
        },
    ]
       
  return (
      <>
  
        <section className="explore-section">
            <div className="explore-card-wrap">
                <div className="container" data-aos="fade-up">
                    <div className="text-center mb-4">
                        <h2 className="explore-title">Explore Our Destinations</h2>
                    </div>
                    <div className="row">
                        {exploreSection.map((data) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 my-2" key="">
                                <div className="card explore-card-shadow">
                                    <div className="explore-card-wrap-img">
                                        <Image className="img-fluid" src={data.icon} alt="icon" width={306} height={180} />
                                    </div>
                                    <div className="card-body text-center">
                                        <div className="explore-card-data d-flex justify-content-between">
                                            <div className="">
                                                <h4>{data.title}</h4>
                                            </div>
                                            <div className="text-end">
                                                <a href="tel:+1 844-899-3738" className="call-btn"> Call Now</a>
                                            </div>   
                                        </div>
                                        <div className="mt-3 d-flex justify-content-between">
                                            <h6>Starting From</h6>
                                            <h5>${data.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <Modal open={showModal} close={() => setShowModal(false)}/> */}
        </section>
        </>
  );
};
export default ExploreSection;