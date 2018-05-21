// imports

// actions

// action creators

// API action

function facebookLogin(access_token) {
  return function(dispatch) {
    fetch("/users/login/facebook", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        access_token
      })
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  };
}

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") || false
};

const actionCreators = {
  facebookLogin
};

export { actionCreators };

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
export default reducer;
