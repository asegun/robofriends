import React, {Component} from "react";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from "./SearchBox";


class App extends Component {

    constructor() {
        super()
        this.state = {
            robots : [],
            searchfield: ''
            
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots:users})})
    }
    onSearchChange = (event ) => {
    this.setState({searchfield: event.target.value})
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
   
    return(
        <div className="tc">
            <h2>Robo Friends</h2>
            <SearchBox  searchChange ={this.onSearchChange}/>
            <CardList robots = {filteredRobots}/>
        </div>
        
    );
}
}
export default App;