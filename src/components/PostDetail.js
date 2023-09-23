import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { firestore } from '../firebase';
import { useParams } from "react-router-dom";

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null); // Initialize post as null

  useEffect(() => {
    const fetchPostById = async (postId) => {
      try {
        const docRef = doc(firestore, "posts", postId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const postData = {
            id: docSnapshot.id,
            ...docSnapshot.data()
          };
          setPost(postData); // Set the post state when data is fetched
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error('Error fetching post by ID:', error);
        // You can handle the error further if needed
      }
    };

    fetchPostById(postId);
  }, [postId]); // Include postId in the dependency array

  if (!post) {
    // Handle the case when post is null (data is not yet fetched)
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.subTitle}</p>
    </div>
  );
}

export default PostDetail;
