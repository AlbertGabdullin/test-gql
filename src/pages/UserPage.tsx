import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import ContainerWrapper from '../components/Container';
import UserInfo from '../components/UserInfo';
import { useUserQuery } from '../generated/graphql';
import RepoList from '../components/RepoList';


const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 0;
`;

const UserPage = () => {
  const { id } = useParams();

  const { data, loading } = useUserQuery({
    variables: {
      login: id || '',
      repoCount: 20,
    },
    skip: !id,
  });

  if (!data || !data.user) return <div>Нет данных о пользователе</div>;

  const { user } = data;

  return (
    <ContainerWrapper>
      {loading ? (
        'Loading...'
      ) : (
        <Wrapper>
          <UserInfo
            avatarUrl={user?.avatarUrl}
            login={user.login}
            name={user?.name}
            twitter={user?.twitterUsername}
            company={user?.company}
            followers={user?.followers.totalCount}
            following={user?.following.totalCount}
            email={user?.email}
          />
          <RepoList list={user?.repositories.nodes} login={user?.login} />
        </Wrapper>
      )}
    </ContainerWrapper>
  );
};

export default UserPage;
