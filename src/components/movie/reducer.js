import tickets from "./../danhSachGhe.json";
import { PAY, TICKET_BOOKING } from "./type";

const initialState = {
  ticketList: tickets,
  ticketBookingList: [],
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case TICKET_BOOKING: {
      const data = [...state.ticketBookingList];
      const index = data.findIndex(
        (ticket) => ticket.soGhe === action.payload.soGhe
      );
      if (index !== -1) {
        data.splice(index, 1);
      } else {
        data.push(action.payload);
      }
      return { ...state, ticketBookingList: data };
    }
    case PAY: {
      const ds = state.ticketBookingList.map((item) => item.soGhe);
      const data = state.ticketList.map((item) => {
        const dsGhe = item.danhSachGhe.map((ticket) => {
          if (ds.includes(ticket.soGhe)) {
            ticket.daDat = true;
          }

          return ticket;
        });
        return { ...item, ds: dsGhe };
      });
      return { ...state, ticketBookingList: [], ticketList: data };
    }
    default:
      return state;
  }
};

export default ticketReducer;
