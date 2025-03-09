import { Component } from 'react';

import AppInfo from '../AppInfo/AppInfo';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppFilter from '../AppFilter/AppFilter';
import EmployeesList from '../EmployeesList/EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';

import './app.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {name: 'Jacob Stone', salary: 800, increase: false, id: 1},
        {name: 'David Depp', salary: 3000, increase: false, id: 2},
        {name: 'Nazar Leochko', salary: 5000, increase: true, id: 3}
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data})=>{
      return {
        data: data.filter(item => item.id !== id)
      } 
    })
  }

  addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
}

  render(){
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList data={this.state.data} onDelete={this.deleteItem}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;