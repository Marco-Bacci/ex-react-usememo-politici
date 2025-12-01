import { useState, useEffect } from "react";
function App() {
  const [politicians, setPoliticians] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/politicians")
      .then((res) => res.json())
      .then((data) => setPoliticians(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(politicians);
  return (
    <div className="container">
      <div className="row">
        {politicians.map((poli) => (
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
