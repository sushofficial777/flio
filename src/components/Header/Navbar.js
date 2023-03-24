import Link from 'next/link';
import { useState } from 'react'
import Modal from '../contact_popup/index';
import Image from 'next/image';
import FtLogo from '../../images/ftlogo.jpg';
import Contact from '../../images/contact.png'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <header className="header-nav">
        <nav className="navbar navbar-expand-lg bg-white p-0">
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              href="/"
            >
           
              <Image
              className="nav-logo"
                src={FtLogo}
                alt="logo"
            
              />
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item align-self-center" onClick={() => { setShowModal(!showModal) }}>
                  <Link
                    className="nav-link"
                    activeClassName="is-active"
                    href="/"
                  >
                    Flight
                  </Link>
                </li>
                <li className="nav-item align-self-center" onClick={() => { setShowModal(!showModal) }}>
                  <Link
                    className="nav-link"
                    activeClassName="is-active"
                    href="/"
                  >
                    Hotel
                  </Link>
                </li>
                <li className="nav-item align-self-center" onClick={() => { setShowModal(showModal) }}>
                  <Link
                    className="nav-link"
                    activeClassName="is-active"
                    href="/blogs"
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item align-self-center" onClick={() => { setShowModal(!showModal) }}>
                  <Link
                    className="nav-link"
                    activeClassName="is-active"
                    href="/"
                  >
                    Contact us
                  </Link>
                </li>
                <li className="nav-item align-self-center" onClick={() => { setShowModal(!showModal) }}>
                  <Link
                    className="nav-link"
                    activeClassName="is-active"
                    href="/"
                  >
                    My Account
                  </Link>
                </li>
                <li className="nav-item">

                  <a href="tel:+1 844-899-3738" className="nav-link d-flex cursor-pointer">
                    <Image className="nav-contactus"
                      src={Contact}
                      alt="image" />
                    {/* <img className="nav-contactus" src='../../images/contact.png' alt="image" /> */}
                    <div>
                      <div className="header-contact">+1 844-899-3738</div>
                      <div className="text-small">Speek to our travel Specialist</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Modal open={showModal} close={() => setShowModal(false)} />
    </div>
  );
};

export default Navbar;
