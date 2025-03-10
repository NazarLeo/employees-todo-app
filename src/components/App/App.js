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
        {name: 'Jacob Stone', salary: 800, increase: false, rise: false, id: 1},
        {name: 'David Depp', salary: 3000, increase: false, rise: false, id: 2},
        {name: 'Nazar Leochko', salary: 5000, increase: true, rise: true, id: 3}
      ],
      term: '',
      filter: 'all'
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
        rise: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
  }

  onChangeSalary = (id, value) => {
    this.setState(({data})=>{
      return(
        {data: data.map(item => {
          if(item.id === id){
            return {...item, salary: +value.slice(0, -1)};
          }
          return item;
        })}
      )
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id){
          return {...item, [prop]: !item[prop]};
        }
        return item;
      })
    }))
  }

  filterPost = (items, filter) =>{
    switch(filter){
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThan1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  searchEmp = (items, term) => {
    if (term.length === 0) return items;
    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term: term});
  }

  onUpdateFilter = (filter) => {
    this.setState({filter})
  }

  render(){
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
          <AppInfo employees={employees} increased={increased}/>
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
          </div>
          
          <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onChangeSalary={this.onChangeSalary}
          />
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;