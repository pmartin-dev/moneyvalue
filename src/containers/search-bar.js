import React, { Component } from "react";
import { fetchCountries } from "../actions/index";
import { connect } from "react-redux";

class SearchBar extends Component {
  componentWillMount() {
    this.props.fetchCountries();
  }

  renderSelectedCountries() {
    return (
      <select className="search-bar">
        {this.props.countries.map(country => {
          return (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          );
        })}
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

const mapStateToProps = store => {
  return { countries: store.countriesReducer.countries };
};

const mapDispatchToProps = {
  fetchCountries
};

//mapStateToProps est undefined
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
