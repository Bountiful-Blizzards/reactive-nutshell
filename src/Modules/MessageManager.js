const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/messages/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/messages`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/messages/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(newMessage) {
    return fetch(`${remoteURL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessage)
    }).then(data => data.json())
  },
  update(editedMessage) {                                       // this is a put method
    return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedMessage)
    }).then(data => data.json());
  }
}