import React from 'react';

const WorkExperience = ({ logo, company, role, startDate, endDate, description }) => {
  return (
    <div className="card col-lg-6 col-sm-12 shadow container-fluid mb-3">
      <div className="card-body d-flex flex-column flex-sm-row">
        <img src={logo} alt={company} className="company-logo me-3 mb-3 mb-sm-0" />
        <div>
          <h5 className="card-title">{company}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{role}</h6>
        </div>
      </div>
      <p className="card-text">
        <strong>Data esperienza</strong> {startDate} - {endDate}
      </p>
      <p className="card-text pb-2 mb-2">{description}</p>
    </div>
  );
};

export default WorkExperience;