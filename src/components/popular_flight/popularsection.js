
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import Image from 'next/image';

import {useState} from "react";
// import Modal from '../contact_popup';

const PopularSection = () => {
    useEffect(() => {
        Aos.init({ duration: 600 });
     
      }, []);
//  const [showModal, setShowModal] = useState(false)
    const popularSection = [
        {
            "icon":'/images/building.jpg',
            "card_title" : "Load Booking",
            "destination1" : "LGA - PHX ",
            "destination2" : "MCO - LAX",
            "destination3" : "LAX - ATL",
            "item1" : "14-APR - 18-APR",
            "item2" : "$308.36",
            "item3" : "20-MAR - 23-MAR",
            "item4" : "$346.35",
            "item5" : "16-MAY - 25-MAY",
            "item6" : "$346.35",

        },
        {
            "icon":'/images/night.jpg',
            "card_title" : "International Booking",
            "destination1" : "SEA - MIA",
            "destination2" : "ABR - BFL",
            "destination3" : "BRW - MBS",
            "item1" : "14-JUN - 18-JUN",
            "item2" : "$210.20",
            "item3" : "20-MAR - 23-MAR",
            "item4" : "$1100.25",
            "item5" : "16-JUN - 25-JUN",
            "item6" : "$1200",
        },
        {
            "icon": '/images/singapore.jpg',
            "card_title" : "Top Round Trip Flight Deals",
            "destination1" : "ZBV - HIB",
            "destination2" : "CAK - RDU",
            "destination3" : "GNV - HGR",
            "item1" : "14-JUN - 18-JUN",
            "item2" : "$930.20",
            "item3" : "20-JUL - 23-JUL",
            "item4" : "$460.25",
            "item5" : "16-JUL - 25-JUL",
            "item6" : "$180.35",
        },
    ]
       
  return (
        <section className="popular-section">
            <div className="popular-card-wrap">
                <div className="container" data-aos="fade-up">
                    <div className="text-center mb-4">
                        <h2 className="popular-title">Popular Flight Deals</h2>
                    </div>
                    
                    <div className="row">
                        {popularSection.map((data) => (
                            <div className="col-lg-4 col-md-6 my-2" key="">
                                <div className="card popular-card-shadow">
                                    <div className="popular-card-wrap-img">
                                        <div className="popular-top-wrap">{data.card_title} </div>
                                        <Image className="img-fluid" src={data.icon} alt="icon" width={414} height={276}/>
                                    </div>
                                    <div className="card-body text-center">
                                        <table className="table">
                                            <tbody>
                                                <tr className="popular-card-data">
                                                    <td className="text-start">
                                                        <h4>{data.destination1}</h4>
                                                        <div className="popular-date">{data.item1}</div>
                                                    </td>
                                                    <td>
                                                        <h5 className="mt-2">{data.item2}</h5>
                                                    </td>
                                                    <td>
                                                        <div className="mt-2">
                                                            <a href="tel:+1 844-899-3738" className="call-btn"> Call Now</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="popular-card-data">
                                                    <td className="text-start">
                                                        <h4>{data.destination2}</h4>
                                                        <div className="popular-date">{data.item3}</div>
                                                    </td>
                                                    <td>
                                                        <h5 className="mt-2">{data.item4}</h5>
                                                    </td>
                                                    <td>
                                                        <div className="mt-2">
                                                            <a href="tel:+1 844-899-3738" className="call-btn"> Call Now</a>
                                                        </div>
                                                        
                                                    </td>
                                                </tr>
                                                <tr className="popular-card-data">
                                                    <td className="text-start">
                                                        <h4>{data.destination3}</h4>
                                                        <div className="popular-date">{data.item5}</div>
                                                    </td>
                                                    <td>
                                                        <h5 className="mt-2">{data.item6}</h5>
                                                    </td>
                                                    <td>
                                                        <div className="mt-2">
                                                            <a href="tel:+1 844-899-3738" className="call-btn"> Call Now</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <Modal isVisible={showModal} onClose={() => setShowModal(false)} />  */}
        </section>
  );
};
export default PopularSection;