'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var RoomSchema = new mongoose.Schema({
  RoomNumber: Number,
  Rented: Boolean,
  Double: Boolean,
  ExtraBed: Boolean,
  RoomType : Boolean,
  RoomPrice : Number,
  Animal: Boolean,
  ArrivalDate: Date,
  DepatureDate: Date,
  Customer: {
    Name: String,
    PhoneNumber: String,
    Keybox: Boolean,
    Notes: String,
    CustomerEmail: String,
    Company: {
      Name: String,
      PhoneNumber: String,
      CompanyEmail: String
    }
  }
});

export default mongoose.model('Room', RoomSchema);
