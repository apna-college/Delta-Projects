import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "#fff", textAlign: "center", marginTop: "40px" }}>
        Razorpay Demo Store
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Product />
      </div>
    </div>
  );
}

export default App;
