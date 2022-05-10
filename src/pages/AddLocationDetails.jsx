import Background from "../components/Background";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddLocationDetails = () => {
  const formik = useFormik({
    initialValues: {
      room_no: "",
      room_type: "",
      doctor_id: "",
      medical_section: "",
      capacity: "",
    },
    validationSchema: Yup.object({
      room_no: Yup.string().required("*required"),
      room_type: Yup.string().required("*required"),
      doctor_id: Yup.string().required("*required"),
      medical_section: Yup.string().required("*required"),
      capacity: Yup.number().required("*required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Background title={"Add Location Details"}>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          onBlur={formik.handleBlur}
          style={{ paddingTop: "2rem" }}
        >
          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">
                Room No{" "}
                {formik.touched.room_no && formik.errors.room_no ? (
                  <span className="text-danger">{formik.errors.room_no}</span>
                ) : null}
              </label>
            </div>
            <div>
              <input
                type="text"
                name="room_no"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Room No"
              />
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ width: "15%" }}>
              <label htmlFor="">
                Room Type{" "}
                {formik.touched.room_type && formik.errors.room_type ? (
                  <span className="text-danger">{formik.errors.room_type}</span>
                ) : null}
              </label>
            </div>
            <div>
              <span style={{ paddingRight: "10rem" }}>
                <input
                  type={"radio"}
                  name={"room_type"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span style={{ paddingLeft: "0.5rem" }}>Room</span>
              </span>
              <span>
                <input
                  type={"radio"}
                  name={"room_type"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span style={{ paddingLeft: "0.5rem" }}>Laboratory</span>
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
              <label htmlFor="">
                Doctor ID{" "}
                {formik.touched.doctor_id && formik.errors.doctor_id ? (
                  <span className="text-danger">{formik.errors.doctor_id}</span>
                ) : null}
              </label>
            </div>

            <div>
              <input
                type="text"
                name={"doctor_id"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Doctor ID"
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
              <label htmlFor="">
                Medical Section{" "}
                {formik.touched.medical_section &&
                formik.errors.medical_section ? (
                  <span className="text-danger">
                    {formik.errors.medical_section}
                  </span>
                ) : null}
              </label>
            </div>

            <input
              type="text"
              name={"medical_section"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Medical Section"
            />
          </div>

          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">
                Capacity{" "}
                {formik.touched.capacity && formik.errors.capacity ? (
                  <span className="text-danger">{formik.errors.capacity}</span>
                ) : null}
              </label>
            </div>

            <input
              type="number"
              name={"capacity"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder=""
            />
          </div>

          <div
            style={{
              marginTop: "0.5rem",

              position: "fixed",
              top: "30%",
              right: "5%",
            }}
          ></div>

          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15%" }}>
              <label htmlFor=""></label>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ overflowX: "scroll", maxHeight: "13rem" }}>
                <table>
                  <tr>
                    <th>Staff ID</th>
                    <th>Name</th>
                    <th>Specialization</th>
                    <th>Salary</th>
                  </tr>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 4, 5, 6, 1, 2, 3].map(
                    (e) => (
                      <tr>
                        <td>001</td>
                        <td>test Name</td>
                        <td>test</td>
                        <td>test</td>
                      </tr>
                    )
                  )}
                </table>
              </div>
            </div>
          </div>

          <div style={{ position: "fixed", bottom: "5%" }}>
            <button type="button" className="btn btn-secondary">
              Go Back
            </button>
          </div>

          <div style={{ position: "fixed", bottom: "5%", right: "5%" }}>
            <button type="submit" className="btn btn-secondary">
              Update
            </button>
            <button type="button" className="btn btn-secondary">
              Delete
            </button>
            <button type="button" className="btn btn-secondary">
              Generate Report
            </button>
          </div>
        </form>
      </Background>
    </div>
  );
};

export default AddLocationDetails;
