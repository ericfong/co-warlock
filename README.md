# co-warlock

## Usage
```
// wrap node-redis-warlock
var Warlock = require('co-warlock')( require('node-redis-warlock') )

// create new instance
var warlock = Warlock( redisClient )

// try to yield lock
var unlock = yield warlock.lock('try:to:lock', 10000)
```

## Reference
https://github.com/TheDeveloper/warlock
