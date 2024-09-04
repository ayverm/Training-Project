import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CourseDt() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  const handleRegisterCourse = async () => {
    try {
      const sid = localStorage.getItem("sid");
      if (!sid) {
        alert("Please log in to register for a course");
      } else {
        const resp = await axios.get(`http://localhost:8080/api/student/add/${sid}/course/${id}`);
        if (resp.status == 200) {
          alert("Registered Successfully");
          navigate("/my-courses");
        }
      }
    } catch (error) {
      alert("Error registering course");
    }
  };
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/course/${id}`
        );
        setCourse(response.data);
      } catch (error) {
        alert("Error fetching courses:", error);
      }
    };
    fetchCourseDetails();
  }, []);

  if (!course) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={course.imgUrl}
            alt={course.img}
            className="img-fluid rounded"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="mb-3">{course.title}</h2>
          <p className="text-muted">{course.description}</p>
          <p>
            <strong>Duration:</strong>
            {course.duration}
          </p>
          <p>
            <strong>Instructor:</strong>
            {course.instructor}
          </p>
          <button
            onClick={handleRegisterCourse}
            className="btn btn-success align-self-start mt-3"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDt;
