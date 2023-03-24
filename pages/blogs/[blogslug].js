import { useEffect, useState, useCallback } from "react";
import Router from "next/router";
import Link from "next/link";
import parse from "html-react-parser";
import Axios from "axios";
import Swal from "sweetalert2";
import Loader from "../../src/Components/Loader";
import Aos from "aos";
import "aos/dist/aos.css";
import { CSpinner, CButton } from "@coreui/react";
import LittleSpinner from "../../src/components/LittelSpinner";
import { BiRightArrowAlt } from "react-icons/bi";
import { MdOutlineCancelPresentation } from "react-icons/md";
import Image from "next/image";
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { useRouter } from "next/router";
import API_URL, { BASE_URL_BUCKET_IMG } from "../../src/utils/ApiUrls";

function BlogPage({ blog }) {
  const router = useRouter();
  // console.log(blog);
  const [user, setUser] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [count, setCount] = useState("");
  const [blogName, setBlogName] = useState(blog?.name || "Blog Name");
  const [blogImg, setBlogImg] = useState(blog?.featured_image);
  const [localBlogImg, setLocalBlogImg] = useState(blog?.slug);
 
  const [blogContent, setBlogContent] = useState(
    parse(blog?.content) || "loading.."
  );
  const [backColor, setBackColor] = useState(
    blog?.backgroundColor || "#C3FFE7"
  );
  const [blogId, setBlogId] = useState(blog?.id || "");
  const [blogTitle,setBlogTitle] = useState(blog?.meta_title ||"")
  const [blogDescription,setBlogDescription] =useState(blog?.meta_description ||"")
  const [blogKeyword,setBlogKeyword]=useState("")

  const [showTable, setShowTable] = useState(false);
  const [showTableContent, setShowTableContent] = useState(false);
  const [count1, setCount1] = useState(0);
  const [headings, setHeadings] = useState([]);
  const [showSocials, setShowSocials] = useState(true);
  const [commentCount, setCommentCount] = useState(0);
  const [scroll, setScroll] = useState(false);


  let name;
  let value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const color = "#f8e026";
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (winScroll > 488) {
      setShowTable(true);
    }
    if (winScroll < 488) {
      setShowTable(false);
      setShowTableContent(false);
    }
    if (scrolled > 70) {
      setShowTable(false);
      setShowTableContent(false);
      setShowSocials(false);
    }
    if (scrolled < 70) {
      setShowSocials(true);
    }
  };

  //**********GET COMMENTS **********/
  const fetchSingleComment = useCallback(async (slugParam) => {
    const allComments = await Axios.post(
      "https://virtuelegalservices.com/api/showcomment",
      {
        slug: slugParam,
      }
    ).then((res) => {
      // console.log(res);
      return res;
    });
    const Comments = allComments;
    console.log(Comments);

    if (Comments === null) {
    } else {
      const commentDataAll = Comments.data.data;
      setCommentCount(commentDataAll);
    }
  }, []);

  //**********GET COMMENTS **********/
  const fetchSingleBlog = async () => {
    const allData = await Axios.post(
      "https://virtuelegalservices.com/api/single",
      {
        slug: slugParam,
      }
    ).then((res) => {
      console.log(res);
      return res;
    });
    const data = allData.data.data;
    if (data === null) {
    } else {
      const blogImage = `https://virtuelegalservices.com/vls/public/storage/img/blog/${data.featured_image}`;
      const content = parse(`${data.content}`);
      const name = data.name;
      const id = data.id;
      const backgroundColor = data.colorcode;
      const description =data.meta_description;
      const title =data.meta_title;
      const keywords = data.meta_keywords

      setBackColor(backgroundColor);
      setBlogId(id);
      setBlogContent(content);
      setBlogImg(blogImage);
      setBlogName(name);
      setBlogName(name);
      setBlogTitle(title);
      setBlogDescription(description);
      setBlogKeyword(keywords)

      
    }
  };

  useEffect(() => {
    if (scroll === false) {
      window.scrollTo(0, 0);
    }
    setScroll(true);
    // fetchSingleBlog();
    fetchSingleComment(blog?.slug);
    Aos.init({ duration: 1000 });
    window.addEventListener("scroll", onScroll);
    const ddd = () => {
      const elements = Array.from(document.querySelectorAll("h2")).map(
        (elem) => ({
          text: elem.innerText,
        })
      );
      setHeadings(elements);
    };
    setTimeout(ddd, 6000);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCount(1);
    await Axios.post("https://virtuelegalservices.com/api/commentadd", {
      blog_id: blogId,
      name: user.name,
      email: user.email,
      comment: user.comment,
      slug: params.blogSlug,
    }).then((res) => {
      // console.log(res.data);
      // setChecksubmitted(true);
      Swal.fire({
        position: "centre",
        icon: "success",
        title: "Thanks for Your Comment",
        showConfirmButton: false,
        timer: 2000,
      });
      setCount("");
      // Router.push('/blog-detail')
      user.name = "";
      user.comment = "";
      user.email = "";
    });
    fetchSingleComment();
  };

  //geting the full url for sharing
  const shareUrl = "";

  //geting the full url for sharing

  return (
    <>
      {/* <Meta data = {metaData}/> */}
      <title>{blogName}</title>
        <meta
          name="title"
          content={blogTitle}
          key="title"
        />
        <meta
          name="description"
          content={blogDescription}
          key="desc"
        />
        <meta property="og:title" content={blogTitle} />
        <meta
          property="og:description"
          content={blogDescription} />
        
      <div className="blog-page"></div>
      <section
        className=" blog-content-head"
        style={{ backgroundColor: `${backColor}` }}
      >
        <div className="blog-heading blog-content-heading " data-aos="fade-up">
          <h1 className="blog-content-head-title" data-aos="fade-up">
            {blogName}
          </h1>
          {/* <div className="author-timing">
                        <div className="author">
                            <p>Author:</p> <p>Alex</p>
                        </div>
                        <div className="time_of_upload">
                            <MdOutlineWatchLater className='up_time_b' /> <p className='up_time_p'>01/07/2022</p>
                        </div>
                    </div> */}
        </div>
      </section>
      <section className="blog-content">
        <div className="blog-content-image" data-aos="fade-up">
          {blogImg ? (
            <Image
              src={'/blogImage/'+ localBlogImg +'.png'}
              alt="card__image"
              className="card__image"
              width="600"
              height="600"
              data-aos="fade-up"
            />
          ) : (
            <>
              <div className="impty_img">
                <LittleSpinner />
              </div>
            </>
          )}
        </div>
      </section>

      {blogId ? (
        <>
          <section className="blog-content-body">
            {showSocials ? (
              <div className="socials-share">
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>

                <TwitterShareButton url={shareUrl}>
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
              </div>
            ) : (
              <></>
            )}
            {showTable ? (
              <div
                className="content-widget"
                data-aos="fade-right"
                onClick={() => {
                  setShowTableContent(true);
                  setCount1(1);
                  setShowTable(false);
                }}
              >
                <h5>TABLE OF CONTENT</h5>
              </div>
            ) : (
              <></>
            )}
            {showTableContent ? (
              <div className="content-widget-data" data-aos="fade-right">
                <div className="table-of-content-wrapper">
                  <div className="table-of-content-header">
                    <h5>TABLE OF CONTENT</h5>
                    <MdOutlineCancelPresentation
                      className="close-table"
                      onClick={() => {
                        setShowTableContent(false);
                        setShowTable(true);
                        //   handleAdd('false');
                      }}
                    />
                  </div>
                  <div className="table-of-content-list-wrapper">
                    <ul>
                      {headings
                        .filter((heading) => {
                          return heading.text.length > 1;
                        })
                        .map((heading) => {
                          if (heading.text === "") {
                          }
                          return (
                            <li key={heading.text}>
                              {" "}
                              <BiRightArrowAlt className="arrows" />{" "}
                              <Link href="#">
                                <p>{heading.text}</p>
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            {/* <div className="table-of-content">
                            <h2 className='table-of-content-heading'>Table of content</h2>
                            <ul>
                                <a href="#toto"> <li>content 1</li></a>
                                <li>content Lorem ipsum dolor sit amet consectetur.</li>
                                <li>content 1</li>
                                <li>content 1</li>
                                <li>content 1</li>
                            </ul>
                        </div> */}
            <div className="content" data-aos="fade-up">
              {blogContent}
            </div>
          </section>

          <section id="comment-box" data-aos="fade-up">
            <div className="comment-box">
              <div className="post-share">
                <div className="comments-count">
                  <p>
                    {" "}
                    <span>{commentCount.length}</span> comments
                  </p>
                </div>
                <div className="share-post">
                  <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={30} round={true} />
                  </FacebookShareButton>
                  <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon size={30} round={true} />
                  </LinkedinShareButton>

                  <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={30} round={true} />
                  </TwitterShareButton>
                </div>
              </div>
            </div>

            <div className="comment-box-wrapper">
              <h5>Leave a Comment</h5>
              <form action="" onSubmit={handleSubmit}>
                <div className="comment">
                  <textarea
                    id="comment"
                    cols="10"
                    placeholder="Type here"
                    rows="2"
                    required
                    name="comment"
                    value={user.comment}
                    onChange={handleInput}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      required
                      name="name"
                      value={user.name}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      required
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                {count ? (
                  <CButton disabled>
                    <CSpinner component="span" size="sm" aria-hidden="true" />
                    Sending...
                  </CButton>
                ) : (
                  <button>Submit </button>
                )}
              </form>
            </div>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export async function getServerSideProps({ res, query }) {
  const { blogslug } = query;
  const blog = await fetchBlogData(blogslug);
  console.log(blog);
  if (!blog) {
    return {
      notFound: true,
    };
  }
  return {
    props: { blog }, // will be passed to the page component as props
  };
}

const fetchBlogData = async (blogslug) => {
  let blogData;
  try {
    blogData = await Axios.post(API_URL.BLOGS.GET_SINGLE_BLOG, {
      slug: blogslug,
    });
    blogData = blogData?.data?.data;
    const blogImage = `${BASE_URL_BUCKET_IMG}blog/${blogData.featured_image}`;
    blogData.featured_image = blogImage;
    // blogData.content = parse(`${blogData.content}`);
    blogData.backgroundColor = blogData.colorcode;
    blogData.backgroundColor = blogData.colorcode;
    blogData.title =blogData.meta_title;
    blogData.description =blogData.meta_description;
    blogData.keywords =blogData.meta_keywords
  } catch (error) {
    console.log(error.message);
  }
  return blogData;
};

export default BlogPage;
