import { Link } from "react-router-dom";
import CourseManagement from "./CourseManagement";

function AdminMainPage() {
  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <div className="alert alert-info mt-4 text-center">
        <h4>Welcome, Admin!</h4>
        <p>Manage courses and users here.</p>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-3">
          <ul className="list-group text-center">
            <li className="list-group-item">
              <Link
                to="/admin/courses"
                className="list-group-item list list-group-item-action text-bg-primary"
              >
                Manage Courses
              </Link>
            </li>

            <li className="list-group-item">
              <Link to="/admin/users" className="list-group-item list list-group-item-action text-bg-secondary">
                Manage Users
              </Link>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AdminMainPage;
