import React, { Component } from "react";
import Result from "./Result";
import TicketList from "./TicketList";

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 text-center">
            <h1>Đặt vé xem phim</h1>
            <table cellPadding={10}>
              <TicketList />
            </table>
          </div>
          <div className="col-4">
            <Result/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
