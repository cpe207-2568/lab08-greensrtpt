import { type TaskCardProps } from "../libs/types";

export function Task(props: TaskCardProps) {
  const { title, description, isDone } = props;

  return (
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <h5 className="card-title">{title}</h5>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <p className="card-text"> {description} </p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-success me-2">              {isDone ? "Undone" : "Done"}
            </button>

                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
  );
}