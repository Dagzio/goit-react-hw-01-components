import FriendListItem from "../FriendListItem/FriendListItem";
import List from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return <List className="friend-list">
    {friends.map(friend => {
      return <FriendListItem key={friend.id} friend={friend} />
    })}
  </List>
};

export default FriendList;