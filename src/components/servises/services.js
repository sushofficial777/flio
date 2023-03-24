import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import Image from 'next/image'
const ServicesSection = () => {

    useEffect(() => {
        Aos.init({ duration: 600 });
     
      }, []);
    const serviceData = [
        {
            "icon":'/images/access-granted.png',
            "title" : "Best Price Guarantee",
            "discription" : "Our process management assures you of predictable measures to plan a solid outcome for your planned trip with Fliotravels.",
        },
        {
            "icon":'/images/money-bag.png',
            "title" : "Accessibility",
            "discription" : "We ensure proactive updates regarding the process and everything to serve better results and to give you access to better travel opportunities.",
        },
        {
            "icon":'/images/secure-data.png',
            "title" : "24X7 Customer Service",
            "discription" : "We offer our clients a dedicated team for managing the entire process smoothly.",
        },
        {
            "icon": '/images/technical-support.png',
            "title" : "100% Data Security",
            "discription" : "Fliotravels helps in offering better travel with all your information to be secured in the first place as well as with the appropriate data security.",
        },
    ]
       
  return (
        <section className="service-section">
            <div className="card-wrap-section">
                <div className="container"  data-aos="fade-down">
                    <div className="row">
                        {serviceData.map((data) => (
                            <div className="col-lg-3 col-md-4 my-2" key=" ">
                                <div className="card service-card-shadow">
                                    <div className="card-body text-center">
                                        <div className="card-img-wrap">
                                            <Image className="img-fluid" src={data.icon} width={100} height={100} alt=""/>
                                        </div>
                                        <div className="">
                                            <h4>{data.title}</h4>
                                            <p>{data.discription}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
  );
};
export default ServicesSection;