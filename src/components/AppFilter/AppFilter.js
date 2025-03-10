import "./app-filter.css";

const AppFilter = (props) => {

    const buttonData = [
        {name: 'all', label: 'All Employees'},
        {name: 'rise', label: 'For Promotion'},
        {name: 'moreThan1000', label: 'Salary over $1000'}
    ]

    const buttons = buttonData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
            className={`btn ${clazz}`}
            key={name}
            onClick={() => {props.onUpdateFilter(name)}}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;