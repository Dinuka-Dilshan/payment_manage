import Background from "../components/Background";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, Col, Row } from "react-bootstrap";

const ManageChannellingDetails = () => {
  const formik = useFormik({
    initialValues: {
      room_type: "",
      room_no: "",
      appoinment_no: "",
      doctor_id: "",
      specialization: "",
      medical_section: "",
      time_to: "",
      time_from: "",
      date: "",
    },
    validationSchema: Yup.object({
      room_type: Yup.string().required("*required"),
      room_no: Yup.string().required("*required"),
      appoinment_no: Yup.string().required("*required"),
      doctor_id: Yup.string().required("*required"),
      specialization: Yup.string().required("*required"),
      medical_section: Yup.string().required("*required"),
      time_to: Yup.string().required("*required"),
      time_from: Yup.string().required("*required"),
      date: Yup.string().required("*required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Background title={"Manage Channelling Details"}>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          onBlur={formik.handleBlur}
          style={{ paddingTop: "2rem" }}
        >
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
                  name="room_type"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={"Room"}
                  type={"radio"}
                />
                <span style={{ paddingLeft: "0.5rem" }}>Room</span>
              </span>
              <span>
                <input
                  name="room_type"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={"Laboratory"}
                  type={"radio"}
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
                Room No:{" "}
                {formik.touched.room_no && formik.errors.room_no ? (
                  <span className="text-danger">{formik.errors.room_no}</span>
                ) : null}
              </label>
            </div>
            <div className="room" style={{ maxWidth: "25rem" }}>
              <input
                type="text"
                name="room_no"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.room_no}
                placeholder="Room No:"
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
                Appoinment No:{" "}
                {formik.touched.appoinment_no && formik.errors.appoinment_no ? (
                  <span className="text-danger">
                    {formik.errors.appoinment_no}
                  </span>
                ) : null}
              </label>
            </div>
            <div className="room">
              <input
                type="text"
                name="appoinment_no"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.appoinment_no}
                placeholder="Appoinment No:"
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
                Doctor ID{" "}
                {formik.touched.doctor_id && formik.errors.doctor_id ? (
                  <span className="text-danger">{formik.errors.doctor_id}</span>
                ) : null}
              </label>
            </div>

            <div className="room-long ">
              <input
                type="text"
                name="doctor_id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.doctor_id}
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
            className="room-long "
          >
            <div style={{ width: "15%" }}>
              <label htmlFor="">
                Specialization{" "}
                {formik.touched.specialization &&
                formik.errors.specialization ? (
                  <span className="text-danger">
                    {formik.errors.specialization}
                  </span>
                ) : null}
              </label>
            </div>

            <input
              type="text"
              name="specialization"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.specialization}
              placeholder="Specialization"
            />
          </div>

          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
            className="room-long "
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
              name="medical_section"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.medical_section}
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
                Time{" "}
                {(formik.touched.date || formik.touched.time_from || formik.touched.time_to) && (formik.errors.time_from || formik.errors.date || formik.errors.time_to)
                 ? (
                  <span className="text-danger">
                    {formik.errors.time_from || formik.errors.time_to || formik.errors.date}
                  </span>
                ) : null}
              </label>
            </div>

            <div style={{ width: "20%" }}>
              <input
                type="time"
                name="time_from"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.time_from}
                placeholder="00:00"
              />
              <label className="mx-2" htmlFor="">
                To
              </label>
              <input
                style={{ marginLeft: "0.1rem" }}
                type="time"
                name="time_to"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.time_to}
                placeholder="00:00"
              />
            </div>
            <div
              style={{
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="mx-3 mb-2" style={{ width: "15%" }}>
                <label htmlFor="">Date </label>
              </div>

              <input
                type="date"
                name="date"
                className="fs-6 p-2 py-1 mb-2 pb-1"
                style={{ width: "6rem" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
              />
            </div>
            <div
              style={{
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
                width: "21.8%",
              }}
            ></div>
            <div
              style={{
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
                width: "23%",
              }}
              className="room"
            >
              <input
                className="mb-2"
                type="text"
                placeholder="Search Doctor ID"
              />
            </div>
          </div>

          <div
            style={{
              marginTop: "0.5rem",

              position: "fixed",
              top: "30%",
              right: "5%",
            }}
          ></div>
          <Row>
            <Col lg={1}></Col>
            <Col>
              <Card style={{ width: "100%", height: "6rem" }}>
                <Card.Body></Card.Body>
              </Card>
            </Col>
            <Col lg={1}></Col>
          </Row>

          <div style={{ position: "fixed", bottom: "1%" }}>
            <button type="button" className="btn btn-secondary">
              Go Back
            </button>
          </div>

          <div style={{ position: "fixed", bottom: "1%", right: "5%" }}>
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

export default ManageChannellingDetails;
