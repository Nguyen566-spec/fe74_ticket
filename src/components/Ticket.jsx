import React, { Component } from "react";
import { connect } from "react-redux";
import { ticketBookingAction } from "./movie/action";

export class Ticket extends Component {
  render() {
    const { ticket, ticketBookingList, bookingTicket } = this.props;
    return (
      <input
        type="checkbox"
        value={ticket.soGhe}
        style={{ width: 30, height: 30 }}
        disabled={ticket.daDat}
        checked={ticketBookingList.find((item) => item.soGhe === ticket.soGhe)}
        onClick={() => bookingTicket(ticket)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ticketBookingList: state.ticketReducer.ticketBookingList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bookingTicket: (payload) => {
      dispatch(ticketBookingAction(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
