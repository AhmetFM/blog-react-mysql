import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem Ipsum falan filan",
  //     desc: "Lorem Ipsum falan filan",
  //     img: "https://images.pexels.com/photos/19486301/pexels-photo-19486301/free-photo-of-kadin-model-ayakta-genc.jpeg",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem Ipsum falan filan",
  //     desc: "Lorem Ipsum falan filan",
  //     img: "https://images.pexels.com/photos/19486301/pexels-photo-19486301/free-photo-of-kadin-model-ayakta-genc.jpeg",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem Ipsum falan filan",
  //     desc: "Lorem Ipsum falan filan",
  //     img: "https://images.pexels.com/photos/19486301/pexels-photo-19486301/free-photo-of-kadin-model-ayakta-genc.jpeg",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem Ipsum falan filan",
  //     desc: "Lorem Ipsum falan filan",
  //     img: "https://images.pexels.com/photos/19486301/pexels-photo-19486301/free-photo-of-kadin-model-ayakta-genc.jpeg",
  //   },
  // ];

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`./upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>

              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
