import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [courses,setCourses] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchCourses = async ()=> {
            try {
                const response = await axios.get('http://localhost:8080/api/course',courses);
                setCourses(response.data);
            }
            catch(error) {
                alert("Error fetching courses:",error);
            }
        };
        fetchCourses();
    },[]);

    const handleViewCourse =(id) => {
        navigate(`/courses/${id}`);
    }
    return ( 
    <div>
       <div className="container mt-5">
        <h2 className="mb-4 text-center">All Courses</h2>
        <hr/>
            <div className="row">
                {courses.map(course => (
                    <div key={course.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={course.imgUrl} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{course.title}</h5>
                                <p className="card-text">{course.description}</p>
                                <p><strong>Duration:</strong>{course.duration}</p>
                                <p><strong>Instructor:</strong>{course.instructor}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary w-100" onClick={()=>handleViewCourse(course.id)}>View Course</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    </div> 
    );
}

export default Dashboard;