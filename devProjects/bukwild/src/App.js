import './App.css';
import { Header } from './Components/Header/Header';
import { PageUI } from './Components/PageUI/PageUI';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App" >
      <Header />
      <PageUI />
      {/* <Switch>
          <Route path='/about' component={About}/>
          <Route path='/myWork' component={MyWork}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/' component={Home}/>
        </Switch> */}
    </div>
  );
}

export default App;
