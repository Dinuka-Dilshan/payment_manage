import Background from "../components/Background";

const AddWorking = () => {
  return (
    <div>
      <Background title={"Add Working Days And Hours"}>
        <div className="d-flex justify-content-end align-items-center my-2 pe-5 mb-3">
          <label className="mx-1 fw-bold" for="staffID">
            Staff ID
          </label>

          <select className="mx-3 py-1" name="staffID" id="staffID">
            <option value="volvo" style={{ width: "6rem" }}>
              Select ID
            </option>
          </select>

          <button className="btn" style={{ backgroundColor: "#DFE709" }}>
            Search
          </button>
          <button className="btn" style={{ backgroundColor: "#AAECC9" }}>
            View
          </button>
        </div>

        <div className="d-flex justify-content-end align-items-center my-2 ">
          <div style={{ width: "40%" }}>
            <div className="d-flex  my-4">
              <div style={{ width: "40%" }}>
                <label className="mx-1 fw-bold" for="staffID">
                  Staff ID
                </label>
              </div>
              <div style={{ width: "60%" }}>
                <select
                  className="me-3 py-1 fw-bold"
                  name="staffID"
                  id="staffID"
                  style={{ width: "8rem" }}
                >
                  <option value="volvo">Select ID</option>
                </select>
              </div>
            </div>
            <div className="d-flex  my-4">
              <div style={{ width: "40%" }}>
                <label className="mx-1 fw-bold">No of Working Days</label>
              </div>
              <div style={{ width: "60%" }}>
                <input type="number" style={{ width: "8rem" }} />
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-center ">
              <div style={{ width: "40%" }} className="d-flex ">
                {" "}
                <span className="mb-5 pb-5 fw-bold"> Working Days</span>
              </div>
              <div style={{ width: "60%" }} className="d-flex flex-column">
                <div>
                  <input type="checkbox" id="sunday" />
                  <label htmlFor="sunday" className="px-3">
                    Sunday
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="monday" />
                  <label htmlFor="monday" className="px-3">
                    monday
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="tuesday" />
                  <label htmlFor="tuesday" className="px-3">
                    tuesday
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="wednesday" />
                  <label htmlFor="wednesday" className="px-3">
                    wednesday
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="thursday" />
                  <label htmlFor="thursday" className="px-3">
                    thursday
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="friday" />
                  <label htmlFor="friday" className="px-3">
                    friday
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="saturday" />
                  <label htmlFor="saturday" className="px-3">
                    Saturday
                  </label>
                </div>
              </div>
            </div>
            <div className="d-flex  my-4">
              <div style={{ width: "40%" }}>
                <label className="mx-1 fw-bold">Working Time Per Days</label>
              </div>
              <div style={{ width: "60%" }}>
                <input type="number" style={{ width: "8rem" }} />
              </div>
            </div>
          </div>
          <div style={{ width: "60%" }} className="">
            <div style={{ overflowX: "scroll", maxHeight: "25rem" }}>
              <table>
                <tr>
                  <th>Staff ID</th>
                  <th>Name</th>
                  <th>Specialization</th>
                  <th>Salary</th>
                  <th>Salary</th>
                  <th>Salary</th>
                </tr>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 4, 5, 6, 1, 2, 3].map(
                  (e) => (
                    <tr>
                      <td>001</td>
                      <td>test Name</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                  )
                )}
              </table>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-5">
          <button className="btn fw-bold" style={{ backgroundColor: "#ECDAAA" , width:'6rem'}}>
            Clear
          </button>
          <button className="btn fw-bold" style={{ backgroundColor: "#078944" , width:'6rem'}}>
            Save
          </button>
          <button className="btn fw-bold" style={{ backgroundColor: "#AAECC9" , width:'6rem'}}>
            Update
          </button>
          <button className="btn fw-bold" style={{ backgroundColor: "#F81212" , width:'6rem'}}>
            Delete
          </button>
        </div>
      </Background>
    </div>
  );
};

export default AddWorking;
