function setStorage(items) {
  return localStorage.setItem("Items", JSON.stringify(items));
}

function getStorage() {
  return JSON.parse(localStorage.getItem("Items"));
}

export { setStorage, getStorage };
