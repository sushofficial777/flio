
import {useState} from "react";
import Modal from '../../src/components/contact_popup';

const SubscribeSection = () => {
    const [showModal, setShowModal] = useState(false)
  return (
        <section className="subscribe-section">
            <div className="subscribe-card-wrap">
                <div className="container text-center">
                    <div className="subscribe-header">
                        <h2>Join Our List For The Best Travel Offer</h2>
                    </div>
                    <form className="form-subscribe"
                     onClick={() => setShowModal(!showModal)}
                     >
                        <div className="input-group">
                        <input type="text" className="form-control input-lg" placeholder="Your email address"/>
                        <span className="input-group-btn">
                            <button className="btn btn-success btn-lg" type="button" >Subscribe</button>
                        </span>
                        </div>
                    </form>
                </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} /> 
        </section>
  );
};
export default SubscribeSection;