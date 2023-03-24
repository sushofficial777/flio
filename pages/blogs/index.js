import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "../../src/components/Loader";
import Axios from "axios";
import Swal from "sweetalert2";
import { CSpinner, CButton } from "@coreui/react";
import Head from "next/head";
import Image from "next/image";

const Blog = () => {
  const [blog, setBlog] = useState("");
  const [email, setEmail] = useState("");
  const [count, setCount] = useState("");
  // console.log(email);
  const handleSubmit = async () => {
    // e.preventDefault();
    // setCount(1);
    if (!email) {
      Swal.fire({
        position: "centre",
        title: "please write your email",
        showConfirmButton: true,
        timer: 2000,
      });
    } else {
      // console.log(email);
      setCount(1);
      await Axios.post("https://virtuelegalservices.com/api/emailsubscribe", {
        email: email,
      }).then((res) => {
        console.log(res);
        // setChecksubmitted(true);
        Swal.fire({
          position: "centre",
          icon: "success",
          title: "Thanks for Subscribe",
          showConfirmButton: false,
          timer: 2000,
        });

        setEmail("");
        setCount("");
      });
    }
  };
  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const fetchData = async () => {
    await fetch("https://virtuelegalservices.com/api/flioblogs")
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        setBlog(data);
      });
  };

  //set data in redux
  const handleAdd = (data) => {};
  useEffect(() => {
    Aos.init({ duration: 600 });
    fetchData();
  }, []);

  const imageFolder = blog.folderpath;
  const data = blog.data;

  return (
    <div>
      <Head>
      <link rel="icon" href="./ftlogo1.jpg" />
        <title>Explore the World: Best Travel Blogs and Stories for you!</title>
        <meta
          name="title"
          content="Explore the World: Best Travel Blogs and Stories for you!"
          key="title"
        />
        <meta
          name="description"
          content="Looking for travel blogs? Our travel blog offers a variety of articles, guides, and tips to help you plan your next adventure. Follow us and explore the world!"
          key="desc"
        />
        <meta property="og:title" content="Explore the World: Best Travel Blogs and Stories for you!" />
        <meta
          property="og:description"
          content="Looking for travel blogs? Our travel blog offers a variety of articles, guides, and tips to help you plan your next adventure. Follow us and explore the world!" />
        
      </Head>
      <section className="blog-container">
        <div className="blog-heading">
          <h1>Our Travels Blogs</h1>
          <p className="blog_head_para">
          At Fliotravels, you will get superb services and user experience at reasonable prices..
          </p>
          <div className="blog-subscribe">
            <input
              type="Email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={handleInput}
            />

            {count ? (
              <CButton disabled>
                <CSpinner component="span" size="sm" aria-hidden="true" />
                Sending...
              </CButton>
            ) : (
              <button onClick={handleSubmit}>Subscribe</button>
            )}
          </div>
        </div>
        {/* <img src={blog1} alt="fgf" className='blog1Image' /> */}
      </section>
      {blog ? (
        <>
          <section className="blog-body-container">
            <div
              className="blog-left-container"
              onClick={() => handleAdd(data[0])}
            >
              <Link href={`/blogs/${data[0].slug}`}>
                {
                  <div class="blog_card " data-aos="zoom-in-up">
                    <div class="card__header cardmainimagehead">
                      <Image
                        src={/blogImage/ + `${data[0].slug}` + ".png"}
                        alt="card__image"
                        class="card__image cardmainimage"
                        width="600"
                        height="600"
                      />
                    </div>
                    <div class="card__body">
                      <h4>{data[0].name}</h4>
                    </div>
                  </div>
                }
              </Link>
            </div>
            <div className="blog-right-popular">
              <h2>Most Popular</h2>
              <div className="popular-post-wrapper">
                <div className="popular-posts">
                  {data ? (
                    data.map((data, index) => {
                      const blogImage = `${imageFolder}/${data.featured_image}`;

                      return (
                        // eslint-disable-next-line react/jsx-key
                        <Link
                          key={index}
                          href={`/blogs/${data.slug}`}
                          onClick={() => handleAdd(data)}
                        >
                          <div className="popular" data-aos="fade-up">
                            <div className="popular-image">
                              <Image
                                src={/blogImage/ + `${data.slug}` + ".png"}
                                alt="card__image"
                                class="card__image"
                                width="600"
                                height="600"
                              />
                            </div>
                            <div className="poular-wrapp">
                              <p className="title-label">{data.name}</p>
                              <div className="post-time-label">
                                <MdOutlineWatchLater />{" "}
                                <p className="time-label">1 hour ago</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })
                  ) : (
                    <Loader />
                  )}

                  {/* <div className="popular">
                                <div className="popular-image">
                                    <img src="https://img.freepik.com/free-photo/php-coding-computer-css-data-digital-function-concept_53876-125415.jpg?w=996&t=st=1672235759~exp=1672236359~hmac=c1438fe286c600dbc3b237a0ac0385c803fc5bd26385ef482f66dc754b18ab1f" alt="card__image" class="card__image" width="600" />

                                </div>
                                <div className="poular-wrapp">
                                    <div className="post-time-label"><MdOutlineWatchLater/> <p className='time-label'>1 hour ago</p></div>
                                    <p className='title-label'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</p>
                                    
                                </div>
                            </div> */}
                </div>
              </div>
            </div>
          </section>
          <div className="blog-body-wrapper">
            <div className="post-card">
              {data ? (
                data.map((data) => {
                  const blogImage = `${imageFolder}/${data.featured_image}`;

                  // data.push(blogImage);
                  return (
                    <Link key=""
                      href={`/blogs/${data.slug}`}
                      onClick={() => handleAdd(data)}
                    >
                      <div class="blog_card" data-aos="zoom-in-up">
                        <div class="card__header">
                          <Image
                            src={/blogImage/ + `${data.slug}` + ".png"}
                            alt="card__image"
                            class="card__image"
                            width="600"
                            height="600"
                          />
                        </div>
                        <div class="card__body">
                          <h4>{data.name}</h4>
                        </div>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <>
                  <Loader />
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Blog;
