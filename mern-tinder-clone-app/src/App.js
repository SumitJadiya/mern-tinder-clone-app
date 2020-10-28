import './App.css';
import TinderCards from './components/cards/TinderCards';
import Header from './components/header/Header';
import SwipeButtons from './components/swipeButtons/SwipeButtons';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Tinder Cards */}
      <TinderCards />
      {/* Swipe Buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
