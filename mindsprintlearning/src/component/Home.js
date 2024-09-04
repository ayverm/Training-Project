import CarouselComponent from "./CarouselComponent";
import FeaturedCourses from "./Pages/FeaturedCourses";
import MyCourses from "./Pages/MyCourses";

function Home() {
  return ( 
    <div>
      <CarouselComponent/>
      <br/>
      <h1 className="text-center">Featured Courses</h1>
      <br/>
      <FeaturedCourses/>
    </div>
   );
}

export default Home;