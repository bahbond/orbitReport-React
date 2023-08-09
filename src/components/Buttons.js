import satData from "./satData";


const Buttons = (filterByType, setSat, displaySats) => {
  {displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );
  })}
      <div>
      <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
  ;
};

export default Buttons;