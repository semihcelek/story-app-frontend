import { createStory, fetchAll } from "../services/story-service";

const storyReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_STORIES":
      return action.stories;

    case "NEW_STORY":
      return [...state, action.stories];

    default:
      return state;
  }
};

export const fetchAllStories = () => {
  return async (dispatch) => {
    const data = await fetchAll();
    console.log(data);
    dispatch({
      type: "FETCH_ALL_STORIES",
      stories: data,
    });
  };
};

export const newStory = ({ title, content }, user) => {
  return async (dispatch) => {
    const response = await createStory({ title, content }, user);
    console.log(response);
    dispatch({
      type: "NEW_STORY",
      stories: response,
    });
  };
};

export default storyReducer;
