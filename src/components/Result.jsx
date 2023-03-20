import React, { Component } from "react";
import { connect } from "react-redux";
import { payAction, ticketBookingAction } from "./movie/action";

export class Result extends Component {
  render() {
    const { ticketBookingList, payTicket, deleteTicket } = this.props;
    return (
      <div className="mt-4">
        <h1>Danh sách ghế đang chọn</h1>
        <div className="mt-3">
          <table className="table">
            <thead>
              <tr>
                <th>Số thứ tự</th>
                <th>Số ghế</th>
                <th>Giá tiền</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ticketBookingList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.soGhe}</td>
                  <td>{item.gia} VND</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteTicket(item)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          Tổng tiền:{" "}
          {ticketBookingList.reduce((total, item) => total + item.gia, 0)} VND
        </div>
        <button className="btn btn-success" onClick={payTicket}>Thanh toán</button>
      </div>
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
      payTicket: () => {
        dispatch(payAction());
      },
      deleteTicket: (payload) => {
        dispatch(ticketBookingAction(payload))
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Result);
