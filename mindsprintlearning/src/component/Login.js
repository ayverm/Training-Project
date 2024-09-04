import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login({setLoggedIn}) {
  const [student, setStudent] = useState({ email: "", password: ""});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "http://localhost:8080/api/student/login",
        student
      );
      if (resp.status == 200) {
        localStorage.setItem("sid", resp.data.id);
        localStorage.setItem("loggedIn",true);
        console.log(resp.data.role);
        
        setLoggedIn(true);
        if (resp.data.role == 1) {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        
        }
      }
    } catch (error) {
      alert("invalid credetials");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mt-5">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={student.email}
                  onChange={(e) =>
                    setStudent({ ...student, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={student.password}
                  onChange={(e) =>
                    setStudent({ ...student, password: e.target.value })
                  }
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block mt-4">
                Login
              </button>
            </form>
            <p className="text-center mt-3">
              Don't have an account? <Link to="/signup">Register Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
