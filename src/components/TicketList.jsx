import React, { Component } from "react";
import { connect } from "react-redux";
import Ticket from "./Ticket";

export class TicketList extends Component {
  render() {
    const { ticketList } = this.props;
    return (
      <tbody>
        {ticketList.map((item) => (
          <tr key={item.hang}>
            <td>{item.hang}</td>
            {item.danhSachGhe.map((ticket) => (
              <td key={ticket.soGhe}>
                {item.hang ? <Ticket ticket={ticket}/> : <>{ticket.soGhe}</>}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ticketList: state.ticketReducer.ticketList,
  };
};

export default connect(mapStateToProps)(TicketList);
