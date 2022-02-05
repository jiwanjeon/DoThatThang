import styled from 'styled-components';

import { ICommunity } from '../../types/type';
import { CommunityCard } from '../../components';
import fonts from '../../styles/fonts';

interface IProps {
  title: string;
  communities: ICommunity[];
}

const CommunitySection = ({ title, communities }: IProps) => {
  return (
    <Container>
      <div className="section-title">{title}</div>
      <div className="community-cards">
        {communities.map((community, index) => (
          <CommunityCard key={index} community={community} />
        ))}
      </div>
    </Container>
  );
};

export default CommunitySection;

const Container = styled.div`
  padding: 0px 16px;

  .section-title {
    ${fonts.H1};
    padding-bottom: 16px;
  }
  .community-cards {
    display: flex;
    gap: 20px;
    a {
      flex: 1;
    }
  }
`;
