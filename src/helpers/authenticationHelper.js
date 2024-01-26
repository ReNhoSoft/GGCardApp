export function getToken() {
    return localStorage.getItem("token");
}

export function setToken(token, expiration) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expiration);
}

export function getSession() {
    return {
        token: localStorage.getItem("token"),
        expiration: localStorage.getItem("expiration"),
        isValid() {
            return this.token && this.expiration && (Math.floor(Date.now()/1000) < localStorage.getItem("expiration"));
        }
    }
}