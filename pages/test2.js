import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
} from 'mdb-react-ui-kit';
import React from 'react';

export default function Test2() {
  return (
    <div>
      <div className="bg-image  hover-zoom hover-shadow ">
        <img src="imgs/missionImage.png" className="w-100 " alt="placeholder" />
        <a href="#!">
          <div
            className="mask"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <h2 className="text-white mb-0">'index:mission' </h2>

              <p className="text-white mb-0">'index:mission_subheading'</p>
            </div>
          </div>
          <div className="hover-overlay">
            <div
              className="mask"
              style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
