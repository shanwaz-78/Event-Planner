import React from "react";

import { Link } from "react-router-dom";
import { CategoryCardProps } from "../types/CategoryCard.types";
import '../App.css'
import '../pages/Category/Category.css'

const CategoryCard: React.FC<CategoryCardProps> = ({ feature, index }) => {
  return (
    <div key={index} className="col-12 col-md-6 col-lg-4 ">
      <div className="card h-100 border border-2 border-light shadow-lg-hover card-hover-effect main-container">
        <div className="card-body p-4 position-relative card-container">
          <h2 className="card-heading">{feature.title}</h2>
          <p>{feature.description}</p>
          <img src={feature.img} alt="feature-img" className="card-img"/>
          <Link
            to="#"
            className="text-decoration-none d-flex align-items-center text-primary fw-medium hover-arrow"
          >
            <button className="card-btn">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
