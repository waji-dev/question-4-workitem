import logo from "./logo.svg";
import "./App.css";
import EAWorkList from "./components/WorkItems/EAWorkList";

function App() {
  return (
    <div className="container-fluid">
      <main>
        <div className="row">
          <div className="col mt-2">
            <EAWorkList description="this is test description 1 for listing" header="This Worklist One" />
          </div>
          <div className="col mt-2">
            <EAWorkList description="this is test description 2 for listing" header="This Worklist Two" />
          </div>
          <div className="col mt-2">
            <EAWorkList description="this is test description 3 for listing" header="This Worklist Three" />
          </div>
        </div>
    
      </main>
    </div>
  );
}

export default App;
