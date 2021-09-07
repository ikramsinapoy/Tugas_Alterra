import "./Styleapp.css";
import Todolist from "./component/TodoList";

function App() {
  return (
    <div>
      <div className="mainContainer">
        <div className="titlecontainer">
          <h2 className="maintitle">To Do App</h2>
        </div>
        <Todolist title="Membuat Komponen" completed={true} />
        <Todolist title="Unit Testing" completed={false} />
        <Todolist title="Setup Development" completed={true} />
        <Todolist title="Deploy ke Server" completed={false} />
      </div>
    </div>
  );
}

export default App;
