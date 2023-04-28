
import FriendListItem from "../FriendListItem/FriendListItem";


const FriendList = ( {friends} ) => {
  return <ul className="friend-list">
    {friends.map(friend => {
      return <FriendListItem />
    })}
  </ul>
};



export default FriendList;