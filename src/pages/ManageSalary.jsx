import Background from "../components/Background";

const ManageSalary = () => {
  return (
    <div>
      <Background title={"Manage Salary"}>
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

          {/* <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "65%" }}></div>

            <div>
              <input type="text" placeholder="Search Staff ID" style={{ width: "6rem" }} />
            </div>
          </div> */}
        </form>

        <div
            style={{
              marginTop: "0.5rem",
              
              position:'fixed',
              top:'30%',
              right:'5%'
            }}
          >
            <div style={{padding:'1rem' , marginLeft:'12rem'}}>
              <input type="text" placeholder="Search Staff ID" style={{ width: "6rem" }} />
            </div>

            <div style={{overflowX:'scroll', maxHeight:'20rem'}}>
              <table>
                  <tr>
                      <th>Staff ID</th>
                      <th>Name</th>
                      <th>Specialization</th>
                      <th>Salary</th>
                  </tr>
                  {[1,2,3,4,5,6,7,8,9,7,8,9,4,5,6,1,2,3].map(e=>(
                      <tr>
                      <td>001</td>
                      <td>test Name</td>
                      <td>test</td>
                      <td>test</td>
                  </tr>
                  ))}

                  
              </table>
            </div>
            
          </div>

          <div style={{position:'fixed',bottom:'5%'}}>
                <button className="btn">Go Back</button>
            </div>

            <div style={{position:'fixed',bottom:'5%', right:'5%'}}>
                <button className="btn">Update</button>
                <button className="btn">Delete</button>
                <button className="btn">Generate Report</button>
            </div>
      </Background>
    </div>
  );
};

export default ManageSalary;
