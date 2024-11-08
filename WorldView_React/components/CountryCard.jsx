const CountryCard = () => {
  return (
    <div className="country_box">
      <a href="#" className="countryCard">
        <img src="./img/pk flag.png" alt="img" />
        <div className="box-text">
          <h3>United States of America</h3>
          <p>
            Population: <span> 25,00,00,000</span>
          </p>
          <p>
            Region: <span> Asia</span>
          </p>
          <p>
            Capital: <span> Islamabad</span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default CountryCard;
