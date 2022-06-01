import "../App.css"

export default function Country({country, onClick}) {

    return(
        <ul onClick={onClick} className="countriesGrid">
              <li  >{country.name.common}</li>
              <li>
                <img src={country.flags.svg} alt="Flag of the country selected" />
              </li>
            </ul>
    );
}