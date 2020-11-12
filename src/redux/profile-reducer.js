const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  postMessages: [
    { id: "1", message: "Hey, how are you doing?", likes: "15" },
    { id: "2", message: "It's my first post", likes: "20" },
    { id: "3", message: "It's my second post", likes: "10" },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: "4",
        message: state.newPostText,
        likes: "0",
      };
      return {
        ...state,
        postMessages: [...state.postMessages, newPost],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const addPostCreateAction = () => ({ type: ADD_POST });
export const updateNewPostTextCreateAction = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;
