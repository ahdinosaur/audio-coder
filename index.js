var fs = require('fs')
var protobuf = require('protocol-buffers')
var ndarray = require('ndarray')

var messages = protobuf(
  fs.readFileSync(__dirname + '/audio.proto')
)

module.exports = {
  encode: encode,
  decode: decode
}

function encode (audio) {
  return messages.Audio.encode(audio)
}

function decode (buf) {
  var obj = messages.Audio.decode(buf)
  return ndarray(obj.data, obj.shape, obj.stride)
}
