/**
 * Room model events
 */

'use strict';

import {EventEmitter} from 'events';
var Room = require('./Room.model');
var RoomEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RoomEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Room.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    RoomEvents.emit(event + ':' + doc._id, doc);
    RoomEvents.emit(event, doc);
  }
}

export default RoomEvents;
