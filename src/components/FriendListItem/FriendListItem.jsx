import PropTypes from 'prop-types'


const FriendListItem = ({ avatar, name, isOnline, id }) => {
   return <li className="item" key={id}>
        <span className="status" type={isOnline}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
};


FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.boolean
    }))
};


export default FriendListItem;