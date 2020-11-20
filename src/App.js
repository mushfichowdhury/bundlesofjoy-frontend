import './App.css';
import { Route } from "react-router-dom";
import Welcome from './Components/Welcome';
import Homepage from './Components/Homepage'

function App() {
  return (
    <div className="App">
            <Route path="/welcome" component={Welcome} />
            <Route path="/home" component={Homepage} />
    </div>
  );
}

export default App;
