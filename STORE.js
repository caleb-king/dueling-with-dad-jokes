let menuExpanded = false;
let winner = null;
let error = null;

const setError = function (err) {
  this.error = err;
};

export default {
  menuExpanded,
  winner,
  error,
  setError
};