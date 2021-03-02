import "./App.css";
import Reviews from "./Review";

function App() {
  return (
    <div className="main-conatiner">
      <h2>Our Reviews</h2>
      <div className="line"></div>
      <div className="review-container">
        <Reviews />
      </div>
    </div>
  );
}

export default App;
