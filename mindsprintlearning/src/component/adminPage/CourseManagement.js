import axios from "axios";
import { useEffect, useState } from "react";

function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    duration: "",
    instructor: "",
    image: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const resp = await axios.get("http://localhost:8080/api/course");
      setCourses(resp.data);
    } catch (error) {
      alert("Error fetching courses");
    }
  };

  const handleAddCourse = async () => {
    try {
      await axios.post("http://localhost:8080/api/course", newCourse);
      alert("Course added successfully");
      fetchCourses();
      setNewCourse({
        title: "",
        description: "",
        duration: "",
        instructor: "",
        image: "",
      });
    } catch (error) {
      alert("Error adding course");
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/course/${id}`);
      alert("Course deleted successfully");
      fetchCourses();
    } catch (error) {
      alert("Error deleting course");
    }
  };

  return (
    <div>
      <br/>
      <h3 className="text-center">Manage Courses</h3>
      <br/>
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
                <p className="card-text">Duration :{ course.duration}</p>
                <p className="card-text">Instructor :{ course.instructor}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteCourse(course.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
          <form >
        <br/>
        <hr/>
        <h3 className="text-center">Add New Course</h3>
        <br/>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Course Title"
          value={newCourse.title}
          onChange={(e) =>
            setNewCourse({ ...newCourse, title: e.target.value })
          }
        />

        <textarea
          type="text"
          className="form-control mb-2"
          placeholder="Course Description"
          value={newCourse.description}
          onChange={(e) =>
            setNewCourse({ ...newCourse, description: e.target.value })
          }
        />

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Instructor Name"
          value={newCourse.instructor}
          onChange={(e) =>
            setNewCourse({ ...newCourse, instructor: e.target.value })
          }
        />

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Course Image"
          value={newCourse.imgUrl}
          onChange={(e) =>
            setNewCourse({ ...newCourse, imgUrl: e.target.value })
          }
        />
        <div className="d-flex justify-content-center">
          <br/>
        <button
          type="button"
          className="btn btn-primary "
          onClick={handleAddCourse}
        >
          Add New Course
        </button>
        </div>
      </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseManagement;
