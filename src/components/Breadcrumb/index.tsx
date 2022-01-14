import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Container from "../Container";


type CrumbType = {
  path?: string;
  label: string;
};

interface IBreadcrumbProps {
  crumbs?: CrumbType[];
  backTo?: string;
}

const Breadcrumb:React.FC<IBreadcrumbProps> = ({
  crumbs = [],
  backTo = '/',
}) => {
  return (
    <section 
      aria-label="breadcrumb" 
      className="text-white mt-4"
    >
      <Container className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          <Link to={backTo}>
            <MdArrowBack className="fw-bold mx-3" />
          </Link>
        </li>
        <li>
          <Link to="/" className="fw-bold text-decoration-none mx-3">Home</Link>
        </li>
        {crumbs.map(crumb => (
          <li key={crumb.label} className="fw-bold text-primary mx-3">
            {crumb.path ? (
              <Link className="fw-bold text-decoration-none" to={crumb.path}>{crumb.label}</Link>
            ) : (
              crumb.label
            )}
          </li>
        ))}
      </Container>
    </section>
  )
};

export default Breadcrumb