//imports

import { actionCreators as userActions } from "redux/modules/user";

// actions

const SET_FEED = "SET_FEED";

// action  creators

function setFeed(feed) {
  // feed는 API에서 불러온 images의 array이다.
  return {
    type: SET_FEED,
    feed
  };
}

// api actions

function getFeed() {
  // getState은 redux-thunk에서 온것이다.
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch("/images/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
          // bullshit token에 대해서 강제로 로그아웃을 진행하게 하는 부분이다.
          // 새로고침을 하면 Feed Component가 마운트 되고 이떄 getFeed를 불러온다.
          // 이때 unauthorized이라면 로그아웃이 된다!
        }
        return response.json();
      })
      .then(json => dispatch(setFeed(json)));
  };
}

// initial state

const initialState = {};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    default:
      return state;
  }
}

// reducer functions

function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

// exports

const actionCreators = {
  getFeed
};

export { actionCreators };

// default reducer export

export default reducer;
