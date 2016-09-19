const sffcEncoder = require('sffc-encoder')
const util = require('util')

class Emitter {
  constructor(socket) {
    this.socket = socket
  }
  emit(frequency) {
    if (this.interval) {
      clearInterval(this.interval)
    }
    this.interval = setInterval(() => {
      const number = Math.floor(Math.random() * (10000000000))
      this.socket.emit('number', {
        timestamp: Date.now(),
        number,
        encoded_number: util.format(sffcEncoder.encode(number)),
      })
    }, 1000 / frequency)
  }
}
module.exports = Emitter
