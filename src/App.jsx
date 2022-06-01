import { useEffect, useState } from "react";
import "./App.css";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const [choosenCountry, setChoosenCountry] = useState([]);
  const [choosenCapital, setChoosenCapital] = useState([]);
  const API_URL = "https://restcountries.com/v3.1";

  useEffect(() => {
    fetch(`${API_URL}/all`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const action = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const revealInfo = (country) => {
    setChoosenCountry(country.name.common);
    setChoosenCapital(country.capital);
    setVisible(true);
  };

  let countriesArray = countries.filter((country) =>
    country.name.common.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="titleApp">Test technique pour 365Talents</h1>
      <input
        className="countryInput"
        type="text"
        value={search}
        onChange={action}
        onFocus={() => setVisible(false)}
        placeholder=" Find a country"
      />
      {visible ? (
        <div className="capitalDiv">
          <p>
            The capital of <span className="dynamicInfo">{choosenCountry}</span>{" "}
            is <span className="dynamicInfo">{choosenCapital}</span>
          </p>
        </div>
      ) : (
        search && (
          <div className="countryList">
            {countriesArray=="" ? <p>No match found</p>:countriesArray.map((country) => (
              <Country
                key={country.cca2}
                country={country}
                onClick={() => revealInfo(country)}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default App;
