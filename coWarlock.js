var thunkify = require('thunkify')

/*
Usage:
var Warlock = require('co-warlock')( require('node-redis-warlock') )
*/
module.exports = function(Warlock){
  return function(redisClient){
    var warlock = Warlock(redisClient)
    warlock.lock = thunkify(warlock.lock).bind(warlock)
    warlock.unlock = thunkify(warlock.unlock).bind(warlock)
    warlock.optimistic = thunkify(warlock.optimistic).bind(warlock)
    return warlock
  }
}
