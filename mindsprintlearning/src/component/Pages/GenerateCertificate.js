import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GenerateCertificate() {
    const {id} =useParams();
    const [course,setCourse] = useState(null);
    const [student,setStudent] =useState({});
    const sid = localStorage.getItem('sid');
    useEffect(() => {
        const fetchCourse = async () => {
          try {
            const resp = await axios.get(`http://localhost:8080/api/course/${id}`);
            setCourse(resp.data);
          } catch (error) {
            alert("Error fetching courses");
          }
        };
        fetchCourse();
      }, [id]);

      useEffect(() => {
        const fetchCourse = async () => {
          try {
            const resp = await axios.get(`http://localhost:8080/api/student/${sid}`);
            setStudent(resp.data);
          } catch (error) {
            alert("Error fetching courses");
          }
        };
        fetchCourse();
      }, [id]);
      
      
      const handleDwnldCertificate = async () => {
        const certificateElement = document.getElementById('certificate');
        const canvas = await html2canvas(certificateElement); 
        const imageData = canvas.toDataURL('image/png'); 

        const pdf = new jsPDF('landscape','mm','a4'); 
        pdf.addImage(imageData, 'PNG', 10,10,227,190); 
        pdf.save(`Certificate_${course.title}.pdf`);
      };

      if(!course) {
        return <p>Loading course details...</p>;
      }
    return ( 
        <div className="container mt-4">
            <h2 className="text-center">Generate Certificate for {course.title} </h2>

            <div id="certificate" style={{width: '100%', padding: '20px', textAlign: 'center' , border:'5px solid black',margin:'20px 0',background:'#f4f4f4'}}>
            <h1>Certificate of Completion</h1>
            <p>This certificate is proudly presented to</p>
            <h2>{student.name}</h2>
            <p>For successfully completing the course</p>
            <h3>{course.title}</h3>
            <p>
                Instructor: {course.instructor} | Duration: {course.duration}
            </p>
            <p> Date: {new Date().toLocaleDateString()}</p>

            </div>
           <div className="d-flex justify-content-center">
           <button className="btn btn-primary mt-3" onClick={handleDwnldCertificate}>Download Certificate</button>
           </div>
        </div>
     );
}

export default GenerateCertificate;