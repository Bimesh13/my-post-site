import { React, useEffect, useState } from "react";
import Post from "./Post";
import Nav from "./components/Nav.js";

function App() {
  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPostArray(data));
  }, []);

  const postData = postArray.filter((post) => post.id <= 10);

  const posts = postData.map((data) => <Post {...data} />);
  return (
    <div className="App">
      <Nav />
      {posts}
      <br />
      <br />
    </div>
  );
}

export default App;
