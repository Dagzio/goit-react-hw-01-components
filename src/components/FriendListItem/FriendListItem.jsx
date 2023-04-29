import PropTypes from 'prop-types'
import { ListItem, Img, Status, UserName } from './FriendListItem.styled';
import { VscCircleLargeFilled } from "react-icons/vsc";

const FriendListItem = ({friend}) => {
   return <ListItem>
       <Status online={friend.isOnline}><VscCircleLargeFilled/></Status>
        <Img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <UserName className="name">{friend.name}</UserName>
    </ListItem>
};


FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    }))
};


export default FriendListItem;