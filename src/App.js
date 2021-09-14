import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider} from './context/AppContext'
import Navbar from './components/Navbar';

function App() {
  return (
    
    <AppProvider>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mt-3">
              <div className="card-header">
                <h3>My Budget Planner</h3>
              </div>
              <div className="card-body">
                < Budget/>
                <Remaining/>
                <ExpenseTotal/>
                <h3 className="mt-3">Expenses</h3>
                <ExpenseList/>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mt-3">
              <AddExpenseForm/>
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
