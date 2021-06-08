import './App.scss';
import routes from './routes';
import Header from './components/header/Header'


function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  );
}

export default App;
