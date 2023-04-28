import PropTypes from 'prop-types'


const FriendListItem = ({ friends}) => {
    return friends.map(({avatar, name, isOnline, id}) => {
        return <li class="item" key={id}>
            <span class="status" type={isOnline}></span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    });
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.boolean.isRequired,
    }))
};


export default FriendListItem;