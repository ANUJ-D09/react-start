import { useState } from "react";
import { PostComponent } from "./assets/post";
function App() {
  return (
    <div>
      <ToggleCounter />
      <PostComponent
        name="John Doe"
        subtitle="Software Developer"
        time="2 hours ago"
        image="https://example.com/avatar.jpg"
        description="This is a sample post description showing how the component works."
      />
    </div>
  );
}


const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(0);
function increasec(){
  setIsVisible(isVisible+1);
}
  return (
    <div>
      <button onClick={increasec}>Toggle Message</button>
      {isVisible}
    </div>
  );
};








const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  border: "1px solid grey",
  display: "flex",

  padding: 10, // Added padding for better spacing
  gap: 8, // Added gap between child elements
};




export default App;
