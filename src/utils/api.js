class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
        this._authorization = options.headers.authorization;
    };

    _checkResponse(res) {return res.ok ? res.json() : Promise.reject}

    getInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkResponse)
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkResponse)
    }

    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.subtitle,
            })
        })
        .then(this._checkResponse);
    }

    setAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',  
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.image,
            })
        })
        .then(this._checkResponse);
    }

    addCards(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',  
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.link,
            })
        })
        .then(this._checkResponse);
    }

    addLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: `PUT`,
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkResponse);
    }

    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: `DELETE`,
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkResponse);
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: `DELETE`,
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkResponse);
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
    headers: {
      authorization: '0c57c3de-de42-467b-8dac-900fb3a946d3',
      'Content-Type': 'application/json'
    }
}); 

export default api;