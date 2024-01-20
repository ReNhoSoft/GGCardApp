export function getToken() {
    return localStorage.getItem("token");
}

export function setToken(value) {
    localStorage.setItem("token", value);
}