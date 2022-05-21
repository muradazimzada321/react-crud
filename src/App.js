import './App.css';
import AddMovie from './components/AddMovie';
import ListMovies from './components/ListMovies';
function App() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Firebase Firestore with React</h3>
      </header>
    <main>
    <AddMovie />
    <ListMovies/>
  
  </main>
      
  </div>
  );
}

export default App;
