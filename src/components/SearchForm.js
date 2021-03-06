import React from "react";

function SearchForm(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>Employee Directory</h2>
      </div>
      <div className="card-body"></div>
      <form>
        <div className="form-group" style={{ padding: '22px' }}>
          <label htmlFor="search">Search</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            searchtype={props.searchtype}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search Employees"
            id="search"
          />
          {/* <br />
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search Employees
        </button> */}
        </div>
      </form>
    </div>

  );
}

export default SearchForm;