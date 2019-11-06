import React, { Component } from "react";
import { connect } from "react-redux";
import RateExchangeListItem from "../components/rate-exchange-list-item";

class RateExchangeList extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Pays</th>
              <th className="col-md-6">
                {" "}
                Valeur de la monnaie par rapport au dollars
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.rateExchangeList.map((rate, index) => {
              return (
                <RateExchangeListItem
                  key={rate.code + index}
                  rateExchange={rate}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rateExchangeList: state.rateExchangeReducer.rateExchangeList
  };
};

export default connect(
  mapStateToProps,
  undefined // pas de mapDispatchToProps car pas d'actions à lancer
)(RateExchangeList);
