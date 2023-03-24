

import Modal from '../../src/components/contact_popup';
import Image1 from '../../public/images/result.jpg';
import {useState, useEffect} from "react";
import Image from 'next/image'



const SearchFlight = () => {

 
    const [showModal, setShowModal] = useState(true)
  return (
        <>
            <section className="search-flight-section">
                <Image className="img-fluid" src={Image1} alt="search"/>
            </section>
            <Modal open={showModal} close={() => setShowModal(false)}/>
        </>
  );
};

export default SearchFlight;
