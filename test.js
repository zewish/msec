require('chai').should();

describe('msec.js', () => {
  const msec = require('./msec.js');

  it('returns 0 when an invalid string is given', () => {
    msec('dfgdrrfdsf').should.equal(0);
  });

  it('returns a number when parseInt succeeds', () => {
    msec('23434dfsdf').should.equal(23434);
  });

  it('parses days', () => {
    msec('1d 3d 5d').should.equal(7776e5)
  });

  it('parses hours', () => {
    msec('10h 5h 3h').should.equal(648e5);
  });

  it('parses minutes', () => {
    msec('7m 1m 99m').should.equal(642e4);
  });

  it('parses seconds', () => {
    msec('4s 56s 42s').should.equal(102e3);
  });

  it('parses mixed', () => {
    msec('4h 56m 42s 5h 3h 1s 3m').should.equal(46783e3);
  });

  it('parses string given in UPPERCASE', () => {
    msec('4S 12H 2M').should.equal(43324e3);
  });
});
