import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import EmployeeInfo from "./EmployeeInfo";
import EmployeeList from "../data/employees.json";

class EmployeeContainer extends Component {
  state = {
    result: [],
    search: "",
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.setState({"result": EmployeeList });
  }

  searchEmployees = () => {
    const searchQuery = this.state.search.trim();
    console.log(searchQuery)
    const searchResults = EmployeeList.filter((employee) => employee.firstName === searchQuery);
    console.log(searchResults);         
    this.setState({ 'result': searchResults.firstName });
  };

  // sort = event => {
  //   let employeeArr = this.state.result;
  //   let employeeArr = [...this.state.result];
  //   sort employeeArr
  //   arr.sort((a,b)=>{
  //     if () {
  //       return -1;
  //     }
  //     if () {
  //       return 1;
  //     }
  //   })
  //   this.setState({result: employeeArr})
  // }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  Developer = event => {
    event.preventDefault();
  
    this.setState({
      search: 'developer'
    });
  };

  // Security = event => {
  //   event.preventDefault();
  
  //   this.setState({
  //     search: 'security'
  //   });
  // };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-4" />
          <Col size="md-4">
            <SearchForm
              searchtype="first name"
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            
            <button onClick={this.Developer}>SORT Developer</button>
          </Col>
          <Col size="md-4" />
        </Row>
        <Row>
          <Col size="md-12">
          {/* <button onClick={this.Developer}>SORT Security</button>
          </Col>
          <Col size="md-4" />
        </Row>
        <Row>
          <Col size="md-12"> */}
            <hr />
            <EmployeeInfo search={this.state.search} />
          </Col>
        </Row>
      </Container >
    );
  }
 }

export default EmployeeContainer;