import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./component/navbar"
import Dashboard from "./pages/dashboard/Dashboard"
import Login from "./pages/Login/login";
import Register from "./pages/register/Register";
import ExpenseDetails from "./pages/expense/ExpenseDetails";
import NewExpense from "./pages/expense/NewExpense";
import ExpenseReports from "./pages/expense/ExpenseReports";



const App = () => {
  return (
      <BrowserRouter>
      <Navbar/>

        <Routes>

          <Route path ="/" element={<Dashboard/>} />
          <Route path ="/login" element={<Login/>} />
          <Route path ="/register" element={<Register/>} />
          <Route path ="/newExpense" element={<NewExpense/>} />
          <Route path ="/viewExpenseDetails" element={<ExpenseDetails/>} />
          <Route path ="/expenseReports" element={<ExpenseReports/>} />

        </Routes>
      
      </BrowserRouter>
  )
};

export default App
