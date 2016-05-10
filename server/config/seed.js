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
        RoomNumber: 1,
        Rented: true,
        Double: true,
        BathRoom : false,
        RoomPrice : 650,
        Booking:{
          ExtraBed: false,
          Animal: true,
          ArrivalDate: new Date(),
          DepatureDate: new Date(),
          Customer: {
            CustomerName: "Frede ",
            CustomerPhoneNumber: "88888888 ",
            Keybox: false,
            Notes: " Lalalalalalalala",
            CustomerEmail: "frede@frede.dk ",
            Company: {
              CompanyName: " Frede A/S",
              CompanyPhoneNumber: "77777777 ",
              CompanyEmail: "FredeFrede@Frede.dk "
            }
          }
        }
    })
    Room.create({
      RoomNumber: 2,
      Rented: false,
      Double: false,
      BathRoom : false,
      RoomPrice : 650,
      Booking:{
        ExtraBed: false,
        Animal: false,
        ArrivalDate: new Date(),
        DepatureDate: new Date(),
        Customer: {
          CustomerName: " ",
          CustomerPhoneNumber: " ",
          Keybox: false,
          Notes: " ",
          CustomerEmail: " ",
          Company: {
            CompanyName: " ",
            CompanyPhoneNumber: " ",
            CompanyEmail: " "
          }
        }
      }
  })
  Room.create({
    RoomNumber: 4,
    Rented: false,
    Double: false,
    BathRoom : false,
    RoomPrice : 650,
    Booking:{
      ExtraBed: false,
      Animal: false,
      ArrivalDate: new Date(),
      DepatureDate: new Date(),
      Customer: {
        CustomerName: " ",
        CustomerPhoneNumber: " ",
        Keybox: false,
        Notes: " ",
        CustomerEmail: " ",
        Company: {
          CompanyName: " ",
          CompanyPhoneNumber: " ",
          CompanyEmail: " "
        }
      }
    }
})
Room.create({
  RoomNumber: 5,
  Rented: false,
  Double: false,
  BathRoom : false,
  RoomPrice : 650,
  Booking:{
    ExtraBed: false,
    Animal: false,
    ArrivalDate: new Date(),
    DepatureDate: new Date(),
    Customer: {
      CustomerName: " ",
      CustomerPhoneNumber: " ",
      Keybox: false,
      Notes: " ",
      CustomerEmail: " ",
      Company: {
        CompanyName: " ",
        CompanyPhoneNumber: " ",
        CompanyEmail: " "
      }
    }
  }
})
Room.create({
  RoomNumber: 6,
  Rented: false,
  Double: false,
  BathRoom : false,
  RoomPrice : 650,
  Booking:{
    ExtraBed: false,
    Animal: false,
    ArrivalDate: new Date(),
    DepatureDate: new Date(),
    Customer: {
      CustomerName: " ",
      CustomerPhoneNumber: " ",
      Keybox: false,
      Notes: " ",
      CustomerEmail: " ",
      Company: {
        CompanyName: " ",
        CompanyPhoneNumber: " ",
        CompanyEmail: " "
      }
    }
  }
})
Room.create({
  RoomNumber: 7,
  Rented: false,
  Double: false,
  BathRoom : false,
  RoomPrice : 650,
  Booking:{
    ExtraBed: false,
    Animal: false,
    ArrivalDate: new Date(),
    DepatureDate: new Date(),
    Customer: {
      CustomerName: " ",
      CustomerPhoneNumber: " ",
      Keybox: false,
      Notes: " ",
      CustomerEmail: " ",
      Company: {
        CompanyName: " ",
        CompanyPhoneNumber: " ",
        CompanyEmail: " "
      }
    }
  }
})
Room.create({
  RoomNumber: 8,
  Rented: false,
  Double: false,
  BathRoom : false,
  RoomPrice : 650,
  Booking:{
    ExtraBed: false,
    Animal: false,
    ArrivalDate: new Date(),
    DepatureDate: new Date(),
    Customer: {
      CustomerName: " ",
      CustomerPhoneNumber: " ",
      Keybox: false,
      Notes: " ",
      CustomerEmail: " ",
      Company: {
        CompanyName: " ",
        CompanyPhoneNumber: " ",
        CompanyEmail: " "
      }
    }
    }
  })
