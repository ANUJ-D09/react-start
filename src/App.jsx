import { useState } from "react";
import { PostComponent } from "./assets/post";
import {Counter} from "./assets/notification";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.title}
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "anuj",
        subtitle: "10000 followers",
        time: "2m ago",
        image: "Snip20250707_36.png",
        description:
          "What to know how to win big? Check out how these folks won $6000 in bounties.",
      },
    ]);
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>{postComponents}</div>
      </div>
      <Counter/>
    </div>
  );
}asd

export default App;
