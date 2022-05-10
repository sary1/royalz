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
      </div>
      <div className="right">
        <img src="./assets/villa-1.jpeg" alt="villa cover" />
      </div>
    </div>
  );
};

export default Landing;
