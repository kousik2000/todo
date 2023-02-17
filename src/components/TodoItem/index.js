import "./index.css";

const TodoItem = (props) => {
  const { todoDetails } = props;
  const { addTask, date } = todoDetails;

  return (
    <div className="todoListItem">
      <h1>{addTask}</h1>
      <p>{date}</p>
    </div>
  );
};

export default TodoItem;
