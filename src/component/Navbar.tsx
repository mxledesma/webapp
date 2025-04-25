import { FaBars } from "react-icons/fa"
import Logo from "./Logo"
import { NavLink } from "react-router-dom"



const navbar = () => {
  return (
<nav className="navbar navbar-expand-lg">
  <div className="container">
    <Logo />

{/*  line 20 navbarNav needs to be same as line 9 on id.  */}
    <div className="collapse navbar-collapse" id="navbarNav">  
      <div className="navbar-nav">

        <NavLink className="nav-link"  to="/">
          Dashboard
        </NavLink>
        <NavLink className="nav-link" to="/newExpense">
          Expense
        </NavLink>
        <NavLink className="nav-link" to="expenseReports">
          ExpenseReport
        </NavLink>

      </div>
    </div>
    <div  className="d-flex" role="search">
        <NavLink className="btn btn-sm btn-outline-light" to="/login">Login</NavLink>
        <NavLink className="btn btn-sm btn-outline-light mx-1" to="register">Register</NavLink>
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
