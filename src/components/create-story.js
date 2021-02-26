import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../services/useForm";
import { newStory } from "../reducers/story-reducer";

const CreateStory = () => {
  const [inputValues, handleChange, setInputValues] = useForm({
    title: "",
    content: "",
  });
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(newStory(inputValues, user));
    console.log("state dispatched");
    setInputValues({ title: "", content: "" });
    // try {
    //   const send = await createStory(inputValues, user);
    //   setInputValues({ title: "", content: "" });
    //   console.log(send);
    // } catch (err) {
    //   alert(err);
    // }
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
