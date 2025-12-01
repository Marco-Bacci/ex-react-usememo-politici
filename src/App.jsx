import { useState, useEffect, useMemo } from "react";
function App() {
  const [politicians, setPoliticians] = useState([]);
  const [search, setSearch] = useState("");

  const filteredPoliticians = useMemo(() => {
    return politicians.filter((poli) => {
      return (
        poli.name.toLowerCase().includes(search.toLowerCase()) ||
        poli.biography.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [politicians, search]);

  useEffect(() => {
    fetch("http://localhost:3333/politicians")
      .then((res) => res.json())
      .then((data) => setPoliticians(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(politicians);
  return (
    <div className="container text-center">
      <h1>LISTA DEI POLITICI</h1>
      <input
        type="text"
        placeholder="ricerca per nome"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {filteredPoliticians.map((poli) => (
          <div className="col-4" key={poli.id}>
            <div className="card">
              <h2>{poli.name}</h2>
              <img src={poli.image} alt={poli.name} />
              <p>
                <strong>{poli.position}</strong>
              </p>
              <p>{poli.biography}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
