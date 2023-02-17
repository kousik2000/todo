import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";

const TodoItem = (props) => {
  const { todoDetails, onClickDeleteButton } = props;
  const { id, addTask, date } = todoDetails;

  const onDelete = () => {
    onClickDeleteButton(id);
  };

  return (
    // <div className="todoListItem">
    //   <h1>{addTask}</h1>
    //   <p>{date}</p>
    // </div>
    <li className="todo-item-container">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox-input"
        onChange={(event) => {
          const checkboxLabel = event.target.nextElementSibling;
          checkboxLabel.classList.toggle("checked");
        }}
      />
      <div className="label-container">
        <label for="checkbox" className="checkbox-label">
          {addTask}
        </label>
        <div className="date-delete-container">
          <p className="task">{date}</p>
          <button className="delete-button">
            <div className="delete-icon-container" onClick={onDelete}>
              <i className="fa-solid fa-trash-can delete-icon"></i>
            </div>
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
