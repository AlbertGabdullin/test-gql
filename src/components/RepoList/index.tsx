import React from 'react';
import { Heading, Link } from '@primer/react';
import styled from 'styled-components';
import { GITHUB_URL } from '../../consts';

const RepoListContainer = styled.div`
  max-width: calc(100% - 300px);
  padding-left: 50px;
`;

const Description = styled.p`
  display: block;
`;

export interface ListItemInterface {
  name: string;
  description?: string | null;
}

type Props = {
  list?: Array<ListItemInterface | null> | null;
  login: string;
};

const RepoList = ({ list, login }: Props) => {
  return (
    <RepoListContainer>
      <Heading as="h1">Repositories: </Heading>
      <ul>
        {list &&
          list
            .filter((item) => item !== null)
            .map((item, index) => (
              <li className="col-12 d-flex flex-column width-full py-4 border-bottom color-border-muted">
                <Heading as="h3">
                  <Link href={`${GITHUB_URL}/${login}/${item?.name}`} target="_blank">
                    {item?.name}
                  </Link>
                </Heading>
                <Description className="col-9 d-block color-fg-muted mb-2 pr-4">
                  {item?.description}
                </Description>
              </li>
            ))}
      </ul>
    </RepoListContainer>
  );
};

export default RepoList;
