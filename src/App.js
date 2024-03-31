import "./App.css";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <div className="Main">
        <div className="App">
          <Signup />
        </div>
        <div className="Image">
          <img
            src="https://c1.wallpaperflare.com/preview/67/385/187/greem-leaf-plant-minimal.jpg"
            alt="Leaf"
          />
        </div>
      </div>
    </>
  );
}

export default App;
