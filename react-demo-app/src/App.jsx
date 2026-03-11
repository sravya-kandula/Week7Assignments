import "./App.css";
import SideEffects from "./components/SideEffects";
import TaskManager from './components/TaskManager'


function App() {
  //return a react element(mandatory)

  return (
    <div className="text-center bg-gray-100 p-10">
     <SideEffects />
    </div>
  );
}

export default App;
