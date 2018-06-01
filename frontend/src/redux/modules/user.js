// imports

// actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const SET_USER_LIST = "SET_USER_LIST";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";

// action creators

// token saving하는 action
function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

function setUserList(userList) {
  return {
    type: SET_USER_LIST,
    userList
  };
}

function setfollowUser(userId) {
  return {
    type: FOLLOW_USER,
    userId
  };
}

function setunfollowUser(userId) {
  return {
    type: UNFOLLOW_USER,
    userId
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
      method: "POST",
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
      method: "POST",
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

function getPhotoLikes(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`/images/${photoId}/likes/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => {
        dispatch(setUserList(json));
      });
  };
}

function followUser(userId) {
  return (dispatch, getState) => {
    dispatch(setfollowUser(userId));
    const {
      user: { token }
    } = getState();
    fetch(`/users/${userId}/follow/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(logout());
      } else if (!response.ok) {
        dispatch(setunfollowUser(userId));
      }
    });
  };
}

function unfollowUser(userId) {
  return (dispatch, getState) => {
    dispatch(setunfollowUser(userId));
    const {
      user: { token }
    } = getState();
    fetch(`/users/${userId}/unfollow/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(logout());
      } else if (!response.ok) {
        dispatch(setfollowUser(userId));
      }
    });
  };
}

function getExplore() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`/users/explore/`, {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        console.log(response);
        return response.json();
      })
      .then(json => dispatch(setUserList(json)));
  };
}

// Initial State
const initialState = {
  // isLoggedIn: localStorage.getItem("jwt") || false 이부분이 실행되면 App의 presenter에서 proptypes가 bool인지 체크하는데 여기서 에러가 뜸!
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt")
};

const actionCreators = {
  facebookLogin,
  usernameLogin,
  createAccount,
  logout,
  getPhotoLikes,
  followUser,
  unfollowUser,
  getExplore
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    // saveToken이 dispatch되면 applySetToken이 실행됨으로써 isLoggedin : true => Feedpage로 rerouting!
    case LOGOUT:
      return applyLogout(state, action);
    case SET_USER_LIST:
      return applySetUserList(state, action);
    case FOLLOW_USER:
      return applyFollowUser(state, action);
    case UNFOLLOW_USER:
      return applyUnfollowUser(state, action);
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

function applyLogout(state, action) {
  localStorage.removeItem("jwt");
  return {
    isLoggedin: false
  };
}

function applySetUserList(state, action) {
  const { userList } = action;
  return {
    ...state,
    userList
  };
}

function applyFollowUser(state, action) {
  const { userId } = action;
  const { userList } = state;
  const updatedUserList = userList.map(user => {
    if (user.id === userId) {
      return { ...user, following: true };
    }
    return user;
  });
  return { ...state, userList: updatedUserList };
}

function applyUnfollowUser(state, action) {
  const { userId } = action;
  const { userList } = state;
  const updatedUserList = userList.map(user => {
    if (user.id === userId) {
      return { ...user, following: false };
    }
    return user;
  });
  return { ...state, userList: updatedUserList };
}

// export

export { actionCreators };

// export reducer by default

export default reducer;
