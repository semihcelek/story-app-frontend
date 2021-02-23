import React, { useContext } from "react";
import { useForm } from "../services/useForm";
import { createStory } from "../services/story-service";
import { UserContext } from "../services/userContext";

const CreateStory = () => {
  const [user] = useContext(UserContext);
  const [inputValues, handleChange, setInputValues] = useForm({
    title: "",
    content: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const send = await createStory(inputValues, user);
      setInputValues({ title: "", content: "" });
      console.log(send);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="title"
          value={inputValues.title}
          onChange={handleChange}
        />
        <input
          name="content"
          placeholder="content"
          value={inputValues.content}
          onChange={handleChange}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};
export default CreateStory;
