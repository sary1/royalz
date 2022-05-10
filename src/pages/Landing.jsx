import "./landing.scss";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="left">
        <div className="topNav">
          <div className="logo">
            <img src="./assets/logo.png" alt="logo" />
          </div>
          <div className="search">
            <i class="search-icon fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="contents">
          <span>Real Estate experts are here</span>
          <h1>
            Specialists in <i>development and property</i> management
          </h1>
          <div className="breakline"></div>
          <div className="paragraphs">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, quo itaque quam atque dicta mollitia distinctio animi,
              odio nostrum alias velit ipsum quod excepturi ipsam quia corrupti.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, quo itaque quam atque dicta mollitia distinctio animi,
              odio nostrum alias velit ipsum quod excepturi ipsam quia corrupti.
            </p>
          </div>
          <button>Read More</button>
        </div>
      </div>
      <div className="right">
        <img src="./assets/villa-1.jpeg" alt="villa cover" />
      </div>
    </div>
  );
};

export default Landing;
