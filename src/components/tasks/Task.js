const Task = () => {
  return (
    <li>
      <div></div>
      <div className="btn-group" role="group">
        <i id="completed"></i>
        <i
          id="edit"
          className="fas fa-pen text-dark"
          data-bs-toggle="modal"
          data-bs-target="#editTask"
        ></i>
        <i id="delete" className="fa fa-trash text-danger"></i>
      </div>
    </li>
  );
};

export default Task;
