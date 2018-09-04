import openSocket from 'socket.io-client'

import {SOCKETCONFIG} from '../config'

const socket = openSocket(SOCKETCONFIG.BASE_URL);

function emitNewBookingCustomer(activeBook){
  socket.emit('newbooking:customer', activeBook);
}

function emitNewBookingMemberCancellation(activeBook){
  socket.emit('newbooking:membercancellation', activeBook);
}

function emitNewBookingDriverCancellation(activeBook){
  socket.emit('newbooking:drivercancellation', activeBook);
}

function emitNewBookingAccepted(activeBook){
  socket.emit('newbooking:accepted', activeBook);
}

export { emitNewBookingCustomer, 
  emitNewBookingMemberCancellation, 
  emitNewBookingDriverCancellation, 
  emitNewBookingAccepted 
}