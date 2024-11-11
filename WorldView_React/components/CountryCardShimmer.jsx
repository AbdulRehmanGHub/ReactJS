import "./CountryCardShimmer.css";

export default function CountryCardShimmer() {
  //   new Array(10).fill("");

  return (
    <div className="data-sh">
      <div className="country_box-sh">
        {Array.from({ length: 12 }).map((card, i) => {
          return <div key={i} className="countryCard-sh"></div>;
        })}
      </div>
    </div>
  );
}
