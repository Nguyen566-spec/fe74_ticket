import { PAY, TICKET_BOOKING } from "./type";

export const ticketBookingAction = (payload) => {
  return {
    type: TICKET_BOOKING,
    payload,
  };
};

export const payAction = () => {
  return {
    type: PAY,
  };
};
