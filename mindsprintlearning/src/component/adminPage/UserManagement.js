import axios from "axios";
import { useEffect, useState } from "react";

function UserManagement() {

    const [students,setStudents] = useState([]);
    useEffect(()=> {
        const fetchUser = async() => {
            try {
                const resp = await axios.get('http://localhost:8080/api/student');
                setStudents(resp.data);
            }
            catch(error) {
                alert('Error fetching registered courses');
            }
        }; 
        fetchUser();
    },[]);

    return ( 
        <div className="container mt-4">
            <h2 className="text-center">User Management</h2>
            <table className="table table-bordered mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm ms-2">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No students found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
     );
}

export default UserManagement;