import React from 'react'

export default function Topbar() {
  return (
   <div>
    <div className="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block">
      <div className="row gx-0 align-items-center">
          <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center me-4">
                  <small className="fa fa-phone-alt me-2"></small>
                  <small>+012 345 6789</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center me-4">
                  <small className="far fa-envelope-open me-2"></small>
                  <small>developer@example.com</small>
              </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
              <ol className="breadcrumb justify-content-end mb-0">
                  <li className="breadcrumb-item"><a className="text-white-50 small" href="#">Home</a></li>
                  <li className="breadcrumb-item"><a className="text-white-50 small" href="#">Terms</a></li>
                  <li className="breadcrumb-item"><a className="text-white-50 small" href="#">Privacy</a></li>
                  <li className="breadcrumb-item"><a className="text-white-50 small" href="#">Support</a></li>
              </ol>
          </div>
      </div>
  </div>
   </div>
  )
}
