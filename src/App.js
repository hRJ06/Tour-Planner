import React, { useState } from "react";
import data from './data'
import Tour from './Component/Tour'
const App = () => {
  const[tours,setTours] = useState(data);
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  /* New UI */
  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className = "btn-white" onClick={() => setTours(data)}>
          Refresh 
        </button>
      </div>
    )
  }
  return (
    <div>
      <Tour tours = {tours} removeTour = {removeTour}></Tour>
    </div>
  );
};

export default App;
