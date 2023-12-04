import React, { Component } from 'react'; import List from './List'; 
import { DropdownButton, DropdownItem} from 'react-bootstrap' ; 

class FilteredList extends Component { 
	constructor(props) { 
	super(props); 
	this.state = { 
		search: "",
		type: "all",
	}; 
 } 
  // Sets the state whenever the user types on the search bar 
	onSearch = (event) => { 
		this.setState({search: event.target.value.toLowerCase()}); 
	} 
	//Sets up eventkey w type
	onSelectType = (eventKey) => {
		this.setState({type: eventKey});
	};
  
	filterItem = (item) => { 
	// Checks if the current search term is contained in this item
		return item.name.toLowerCase().search(this.state.search) !== -1; 
	} 
 
	typeMatch = (item) => {
		return this.state.type === 'all' || item.type.toLowerCase() === this.state.type;
	}

	render() { 
		return ( 
			<div className="filter-list">
				<h1>Produce Search</h1> 
				<DropdownButton id="typeDropdown" title={"Type"} onSelect={this.onSelectType}> 
					<DropdownItem eventKey="all" onSelect={() => this.onSelectType("all")}> All </DropdownItem> 
					<DropdownItem eventKey="fruit" onSelect={() => this.onSelectType("fruit")}> Fruit </DropdownItem>
					<DropdownItem eventKey="vegetable" onSelect={() => this.onSelectType("vegetable")}> Vegetable </DropdownItem>
				</DropdownButton> 
				<input type="text" placeholder="Search" onChange={this.onSearch}/> 
				<List items={this.props.items.filter(this.filterItem).filter(this.typeMatch)}/>
			</div> 
		); 
	}  
}
export default FilteredList;
