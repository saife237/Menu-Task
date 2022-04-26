import {Route} from "react-router-dom"
import Breakfast from "./Pages/breakfast";
import Lunch from "./Pages/lunch";
import All from "./Pages/files"
import Milkshakes from "./Pages/milkshakes";
import Header from "./MainHeader/header";
function App() {
  return (
    <div>
    <Header/>
    <main>
    <Route path='/files' component={All}/>
    <Route path="/breakfast" component={Breakfast}/>
    <Route path="/lunch" component={Lunch}/>
    <Route path="/milkshakes" component={Milkshakes}/>
    </main>
    </div>
  );
}

export default App;
