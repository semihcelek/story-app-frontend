import { useContext } from "react";
import CreateStory from "../components/create-story";
import StoryCard from "../components/story-card";
import { useFetch } from "../services/useFetch";
import { UserContext } from "../services/userContext";

const StoryPage = () => {
  const [user] = useContext(UserContext);
  const [{ data, loading }] = useFetch("/story/all/json");

  if (user) {
    return (
      <div>
        {loading ? (
          <div>...loading</div>
        ) : (
          data.map((item) => (
            <StoryCard
              key={item.id}
              title={item.title}
              content={item.content}
              authorId={item.authorId}
            />
          ))
        )}
        <div>
          <CreateStory />
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
