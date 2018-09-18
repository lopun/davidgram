// imports
import axios from "../../axios-auth";
// actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const SET_USER_LIST = "SET_USER_LIST";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_IMAGE_LIST = "SET_IMAGE_LIST";
const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";
const SET_USERNAME = "SET_USERNAME";
const SET_PROFILE = "SET_PROFILE";
const SET_SIMPLE_PROFILE = "SET_SIMPLE_PROFILE";

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

function setImageList(imageList) {
  return {
    type: SET_IMAGE_LIST,
    imageList
  };
}

function setNotifications(notificationList) {
  return {
    type: SET_NOTIFICATIONS,
    notificationList
  };
}

function setUsername(username) {
  return {
    type: SET_USERNAME,
    username
  };
}

function setProfile(loggedInUser) {
  return {
    type: SET_PROFILE,
    loggedInUser
  };
}

function setSimpleProfile(simpleUser) {
  return {
    type: SET_SIMPLE_PROFILE,
    simpleUser
  };
}

// API action

// proxy part에서 localhost:8000을 작업해놨기 때문에
// facebook Login을 하면 localhost:3000/users/login/facebook/이 없으므로
// proxy에 해당하는 localhost:8000/users/login/facebook/으로 가게 된다.
function facebookLogin(access_token) {
  return function(dispatch) {
    axios({
      method: "post",
      url: "/users/login/facebook/",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        body: JSON.stringify({
          access_token
        })
      }
    })
      .then(response => {
        if (response.data.token) {
          dispatch(saveToken(response.data.token));
        }
      })
      .catch(err => console.log(err));
  };
}

function usernameLogin(username, password) {
  return function(dispatch) {
    axios({
      method: "post",
      url: "/rest-auth/login/",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        body: JSON.stringify({
          username,
          password
        })
      }
    })
      .then(response => {
        if (response.data.token) {
          dispatch(saveToken(response.data.token));
          dispatch(setUsername(username));
        }
      })
      .catch(err => console.log(err));
  };
}

function createAccount(username, password, email, name) {
  return function(dispatch) {
    axios({
      method: "post",
      url: "/rest-auth/registration/",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        username,
        password1: password,
        password2: password,
        email,
        name
      })
    })
      .then(response => {
        if (response.data.token) {
          dispatch(saveToken(response.data.token));
        }
        if (response.data.user) {
          dispatch(setProfile(response.data.user));
        }
      })
      .catch(err => console.log(err));
  };
}

function getPhotoLikes(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    axios({
      method: "get",
      url: `/images/${photoId}/likes/`,
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
      })
      .catch(err => console.log(err));
  };
}

function followUser(userId) {
  return (dispatch, getState) => {
    dispatch(setfollowUser(userId));
    const {
      user: { token }
    } = getState();
    axios({
      method: "post",
      url: `/users/${userId}/follow/`,
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
    axios({
      method: "post",
      url: `/users/${userId}/unfollow/`,
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
    axios({
      method: "get",
      url: "/users/explore/",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(logout());
      }
      dispatch(setUserList(response.data));
    });
  };
}

function searchByTerm(searchTerm) {
  return async (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    const userList = await searchUsers(token, searchTerm);
    const imageList = await searchImages(token, searchTerm);
    if (userList === 401 || imageList === 401) {
      dispatch(logout());
    }
    dispatch(setUserList(userList));
    dispatch(setImageList(imageList));
  };
}

function searchUsers(token, searchTerm) {
  return axios({
    method: "get",
    url: `/users/search/?username=${searchTerm}`,
    headers: {
      Authorization: `JWT ${token}`
    }
  }).then(response => {
    if (response.status === 401) {
      return 401;
    }
    return response.data;
  });
}

function searchImages(token, searchTerm) {
  return axios({
    method: "get",
    url: `/images/search/?hashtags=${searchTerm}`,
    headers: {
      Authorization: `JWT ${token}`
    }
  }).then(response => {
    if (response.status === 401) {
      return 401;
    }
    return response.data;
  });
}

function getNotifications() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    axios({
      method: "get",
      url: "/notifications/",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        dispatch(setNotifications(response.data));
        return;
      })
      .catch(err => console.log(err));
  };
}

function getProfile() {
  return (dispatch, getState) => {
    const {
      user: { token, username }
    } = getState();

    axios({
      method: "get",
      url: `/users/${username}/`,
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        dispatch(setProfile(response.data));
        return;
      })
      .catch(err => console.log(err));
  };
}

function getSimpleProfile() {
  return (dispatch, getState) => {
    const {
      user: { token, username }
    } = getState();

    axios({
      method: "get",
      url: `/users/${username}/simple/`,
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        dispatch(setSimpleProfile(response.data));
      })
      .catch(err => console.log(err));
  };
}

function setPassword(current_password, new_password) {
  return (dispatch, getState) => {
    const {
      user: { token, username }
    } = getState();

    axios({
      method: "put",
      url: `/users/${username}/password/`,
      headers: {
        "Content-type": "application/json",
        Authorization: `JWT ${token}`
      },
      data: JSON.stringify({
        current_password,
        new_password
      })
    });
  };
}

// Initial State
const initialState = {
  // isLoggedIn: localStorage.getItem("jwt") || false 이부분이 실행되면 App의 presenter에서 proptypes가 bool인지 체크하는데 여기서 에러가 뜸!
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt"),
  username: localStorage.getItem("username")
};

const actionCreators = {
  facebookLogin,
  usernameLogin,
  createAccount,
  logout,
  getPhotoLikes,
  followUser,
  unfollowUser,
  getExplore,
  searchByTerm,
  getNotifications,
  getProfile,
  getSimpleProfile,
  setUsername,
  setPassword
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
    case SET_IMAGE_LIST:
      return applySetImageList(state, action);
    case SET_NOTIFICATIONS:
      return applySetNotifications(state, action);
    case SET_USERNAME:
      return applySetUsername(state, action);
    case SET_PROFILE:
      return applySetProfile(state, action);
    case SET_SIMPLE_PROFILE:
      return applySetSimpleProfile(state, action);
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

function applySetImageList(state, action) {
  const { imageList } = action;
  return {
    ...state,
    imageList
  };
}

function applySetNotifications(state, action) {
  const { notificationList } = action;
  return {
    ...state,
    notificationList
  };
}

function applySetUsername(state, action) {
  const { username } = action;
  localStorage.setItem("username", username);
  return {
    ...state,
    username
  };
}

function applySetProfile(state, action) {
  const { loggedInUser } = action;
  return {
    ...state,
    loggedInUser
  };
}

function applySetSimpleProfile(state, action) {
  const { simpleUser } = action;
  return {
    ...state,
    simpleUser
  };
}

// export

export { actionCreators };

// export reducer by default

export default reducer;
