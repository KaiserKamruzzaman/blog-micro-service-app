const CommentList = ({ comments }) => {
  let count = 0;
  const renderComments = Object.values(comments).map((comment) => {
    count++;
    let content;
    if (comment.status == "approved") {
      content = comment.content;
    }
    if (comment.status == "pending") {
      content = "This comment is awaiting moderation..";
    }
    if (comment.status == "rejected") {
      content = "This comment has been rejected..";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return (
    <div className="">
      <ul className="list-disc">{renderComments}</ul>
    </div>
  );
};

export default CommentList;
