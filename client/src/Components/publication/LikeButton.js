import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likePost, unlikePost } from "../../js/actions/publication";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const LikeButton = ({ publication }) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const like = () => {
    dispatch(likePost(publication._id, user._id));
    setLiked(true);
  };

  const unlike = () => {
    dispatch(unlikePost(publication._id, user._id));
    setLiked(false);
  };

  useEffect(() => {
    if (publication.likers.includes(user._id)) setLiked(true);
    else setLiked(false);
  }, [user._id, publication.likers, liked]);

  return (
    <div className='like-container'>
      {user._id && liked === false && (
        <FavoriteBorderIcon onClick={() => like()} alt='like' />
      )}
      {user._id && liked && (
        <FavoriteBorderIcon onClick={() => unlike()} alt='unlike' />
      )}
    </div>
  );
};

export default LikeButton;
