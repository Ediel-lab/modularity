import './App.css';

import { getCurrentTime, getWeekday } from './utils/time';
import { isEven, isAdult } from './utils/checks';
import { formatCurrency, formatDate } from './utils/formatter';
import { generateGreeting, farewell } from './utils/greetings';
import { add, divide } from './utils/math';

function App() {
  const name = 'User';
  const age = 17;
  const number = 10;
  const price = 1234.5;
  const today = new Date();

  return (
    <div>
      <h1>MODULARITY</h1>

      <p>{generateGreeting(name)}</p>
      <p>{farewell(name)}</p>

      <p>Today is: {getWeekday()}</p>
      <p>Current time: {getCurrentTime()}</p>

      <p>Formatted Price: {formatCurrency(price)}</p>
      <p>Formatted Date: {formatDate(today)}</p>

      <p>Is {number} even? {isEven(number) ? 'Yes' : 'No'}</p>
      <p>Is {age} years old an adult? {isAdult(age) ? 'Yes' : 'No'}</p>

      <h2>Math Operations</h2>
      <p>Sum: {add(4, 2)}</p>
      <p>Division: {divide(10, 2)}</p>
    </div>
  );
}

export default App;
