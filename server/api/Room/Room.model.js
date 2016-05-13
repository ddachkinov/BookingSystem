'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var RoomSchema = new mongoose.Schema({
  roomNumber: Number,
  rented: Boolean,
  bathRoom: Boolean,
  roomPrice: Number,
  bookings: [{
    double: Boolean,
    extraBed: Boolean,
    animal: Boolean,
    arrivalDate: Date,
    depatureDate: Date,
    customer: {
      customerName: String,
      customerPhoneNumber: String,
      keybox: Boolean,
      notes: String,
      customerEmail: String,
      company: {
        companyName: String,
        companyPhoneNumber: String,
        companyEmail: String
      }
    }
  }]
});

export default mongoose.model('Room', RoomSchema);
