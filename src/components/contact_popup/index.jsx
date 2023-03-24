
import {FaPlane } from 'react-icons/fa';
import {useState, useEffect} from "react";
import callus from "../../images/callus.png"
import Image from 'next/image';


const ContactPopupSection = ({open = false, close =()=>{}}) => {
const [show, setShow] = useState(false);

const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open === true) {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        setShow(open)
    }, 700);   
    }
}, [open]);

const handleClose = () => {
    setShow(false)
    close()
}

  return (
    <>
    <div className="popup-section">
        {loading ? (
            <div className="loader-container">
                <div className="loader-title"> Hold on, we’re fetching flights for you </div>
            </div>
        ) : (
            <>
             {
                show ?
                    <section className="" >
                        <div id="open-modal" className="modal-window">
                            <div>
                                <div className="clearfix">
                                    <div title="Close" className="modal-close" onClick = {() => handleClose()}>X</div>
                                </div>
                            
                            <div className="row">
                                    <div className="col-md-6 contact-left-section">
                                        <div className="modal-content ">
                                            <h2 className="contant-h2">CHI <FaPlane/> CDZ</h2>
                                            <div className="contant-discription">
                                                <p>Fare Id : 121256</p>
                                                <p>Call and share your Fare ID to get upto 50% off on Flight Booki</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 align-self-center position-relative">
                                        <div>
                                        <a href="tel:+1 844-899-3738"><Image className="middel-section" src={callus} alt="icon" /></a>
                                        </div>
                                        <div className="p-3 text-center">
                                            <h3>Call Us</h3>
                                            <a href="tel:+1 844-899-3738" className="contact-sucess-text">+1 844-899-3738</a>
                                            <div className="my-3">
                                                <a href="tel:+1 844-899-3738" className="call-btn">  Click To Call</a>
                                            </div>
                                            <p className="contact-voucher"> Voucher : 2ybk44</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                :null
            }
            </>
           
        )}
        </div>
    </>
  );
};

export default ContactPopupSection;