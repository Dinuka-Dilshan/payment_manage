import Background from "../components/Background";

const  CountingSalary = () => {
  return (
    <div>
      <Background title={"Counting Salary"}>
        <form action="" style={{ paddingTop: "2rem" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "15%" }}>
              <label htmlFor="">Staff</label>
            </div>
            <div>
              <span style={{ paddingRight: "10rem" }}>
                <input type={"radio"} />
                <span style={{ paddingLeft: "0.5rem" }}>Doctor</span>
              </span>
              <span>
                <input type={"radio"} />
                <span style={{ paddingLeft: "0.5rem" }}>Nurse</span>
              </span>
            </div>
          </div>
          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">Staff ID</label>
            </div>
            <div>
              <input type="text" placeholder="Staff ID" />
            </div>
          </div>

          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">Name</label>
            </div>

            <div>
              <input type="text" placeholder="Name" />
            </div>
          </div>

          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">Specialization</label>
            </div>

            <input type="text" placeholder="Specialization" />
          </div>

          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">Medical Section</label>
            </div>

            <input type="text" placeholder="Medical Section" />
          </div>

          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">Working Hours</label>
            </div>

            <div>
              <input type="number" placeholder="00:00" />
              <label style={{ marginLeft: "5rem" }} htmlFor="">
                OT Hours
              </label>
              <input
                style={{ marginLeft: "1rem" }}
                type="number"
                placeholder="00:00"
              />
            </div>
          </div>

          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">Working Days</label>
            </div>

            <input type="number" placeholder="" />
          </div>

          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">Salary</label>
            </div>

            <input type="text" placeholder="Rs." style={{ width: "6rem" }} />
          </div>

        
        </form>

        

          <div style={{position:'fixed',bottom:'5%'}}>
                <button className="btn">Go Back</button>
            </div>

            <div style={{position:'fixed',bottom:'5%', right:'5%'}}>
                <button style={{width:'6rem'}} className="btn">Save</button>
                <button style={{width:'6rem'}} className="btn">Clear</button>
            </div>
      </Background>
    </div>
  );
};

export default CountingSalary;
