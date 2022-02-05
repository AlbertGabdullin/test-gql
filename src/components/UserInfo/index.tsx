import React from 'react';
import styled from 'styled-components';
import { Button, Heading, Link } from '@primer/react';
import { MailIcon, OrganizationIcon, PeopleIcon } from '@primer/octicons-react';
import { GITHUB_URL } from '../../consts';

const Wrapper = styled.div`
  width: 296px;
  flex-grow: 100;
`;

const NickName = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  display: block;
`;

const Name = styled.span`
  font-size: 26px;
  line-height: 1.25;
  display: block;
`;

const Avatar = styled.div`
  overflow: hidden;
  height: 296px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledHeading = styled(Heading)`
  padding-top: 16px;
  padding-bottom: 16px;
`;

const FollowButton = styled(Button)`
  width: 100%;
`;

const Followers = styled.div`
  display: flex;
  align-items: center;
`;

const FollowersLink = styled(Link)`
  display: flex;
  align-items: center;

  svg {
    padding-top: 2px;
  }

  .right {
    margin-left: 2px;
    display: block;
  }
`;

const Details = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const DetailItem = styled.li`
  &.bold {
    font-weight: bold;
  }

  .detail-icon {
    margin-right: 5px;
  }
`;

type UserInfoProps = {
  login: string;
  name?: string | null;
  avatarUrl: string;
  followers?: number;
  following?: number;
  email?: string;
  company?: string | null;
  twitter?: string | null;
};

const UserInfo = ({
  login,
  name,
  avatarUrl,
  followers,
  following,
  company,
  email,
  twitter,
}: UserInfoProps) => {
  return (
    <Wrapper>
      <Avatar>
        <img src={avatarUrl} alt="name" width={260} height={260} />
      </Avatar>
      <StyledHeading>
        <Name>{name}</Name>
        <NickName>{login}</NickName>
      </StyledHeading>

      <FollowButton className="mb-md-3" variant="medium">
        Follow
      </FollowButton>
      <Followers className="mb-3">
        <FollowersLink
          href={`${GITHUB_URL}/${login}?tab=followers`}
          className="Link--secondary no-underline no-wrap"
          target="_blank"
        >
          <PeopleIcon />
          <span className="text-bold color-fg-default right">
            {followers}&nbsp;
          </span>
          followers
        </FollowersLink>
        <span>&nbsp;·&nbsp;</span>
        <FollowersLink
          href={`${GITHUB_URL}/${login}?tab=following`}
          className="Link--secondary no-underline no-wrap"
          target="_blank"
        >
          <span className="text-bold color-fg-default right">
            {following}&nbsp;
          </span>
          following
        </FollowersLink>
      </Followers>
      <Details>
        <DetailItem className="bold">
          <OrganizationIcon className="detail-icon color-fg-muted" />
          <Link className="Link--primary" href={`${GITHUB_URL}/${company?.slice(1)}`}>{company}</Link>
        </DetailItem>
        <DetailItem>
          <MailIcon className="detail-icon color-fg-muted" />
          <Link className="Link--primary" href={`mailto:${email}`}>{email}</Link>
        </DetailItem>
      </Details>
    </Wrapper>
  );
};

export default UserInfo;
