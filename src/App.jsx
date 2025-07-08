import { useState } from "react";

function App() {
  return (
    <div
      style={{
        backgroundColor: "grey",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
    
          <div>
            <PostComponent />
          </div>
          <br />
          <div>
            <PostComponent />
          </div>
          <br />
          <div>
            <PostComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  border: "1px solid grey",
  display: "flex",

  padding: 10, // Added padding for better spacing
  gap: 8, // Added gap between child elements
};

function PostComponent() {
  return (
    <div style={style}>
      <div
        style={{
          display: "flex",
         
          gap: 8,
          fontSize: 10,
        }}
      >
        <img
          src="/Snip20250707_36.png"
          alt="Dog" 
          style={{
            width: 40,
            height: 40,
            margin:10,
            padding:10,
            borderRadius: "50%", 
            objectFit: "cover", 
          }}
        />
        <b>I am best dog</b>
      </div>
      <div style={{ fontSize: 12 }}>100k for me</div>
    </div>
  );
}

export default App;
