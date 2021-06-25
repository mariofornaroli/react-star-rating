import { useState } from 'react';
import './App.scss';
const possibleRates = [1, 2, 3, 4, 5];

function App() {
  const [selectedRate, setSelectedRate] = useState(null);
  const [hoveredRate, setHoveredRate] = useState(null);

  return (
    <>
      <div class="card">
        <div class="card-header">
          <p class="title">How was your journay ?</p>
        </div>

        <div class="card-body">
          <div class="stars">
            {possibleRates.map(rate => <i
              key={rate}
              class={"fas fa-star " 
              + ((rate <= selectedRate) ? 'in-rate ' : '')
              + ((rate <= hoveredRate) ? 'in-hover' : '')}
              onClick={() => setSelectedRate(rate)}
              onMouseEnter={() => {setHoveredRate(rate); setSelectedRate(null);}}
              onMouseLeave={() => setHoveredRate(null)}></i>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
