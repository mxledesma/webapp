import { FaBars } from "react-icons/fa"
import Logo from "./Logo"




const navbar = () => {
  return (
<nav className="navbar navbar-expand-lg">
  <div className="container">
    <Logo />

{/*  line 20 navbarNav needs to be same as line 9 on id.  */}
    <div className="collapse navbar-collapse" id="navbarNav">  
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link" aria-disabled="true">Disabled</a>
      </div>
    </div>
    <div  className="d-flex" role="search">
        <button className="btn btn-sm btn-outline-light">LogIn</button>
        <button className="btn btn-sm btn-outline-light mx-1">LogOut</button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <FaBars  color = "white"/>
    </button>


    </div>

  </div>
</nav>  
  )
}
//  in index.css , nav is included for background color 

export default navbar
