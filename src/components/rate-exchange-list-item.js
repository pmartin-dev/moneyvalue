import React, { Component } from "react";

class RateExchangeListItem extends Component {
  render() {
    console.log(this.props.rateExchange);
    const { flag, name, rates } = this.props.rateExchange;

    return (
      <tr>
        <td>
          {name}
          <br />
          <img src={flag} height="60" width="100" alt={"flag_" + name} />
        </td>

        <td>Graphique</td>
      </tr>
    );
  }
}

export default RateExchangeListItem;
