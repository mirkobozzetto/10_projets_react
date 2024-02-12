import loader from "./assets/loader.svg";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="loader-container">
        <img src={loader} alt="loader" />
      </div>
      <p className="city-name">Bxl</p>
      <p className="country-name">Belgique</p>
      <p className="temperature">30°</p>
      <div className="info-icon-container">
        <img src="../public/icons/01d.svg" alt="weather icon" />
      </div>
    </main>
  );
};

export default App;
