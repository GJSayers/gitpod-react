import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

// This componenet is a parent component
function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="Fiona" age="32" />
      <StatefulGreeting greeting="I'm a stateful class component!" name="Fiona"/>
    </div>
  );
}

export default App;
