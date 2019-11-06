import React, { Component } from "react";
import { fetchCountries, fetchRateExchange } from "../actions/index";
import { connect } from "react-redux";
const lodash = require("lodash");

class SearchBar extends Component {
  componentWillMount() {
    this.props.fetchCountries();
  }

  renderSelectedCountries() {
    return (
      <select
        onChange={event => this.onChangeCountry(event)}
        className="form-control search-bar"
      >
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

  onChangeCountry = event => {
    const countryCode = event.target.value;
    const country = lodash.find(this.props.countries, { code: countryCode });
    this.props.fetchRateExchange(country);
  };

  render() {
    return (
      <div>
        <form className="form-group">{this.renderSelectedCountries()}</form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { countries: store.countriesReducer.countries };
};

const mapDispatchToProps = {
  fetchCountries,
  fetchRateExchange
};

//mapStateToProps est undefined
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
