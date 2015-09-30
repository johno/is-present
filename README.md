# is-present [![Build Status](https://travis-ci.org/johnotander/is-present.svg?branch=master)](https://travis-ci.org/johnotander/is-present)

Check whether a value is nonblank.

## Installation

```
npm i --save is-present
```

## Usage

```javascript
var isPresent = require('is-present');

isPresent([]);              // => false
isPresent({});              // => false
isPresent(0);               // => false
isPresent(function(){});    // => false
isPresent(null);            // => false
isPresent(undefined);       // => false
isPresent('');              // => false
isPresent('    ');          // => false
isPresent('\r\t\n ');       // => false

isPresent(['a', 'b']);      // => true
isPresent({ a: 'b' });      // => true
isPresent('string');        // => true
isPresent(42);              // => true
isPresent(function(a,b){}); // => true
```

## Acknowledgements

A negation for [is-blank](https://github.com/johnotander/is-blank) which extends
[is-empty](https://github.com/ianstormtaylor/is-empty) and
[is-whitespace](https://github.com/jonschlinkert/is-whitespace).

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
