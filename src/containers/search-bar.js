import React, { Component } from "react";
import { fetchCountries } from "../actions/index";
import { connect } from "react-redux";

class SearchBar extends Component {
  componentWillMount() {
    this.props.fetchCountries();
  }

  renderSelectedCountries() {
    return (
      <select>
        <option></option>
      </select>
    );
  }

  render() {
    return (
      <div>
        <form>{this.renderSelectedCountries()}</form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCountries
};

//mapStateToProps est undefined
export default connect(
  undefined,
  mapDispatchToProps
)(SearchBar);
