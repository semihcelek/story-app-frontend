const StoryCard = ({ title, content, authorId }) => {
  return (
    <div className="Card">
      <h2>{title}</h2>
      <p>{content}</p>
      <h4>{authorId}</h4>
    </div>
  );
};

export default StoryCard;
