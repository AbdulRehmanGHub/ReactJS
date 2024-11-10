export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
}) {
  return (
    <div className="country_box">
      <a
        href={`/country.html?name=${name}`}
        className="countryCard"
      >
        <img src={flag} alt={name + "flag"} />
        <div className="box-text">
          <h3>{name}</h3>
          <p>
            Population: <span>{population}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </a>
    </div>
  );
}
