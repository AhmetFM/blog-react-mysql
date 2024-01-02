import axios from "axios";
import { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/?cat=${cat}`);
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
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
