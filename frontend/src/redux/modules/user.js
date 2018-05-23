// imports

// actions

const SAVE_TOKEN = "SAVE_TOKEN";

// action creators

// token saving하는 action
function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token
  };
}

// API action

// proxy part에서 localhost:8000을 작업해놨기 때문에
// facebook Login을 하면 localhost:3000/users/login/facebook/이 없으므로
// proxy에 해당하는 localhost:8000/users/login/facebook/으로 가게 된다.
function facebookLogin(access_token) {
  return function(dispatch) {
    fetch("/users/login/facebook/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        access_token
        // Body에 넣어서 보내면 토큰을 받아서 유저 authentication을 할 수 있다.
        //access_token : access_token ES6 grammer
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log(err));
  };
}

function usernameLogin(username, password) {
  return function(dispatch) {
    fetch("/rest-auth/login/", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log(err));
  };
}

function createAccount(username, password, email, name) {
  return function(dispatch) {
    fetch("/rest-auth/registration/", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password1: password,
        password2: password,
        email,
        name
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      });
  };
}

// Initial State
const initialState = {
  // isLoggedIn: localStorage.getItem("jwt") || false 이부분이 실행되면 App의 presenter에서 proptypes가 bool인지 체크하는데 여기서 에러가 뜸!
  isLoggedIn: localStorage.getItem("jwt") ? true : false
};

const actionCreators = {
  facebookLogin,
  usernameLogin,
  createAccount
};

export { actionCreators };

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    // saveToken이 dispatch되면 applySetToken이 실행됨으로써 isLoggedin : true => Feedpage로 rerouting!
    default:
      return state;
  }
}

// reducer functions

function applySetToken(state, action) {
  const { token } = action;
  // token은 saveToken에서 json.token을 받아서 localStorage에 저장해준다.
  localStorage.setItem("jwt", token);
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

// export reducer by default

export default reducer;
