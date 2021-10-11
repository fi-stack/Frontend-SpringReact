import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import EditEmployeeComponent from "./components/EditEmployeeComponent";

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={ListEmployeeComponent} />
          <Route path="/employees" component={ListEmployeeComponent} />
          <Route path="/add-employee" component={AddEmployeeComponent} />
          <Route path="/edit-employee/:id" component={EditEmployeeComponent} />
        </Switch>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
