import React, { useState } from 'react';
import Buttons from './Buttons';
import CurrentCount from './CurrentCount';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <Buttons
        buttonText="Passed Down This Button Text"
        increment={ increment }
        decrement={ decrement }
        reset={ reset }
      />

      <CurrentCount count={ count } />
    </div>
  )
}

export default App;