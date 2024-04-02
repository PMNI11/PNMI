import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>PNMI</h1>
            <span>EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>

          <div className="login-button">
            <Link to="/Uni">
              <button>
                <i className="fas fa-user-circle"></i> {/* Replace with appropriate admin icon */}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head;
