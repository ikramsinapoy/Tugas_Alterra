import Style from "./style/TodoList.module.css";

function Todolist(props) {
  return (
    <div>
      <h2>{props.judul}</h2>
      {props.completed ? (
        <p className={Style.border}>
          <s>{props.title}</s>
        </p>
      ) : (
        <p className={Style.border}>{props.title}</p>
      )}
    </div>
  );
}

export default Todolist;
