import AppInfo from '../AppInfo/AppInfo';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppFilter from '../AppFilter/AppFilter';
import EmployeesList from '../EmployeesList/EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';

import './app.css';

function App() {

  const data = [
    {name: 'Jacob Stone', salary: 800, increase: false, id: 1},
    {name: 'David Depp', salary: 3000, increase: false, id: 2},
    {name: 'Nazar Leochko', salary: 5000, increase: true, id: 3}
  ]

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;