import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyCourses() {
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRegisteredCourses = async () => {
      try {
        const sid = localStorage.getItem("sid");
        if (!sid) return;
        const resp = await axios.get(
          `http://localhost:8080/api/student/${sid}`
        );
        setRegisteredCourses(resp.data.courses);
      } catch (error) {
        alert("Error fetching registered courses");
      }
    };
    fetchRegisteredCourses();
  }, []);

  const handleViewCourses = async () => {
    navigate("/dashboard");
  };

  const handleStartCourse = (course) => {
    navigate(`/start-course/${course.id}`);
  };
  return (
    <div>
      <div className="container mt-4">
        <h2 className="text-center">My Registered Courses</h2>
        <hr />
        <br />
        {registeredCourses.length > 0 ? (
          <div className="row">
            {registeredCourses.map((course) => (
              <div className="col-md-4" key={course.id}>
                <div className="card mb-3">
                  <img
                    src={course.imgUrl}
                    className="card-img-top"
                    alt={course.img}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                    <p className="card-text">Duration :{course.duration}</p>
                    <p className="card-text">Instructor :{course.instructor}</p>
                  </div>

                  <button
                    className="btn btn-primary"
                    onClick={()=>handleStartCourse(course)}
                  >
                    Start Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>You have not registerd for any courses yet.</p>
        )}
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary " onClick={handleViewCourses}>
          View All Courses
        </button>
      </div>
    </div>
  );
}

export default MyCourses;
