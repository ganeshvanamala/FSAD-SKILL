import { useEffect, useState } from "react";
import axios from "axios";

function FakePostList() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {

    axios.get("https://dummyjson.com/posts")
      .then(res => {
        setPosts(res.data.posts);
      });

  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>

      <h2>Fake API Posts</h2>

      <button onClick={fetchPosts}>Refresh</button>

      {posts.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default FakePostList;