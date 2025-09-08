import "./App.css";

function App() {
  let cities = ["Hyderbad", "Bangalore", "Chennai", "Mumbai", "Delhi"];

  // cities = [];
  return (
    <>
      <h1>List Component Demo</h1>
      {/* <ul className="list-group">
        <li className="list-group-item">First Item</li>
        <li className="list-group-item">Second Item</li>
        <li className="list-group-item">Third Item</li>
        <li className="list-group-item">Fourth Item</li>
        <li className="list-group-item">Fifth Item</li>
      </ul> */}

      {cities.length === 0 ? (
        <p className="list-group-item">No cities found</p>
      ) : (
        <ul className="list-group">
          {cities.map((city, index) => (
            <li
              className="list-group-item"
              key={index}
              onClick={() => console.log(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
