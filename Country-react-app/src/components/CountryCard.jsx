function CountryCard({ country }) {

  return (
    <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">

      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-32 object-cover mb-3"
      />

      <h2 className="text-xl font-bold">
        {country.name.common}
      </h2>

      <p>
        <strong>Capital:</strong> {country.capital?.[0]}
      </p>

      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>

      <p>
        <strong>Region:</strong> {country.region}
      </p>

    </div>
  );
}

export default CountryCard;