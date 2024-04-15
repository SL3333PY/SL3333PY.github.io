import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <img src="sleepy.svg" alt="" width="28" height="28" className="d-inline-block align-text-top"/>
        <span style={{ fontFamily: 'Trebuchet MS', fontWeight: 'bold' }}>&ensp;Kim Hsieh</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">
          <span style={{ fontFamily: "Cascadia code" }}>HOME&ensp;</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
          <span style={{ fontFamily: "Cascadia code" }}>ABOUT&ensp;</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
          <span style={{ fontFamily: "Cascadia code" }}>PROJECTS&ensp;</span>
          </Link>
        </li>
      </ul>
        <form className='d-flex'>
          <Link to="/resume">
            <button className="btn btn-outline-info" type="submit">
            <span style={{ fontFamily: "Cascadia code" }}>CV</span>
            </button>
          </Link>
        </form>
    </div>
  </div>
</nav>
  )
}

export default NavBar
