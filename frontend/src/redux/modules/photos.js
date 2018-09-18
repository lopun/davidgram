//imports

import { actionCreators as userActions } from "redux/modules/user";

// actions

const SET_FEED = "SET_FEED";
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";
const ADD_COMMENT = "ADD_COMMENT";

// action  creators

function setFeed(feed) {
  // feed는 API에서 불러온 images의 array이다.
  return {
    type: SET_FEED,
    feed
  };
}

function doLikePhoto(photoId) {
  return {
    type: LIKE_PHOTO,
    photoId
  };
}

function doUnlikePhoto(photoId) {
  return {
    type: UNLIKE_PHOTO,
    photoId
  };
}

function addComment(photoId, comment) {
  return {
    type: ADD_COMMENT,
    photoId,
    comment
  };
}

// api actions

function getFeed() {
  // getState은 redux-thunk에서 온것이다.

  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch("http://localhost:16499/images/", {
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
      .then(json => {
        dispatch(setFeed(json));
      });
  };
}

function likePhoto(photoId) {
  return (dispatch, getState) => {
    // 먼저 하트 색깔으로 바꾼 후
    dispatch(doLikePhoto(photoId));
    // 서버로 가서 Like를 해준다.
    const {
      user: { token }
    } = getState();
    fetch(`/images/${photoId}/likes/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logout());
        // 토큰이 정상이 아니면 like status를 다시 false로 돌리면서 로그아웃시킨다.
      } else if (!response.ok) {
        dispatch(doUnlikePhoto(photoId));
      }
    });
  };
}

function unlikePhoto(photoId) {
  return (dispatch, getState) => {
    dispatch(doUnlikePhoto(photoId));
    const {
      user: { token }
    } = getState();
    fetch(`/images/${photoId}/unlikes/`, {
      method: "DELETE",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logout());
        // 토큰이 정상이 아니면 like status를 다시 false로 돌리면서 로그아웃시킨다.
      } else if (!response.ok) {
        dispatch(doLikePhoto(photoId));
      }
    });
  };
}

function commentPhoto(photoId, message) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`/images/${photoId}/comments/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => {
        if (json.message) {
          dispatch(addComment(photoId, json));
        }
      });
  };
}

// initial state

const initialState = {};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    case LIKE_PHOTO:
      return applyLikePhoto(state, action);
    case UNLIKE_PHOTO:
      return applyUnlikePhoto(state, action);
    case ADD_COMMENT:
      return applyAddComment(state, action);
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

function applyLikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      // 라이크 갯수 증가, 라이크 True처리. 서버까지 갔다오면 너무 느리다.
      return { ...photo, is_liked: true, like_count: photo.like_count + 1 };
    }
    return photo;
  });
  return { ...state, feed: updatedFeed };
}

function applyUnlikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      // 라이크 갯수 증가, 라이크 True처리. 서버까지 갔다오면 너무 느리다.
      return { ...photo, is_liked: false, like_count: photo.like_count - 1 };
    }
    return photo;
  });
  return { ...state, feed: updatedFeed };
}

function applyAddComment(state, action) {
  const { photoId, comment } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      // 라이크 갯수 증가, 라이크 True처리. 서버까지 갔다오면 너무 느리다.
      return { ...photo, comments: [...photo.comments, comment] };
    }
    return photo;
  });
  return { ...state, feed: updatedFeed };
}

// exports

const actionCreators = {
  getFeed,
  likePhoto,
  unlikePhoto,
  commentPhoto
};

export { actionCreators };

// default reducer export

export default reducer;
