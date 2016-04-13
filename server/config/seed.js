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
      RoomNumber: 6,
      Rented: true,
      Double: false,
      ExtraBed: false,
      Animal: false,
      ArrivalDate: new Date(),
      DepatureDate: new Date(),
      Customer: {
        Name: 'Frede',
        PhoneNumber: '465168456645615648454',
        Keybox: true,
        Notes: 'Frederik lugter af nakkeost',
        Company: {
          Name: 'Frederik A/s',
          PhoneNumber: '23125241'
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
