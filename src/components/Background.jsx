const Background = ({ children, title, button = "Home" }) => {
  return (
    <div
      style={{
        backgroundColor: "#09013D",
        width: "100%",
        height: "100vh",
        padding: "2rem",
        boxSizing: "border-box",
        color: "white",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "1.5rem",
          borderBottom: "2px solid white",
          paddingBottom: "0.8rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {title}

        <button className="btn fw-bold px-4" style={{ backgroundColor: "#817A7A" }}>
          {button}
        </button>
      </div>
      {children}
    </div>
  );
};

export default Background;
