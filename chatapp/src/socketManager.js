import io from "socket.io-client"

class SocketManager {
  #instance

  constructor() {
    this.#instance = io()
  }

  getInstance() {
    return this.#instance
  }
}

export default new SocketManager()