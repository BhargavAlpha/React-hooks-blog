import { useEffect, useState } from "react";
import {firestore} from '../firebase'
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";

function Home() {
  const [posts,setPosts]=useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const snapshot = await getDocs(collection(firestore, "posts"));
        const postsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setPosts(postsData); // Update the state with the fetched data
        console.log(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts(); // Call the async function to fetch data when the component mounts
  }, []);
  return <div className="home">
  <h1>Tech Blog</h1>
  <div id="blog-by">Bhargav</div>
  
  {posts.map((post,index)=>(
    <div className="post" key={`post-${index}`}>
      <Link to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
        <p>{post.subTitle}</p>
      </Link>
    </div>
  ))}
  </div>;
}

export default Home;
