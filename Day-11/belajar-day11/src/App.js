import "./Styleapp.css";
import Todolist from "./component/TodoList";
import Data from "./component/Data";

function App() {
  return (
    <div>
      <div className="mainContainer">
        <div className="titlecontainer">
          <h2 className="maintitle">To Do App</h2>
        </div>
        {Data.map((item) => (
          <Todolist
            key={item.id}
            title={item.title}
            completed={item.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
