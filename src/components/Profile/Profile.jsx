import PropTypes from 'prop-types'
import {
    ProfileCard, Description,
    Img, UserName,
    UserTag, Location,
    StatsList, StatsListItem,
    StatsName, StatsValue } from './Profile.styled';

export const Profile = ({ username, stats, tag, avatar, location}) => {
    return <ProfileCard>
        <Description>
            <Img
                src={avatar}
                alt={tag}
                
            />
            <UserName>{username}</UserName>
            <UserTag>@{tag}</UserTag>
            <Location>{location}</Location>
        </Description>

        <StatsList>
            <StatsListItem>
                <StatsName>Followers</StatsName>
                <StatsValue>{stats.followers}</StatsValue>
            </StatsListItem>
            <StatsListItem>
                <StatsName>Views</StatsName>
                <StatsValue>{stats.views}</StatsValue>
            </StatsListItem>
            <StatsListItem>
                <StatsName>Likes</StatsName>
                <StatsValue>{stats.likes}</StatsValue>
            </StatsListItem>
        </StatsList>
    </ProfileCard>

};

Profile.propTypes = {
    username: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    }),
    tag: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string
}

export default Profile;