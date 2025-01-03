import React from 'react';
import "../Components/Header.css"

export default function Header(props) {
  const headerstyle={
    margin:" 0 1rem",
    minHeight: "10vh",
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    fontSize: "5rem",
    minHeight: "25vh",
    width: "100%",
    fontFamily: "'Roboto', sans-serif",
  }
  const titleStyle={
    borderRight: 'solid 3px rgba(0, 0, 0, 0.75)',
    whiteSpace: 'pre',
    overflow: 'hidden',
    letterSpacing: '0.20rem',
    marginTop: '50px',
    marginBottom: '20px',
    maxWidth: '480px',
    animationName: 'animated-text, animated-cursor',
    animationDuration: '2s, 750ms',
    animationTimingFunction: 'steps(11, end), steps(11, end)',
    animationDelay: '0.5s, 0s',
    animationIterationCount: '1, infinite',
    animationDirection: 'normal, normal',
    animationFillMode: 'both, none'
  }
  return (
    <div className='container' style={headerstyle}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand" style={titleStyle} href="#">
            {props.title}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {props.searchBar && (
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

