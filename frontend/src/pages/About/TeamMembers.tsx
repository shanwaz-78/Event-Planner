import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { teamMembers} from '../../dammyData'

const TeamSection = () => {
  return (
    <section className="container text-center mt-5">
      <h2>
        <span style={{ color: "#0D6EFE" }}>Dvents</span> <strong>Team Members</strong>
      </h2>
      <p className="mb-5">
        We make your events smart & impactful by personalised event management services
      </p>

      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-6 d-flex align-items-center mb-4" key={index}>
            <div className="position-relative" style={{width:'30%'}}>
              <img src={member.image} alt={member.name} className="img-fluid rounded" sizes="100%"/>
              <div
                className="position-absolute"
                style={{ top: "10px", right: "-20%", width: "30px", height: "5px", backgroundColor: "#0D6EFE" }}
              />
            </div>

            <div className="ms-3 text-start">
              <h5 className="fw-bold">{member.name}</h5>
              <p className="text-muted">{member.role}</p>
              <p>{member.description}</p>

              <div>
                <i className="bi bi-twitter mx-1"></i>
                <i className="bi bi-facebook mx-1"></i>
                <i className="bi bi-google mx-1"></i>
                <i className="bi bi-instagram mx-1"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
