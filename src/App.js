import "./App.css";
import CoreCalculator from "./Components/CoreCalculator";
import Footer from "./Components/Footer";
import logo from "./images/logo.svg";

function App() {
  return (
    <main className="App">
      <img src={logo} alt="tip-calculator-logo" />
      <CoreCalculator />
      <Footer />
    </main>
  );
}

export default App;
