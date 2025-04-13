
import ExpenseList from "../../component/ExpenseList"
import useExpenses from "../../hooks/useExpenses"
/// import apiClient from "../../config/api-client";   // imported in services



/*


    useEffect: Handles side effects like API calls

    useState: Manages component state

    ExpenseList: Reusable UI component for displaying expenses

    apiClient: Preconfigured HTTP client (e.g., Axios instance)

    Expense: TypeScript interface/type defining expense structure

*/

const Dashboard = () => {
  
 
  /*
  const expenses: Expense [] =[
    {id:1, name:"Water Bill", amount: 200.00, date: new Date().toDateString(),category: "Utilities",note:"bills"},
    {id:2, name:"Electric Bill", amount: 500.00, date: new Date().toDateString(),category: "Utilities",note:"bills"},
    {id:3, name:"Wifi Bill", amount: 700.00, date: new Date().toDateString(),category: "Utilities",note:"bills"}
  ];   */



  const {expenses, error, isLoading} = useExpenses();

  return (
  <div>
    {isLoading && <p>{isLoading} is Loading....</p>}
    {error && <p>{error}</p>}
    <ExpenseList expenses={expenses}/>

    </div>

  )
}

export default Dashboard