Room.create({
  RoomNumber: 10,
  Rented: false,
  Double: false,
  BathRoom : true,
  RoomPrice : 850,
  Booking:{
    ExtraBed: false,
    Animal: false,
    ArrivalDate: new Date(),
    DepatureDate: new Date(),
    Customer: {
      CustomerName: " ",
      CustomerPhoneNumber: " ",
      Keybox: false,
      Notes: " ",
      CustomerEmail: " ",
      Company: {
        CompanyName: " ",
        CompanyPhoneNumber: " ",
        CompanyEmail: " "
      }
    }
  }
})
Room.create({
  RoomNumber: 11,
  Rented: false,
  Double: false,
  BathRoom : true,
  RoomPrice : 850,
  Booking:{
    ExtraBed: false,
    Animal: false,
    ArrivalDate: new Date(),
    DepatureDate: new Date(),
    Customer: {
      CustomerName: " ",
      CustomerPhoneNumber: " ",
      Keybox: false,
      Notes: " ",
      CustomerEmail: " ",
      Company: {
        CompanyName: " ",
        CompanyPhoneNumber: " ",
        CompanyEmail: " "
      }
    }
  }
})
Room.create({
  RoomNumber: 12,
  Rented: false,
  Double: false,
  BathRoom : true,
  RoomPrice : 850,
  Booking:{
    ExtraBed: false,
    Animal: false,
    ArrivalDate: new Date(),
    DepatureDate: new Date(),
    Customer: {
      CustomerName: " ",
      CustomerPhoneNumber: " ",
      Keybox: false,
      Notes: " ",
      CustomerEmail: " ",
      Company: {
        CompanyName: " ",
        CompanyPhoneNumber: " ",
        CompanyEmail: " "
      }
    }
  }
})
Room.create({
  RoomNumber: 13,
  Rented: false,
  Double: false,
  BathRoom : true,
  RoomPrice : 850,
  Booking:{
    ExtraBed: false,
    Animal: false,
    ArrivalDate: new Date(),
    DepatureDate: new Date(),
    Customer: {
      CustomerName: " ",
      CustomerPhoneNumber: " ",
      Keybox: false,
      Notes: " ",
      CustomerEmail: " ",
      Company: {
        CompanyName: " ",
        CompanyPhoneNumber: " ",
        CompanyEmail: " "
      }
    }
  }
})
Room.create({
  RoomNumber: 14,
  Rented: false,
  Double: false,
  BathRoom : true,
  RoomPrice : 850,
  Booking:{
    ExtraBed: false,
    Animal: false,
    ArrivalDate: new Date(),
    DepatureDate: new Date(),
    Customer: {
      CustomerName: " ",
      CustomerPhoneNumber: " ",
      Keybox: false,
      Notes: " ",
      CustomerEmail: " ",
      Company: {
        CompanyName: " ",
        CompanyPhoneNumber: " ",
        CompanyEmail: " "
      }
    }
  }
})
Room.create({
  RoomNumber: 15,
  Rented: false,
  Double: false,
  BathRoom : true,
  RoomPrice : 850,
  Booking:{
    ExtraBed: false,
    Animal: false,
    ArrivalDate: new Date(),
    DepatureDate: new Date(),
    Customer: {
      CustomerName: " ",
      CustomerPhoneNumber: " ",
      Keybox: false,
      Notes: " ",
      CustomerEmail: " ",
      Company: {
        CompanyName: " ",
        CompanyPhoneNumber: " ",
        CompanyEmail: " "
      }
    }
  }
})
Room.create({
  RoomNumber: 16,
  Rented: false,
  Double: false,
  BathRoom : true,
  RoomPrice : 850,
  Booking:{
    ExtraBed: false,
    Animal: false,
    ArrivalDate: new Date(),
    DepatureDate: new Date(),
    Customer: {
      CustomerName: " ",
      CustomerPhoneNumber: " ",
      Keybox: false,
      Notes: " ",
      CustomerEmail: " ",
      Company: {
        CompanyName: " ",
        CompanyPhoneNumber: " ",
        CompanyEmail: " "
      }
    }
  }
})
Room.create({
  RoomNumber: 17,
  Rented: false,
  Double: false,
  BathRoom : true,
  RoomPrice : 850,
  Booking:{
    ExtraBed: false,
    Animal: false,
    ArrivalDate: new Date(),
    DepatureDate: new Date(),
    Customer: {
      CustomerName: " ",
      CustomerPhoneNumber: " ",
      Keybox: false,
      Notes: " ",
      CustomerEmail: " ",
      Company: {
        CompanyName: " ",
        CompanyPhoneNumber: " ",
        CompanyEmail: " "
      }
    }
  }
})
  })



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
