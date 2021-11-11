const AddTask = () => {
  return (
    <div>
      <div className="input-group mb-2">
        <input type="text" className="form-control" />
        <button className="btn btn-primary">Add</button>
      </div>
      <div className="d-flex justify-content-around">
        <div>
          <input type="radio" name="task" value="all" id="all" />
          <label className="form-label" htmlFor="all">
            All
          </label>
        </div>
        <div>
          <input type="radio" name="task" value="completed" id="completed" />
          <label className="form-label" htmlFor="completed">
            Completed
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="uncompleted"
            id="uncompleted"
          />
          <label className="form-label" htmlFor="uncompleted">
            Uncompleted
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
