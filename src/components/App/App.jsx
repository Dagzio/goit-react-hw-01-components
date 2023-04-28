import { Container } from './App.styled';

import Profile from "../Profile/Profile"
import user from 'components/Profile/user.json';

import Statistics from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json'

import FriendList from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';


export const App = () => {
  return (
    <Container>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
      <Statistics
        title="Upload Files"
        stats={data} />
      

      <FriendList friends={friends} />;
    </Container>


  );
};
