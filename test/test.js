var assert = require('assert');
var isPresent = require('..');

describe('is-present', function() {

  it('should not think that [] is present', function() {
    assert.ok(!isPresent([]));
  });

  it('should not think that {} is present', function() {
    assert.ok(!isPresent({}));
  });

  it('should not think that 0 is present', function() {
    assert.ok(!isPresent(0));
  });

  it('should not think that an empty function is present', function() {
    assert.ok(!isPresent(function(){}));
  });

  it('should not think that null is present', function() {
    assert.ok(!isPresent(null));
  });

  it('should not think that undefined is present', function() {
    assert.ok(!isPresent(undefined));
  });

  it('should not think that \'\' is present', function() {
    assert.ok(!isPresent(''));
  });

  it('should not think that \'    \' is present', function() {
    assert.ok(!isPresent('    '));
  });

  it('should not think that \'\\r\\t\\n\' is present', function() {
    assert.ok(!isPresent('\r\t\n '));
  });

  it('should think that [\'a\', \'b\'] is present', function() {
    assert.ok(isPresent(['a', 'b']));
  });

  it('should think that { a: \'b\' } is present', function() {
    assert.ok(isPresent({ a: 'b' }));
  });

  it('should think that \'string\' is present', function() {
    assert.ok(isPresent('string'));
  });

  it('should think that 42 is present', function() {
    assert.ok(isPresent(42));
  });

  it('should think that a function with arguments is present', function() {
    assert.ok(isPresent(function(a,b){}));
  });
});
