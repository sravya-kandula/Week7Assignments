import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  // Fetch all countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = await res.json();
        setCountries(data);
        setFilteredCountries(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Search filter
  useEffect(() => {
    const result = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCountries(result);
  }, [query, countries]);

  if (loading) return <h2 className="text-center">Loading countries...</h2>;
  if (error) return <h2 className="text-center text-red-500">{error}</h2>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <h1 className="text-4xl text-center font-bold mb-6">
        🌍 Country Explorer
      </h1>

      <SearchBar onSearch={setQuery} />

      <CountryList countries={filteredCountries} />

    </div>
  );
}

export default App;