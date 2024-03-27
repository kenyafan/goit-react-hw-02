import FriendListItem from "../FriendListItem/FriendListItem";
import c from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={c.friendList}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export default FriendList;
