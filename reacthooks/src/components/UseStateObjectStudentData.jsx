import React, { useState } from "react";

function UseStateObjectStudentData() {
  const [formData, setFormData] = useState({
    sname: "",
    sage: "",
    sbranch: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target.name + "|" + event.target.value);

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-title">Student Data</div>
            <div className="card-text">
              <form>
                <div className="form-group">
                  <label htmlFor="sname">StudentName</label>
                  <input
                    type="text"
                    name="sname"
                    id="sname"
                    className="form-control"
                    placeholder="Enter Student Name"
                    value={formData.sname}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sage">StudentAge</label>
                  <input
                    type="number"
                    name="sage"
                    id="sage"
                    className="form-control"
                    placeholder="Enter Student Age"
                    value={formData.sage}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sbranch">Student Branch</label>
                  <input
                    type="text"
                    name="sbranch"
                    id="sbranch"
                    className="form-control"
                    placeholder="Enter Student Branch"
                    value={formData.sbranch}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group m-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      alert(JSON.stringify(formData));
                    }}
                  >
                    Get Details
                  </button>
                </div>

                <h3> Name : {formData.sname}</h3>
                <h3> Age : {formData.sage}</h3>
                <h3> Branch : {formData.sbranch}</h3>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseStateObjectStudentData;
