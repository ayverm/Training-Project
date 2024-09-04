import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function StartCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const resp = await axios.get(`http://localhost:8080/api/course/${id}`);
        setCourse(resp.data);
      } catch (error) {
        alert("Error fetching courses");
      }
    };
    fetchCourses();
  }, []);

  const handleGenerateCertificate = () => {
    navigate(`/generate-certificate/${course.id}`);
  };
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {course && (
            <>
              <img
                src={course.imgUrl}
                className="card-img-top"
                alt={course.img}
              />
              <h2 className="text-center">{course.title}</h2>
              <p className="text-center">{course.description}</p>
              <p className="text-center">Duration : {course.duration}</p>
              <p className="text-center">Instructor : {course.instructor}</p>
              <button className="btn btn-success mt-3 w-100" onClick={handleGenerateCertificate}>
                Generate Certificate
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default StartCourse;
