import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateStory from "../components/create-story";
import StoryCard from "../components/story-card";
import { fetchAllStories } from "../reducers/story-reducer";

const StoryPage = () => {
  const { user, stories } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStories());
  }, [dispatch]);

  if (user.token) {
    return (
      <div>
        <div>
          <CreateStory />
        </div>
        <div>
          {stories.map((item) => (
            <StoryCard
              key={item.id}
              title={item.title}
              content={item.content}
              authorId={item.authorId}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>You must login to see user</div>
      </div>
    );
  }
};
export default StoryPage;
