# ReactBroadcast
A simple lightweight React broadcast library

# Usage
## Install
    npm install reactbroadcast

## Broadcast an Event
To broadcast an event to all components watching for the event:

```js
var ReactBroadcast = require('reactbroadcast');
ReactBroadcast.broadcast('event1', 'value1');
```
## Listen for a Broadcast
To receive the event within any component:
```js
var ReactBroadcast = require('reactbroadcast');
ReactBroadcast.on('event1', value => {
   console.log("received the value");
})
```
## Listen for a Broadcast containing
If you want to receive all values containing a certain string:
```js
var ReactBroadcast = require('reactbroadcast');
ReactBroadcast.onContains('event', value => {
   console.log("received the value");
})
```
## Get all listening names
```js
var ReactBroadcast = require('reactbroadcast');
var names = ReactBroadcast.getAllNames();
```
