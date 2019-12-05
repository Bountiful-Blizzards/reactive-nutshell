const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/articles/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/articles`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/articles/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(addNewArticle) {
    return fetch(`${remoteURL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addNewArticle)
    }).then(data => data.json())
  },
  update(editArticle) {                                       // this is a put method
    return fetch(`${remoteURL}/articles/${editArticle.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editArticle)
    }).then(data => data.json());
  }
}