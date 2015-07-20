var ndarray = require('ndarray')
var test = require('tape')

var coder = require('./')

test('code audio', function (t) {
  var data = new Float32Array(
    -0, 0,
    -1, 1,
    -0.5, 0.5,
    -0.25, 0.25
  )
  var audio = ndarray(data, [data.length / 2, 2])
  var encoded = coder.encode(audio)
  var decoded = coder.decode(encoded)
  t.deepEqual(decoded, audio)
  t.end()
})
