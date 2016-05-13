/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Room from '../api/Room/Room.model';

Room.find({}).removeAsync()
  .then(() => {
    Room.create({
      _id:'5735921d89b5c7980986c456',
      roomNumber: 1,
      rented: true,
      bathRoom: false,
      roomPrice: 650,
      bookings: [{
        double: true,
        extraBed: false,
        animal: true,
        arrivalDate: new Date(),
        depatureDate: new Date(),
        customer: {
          customerName: "Frede",
          customerPhoneNumber: "88888888",
          keybox: false,
          notes: " Lalalalalalalala",
          customerEmail: "frede@frede.dk",
          company: {
            companyName: " Frede A/S",
            companyPhoneNumber: "77777777",
            companyEmail: "FredeFrede@Frede.dk"
          }
        }
      },
      {
        double: true,
        extraBed: false,
        animal: true,
        arrivalDate: new Date(),
        depatureDate: new Date(),
        customer: {
          customerName: "Frede",
          customerPhoneNumber: "88888888",
          keybox: false,
          notes: " Lalalalalalalala",
          customerEmail: "frede@frede.dk",
          company: {
            companyName: " Frede A/S",
            companyPhoneNumber: "77777777",
            companyEmail: "FredeFrede@Frede.dk"
          }
        }
      }]
    }, {
      roomNumber: 2,
      rented: false,
      bathRoom: false,
      roomPrice: 650
    }, {
      roomNumber: 4,
      rented: false,
      bathRoom: false,
      roomPrice: 650
    }, {
      roomNumber: 5,
      rented: false,
      bathRoom: false,
      roomPrice: 650
    }, {
      roomNumber: 6,
      rented: false,
      bathRoom: false,
      roomPrice: 650
    }, {
      roomNumber: 7,
      rented: false,
      bathRoom: false,
      roomPrice: 650
    }, {
      roomNumber: 8,
      rented: false,
      bathRoom: false,
      roomPrice: 650
    }, {
      roomNumber: 10,
      rented: false,
      bathRoom: true,
      roomPrice: 850
    }, {
      roomNumber: 11,
      rented: false,
      bathRoom: true,
      roomPrice: 850
    }, {
      roomNumber: 12,
      rented: false,
      bathRoom: true,
      roomPrice: 850
    }, {
      roomNumber: 13,
      rented: false,
      bathRoom: true,
      roomPrice: 850
    }, {
      roomNumber: 14,
      rented: false,
      bathRoom: true,
      roomPrice: 850
    }, {
      roomNumber: 15,
      rented: false,
      bathRoom: true,
      roomPrice: 850
    }, {
      roomNumber: 16,
      rented: false,
      bathRoom: true,
      roomPrice: 850
    }, {
      roomNumber: 17,
      rented: false,
      bathRoom: true,
      roomPrice: 850
    });
  });



User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });
