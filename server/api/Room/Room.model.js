'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var RoomSchema = new mongoose.Schema({
  RoomNumber: Number,
  Rented: Boolean,
  Double: Boolean,
  ExtraBed: Boolean,
  BathRoom : Boolean,
  RoomPrice : Number,
  Animal: Boolean,
  ArrivalDate: Date,
  DepatureDate: Date,
  Customer: {
    CustomerName: String,
    CustomerPhoneNumber: String,
    Keybox: Boolean,
    Notes: String,
    CustomerEmail: String,
    Company: {
      CompanyName: String,
      CompanyPhoneNumber: String,
      CompanyEmail: String
    }
  }
});

export default mongoose.model('Room', RoomSchema);
