import axios from "axios";
import { useEffect, useState } from "react";


function FeaturedCourses() {
  const [courses, setCourses] = useState([]);
 
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const resp = await axios.get(`http://localhost:8080/api/course`);
        setCourses(resp.data);
      } catch (error) {
        alert("Error fetching courses");
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
           <div className="row">
        {courses.map((course) => (
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
            </div>
          </div>
        ))}
    </div>
    </div>
  );
}

export default FeaturedCourses;
