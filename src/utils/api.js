//const baseUrl = "http://localhost:3001";

const baseUrl = (process.env.NODE_ENV === "production"
  ? "https://api.wtwr.polonisgroup.com"
  : "http://localhost:3001");

const headers = {
  "Content-Type": "application/json",
};

export const handleResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function request(baseUrl, options) {
  return fetch(baseUrl, options).then(handleResponse);
}

export function getItemsList() {
  return fetch(`${baseUrl}/items`, {
    headers: headers,
  }).then(handleResponse);
}

export function addItem({ name, weather, imageUrl }, jwt) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },

    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(handleResponse);
}

export function deleteItems(_id, jwt) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  }).then(handleResponse);
}
