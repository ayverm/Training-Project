

function CarouselComponent() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
            src="https://www.imcgrupo.com/wp-content/uploads/2021/03/What-Are-The-Basic-Steps-Of-Hiring-A-Web-Designing-Service-01.jpg"
              height ="450"
              className="d-block w-100" 
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Learn Web Development</h5>
              <p>Master the latest web technologiess and frameworks.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://t3.ftcdn.net/jpg/08/09/39/16/360_F_809391626_zpLcRWWbJhHoNClmssDM56orzhke9wNV.jpg" height="450" width="100%"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Advance your Career</h5>
              <p>
                Take courses in business and finance to move up in your career.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://c8.alamy.com/comp/2DEDDK2/web-design-inscription-against-laptop-and-code-background-learn-web-design-computer-courses-training-2DEDDK2.jpg" height="450" width="100%"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Design with Creativity</h5>
              <p>Enhance your design skills with courses in graphic design.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default CarouselComponent;
