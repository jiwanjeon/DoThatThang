import { CampCard } from '../../components';
import styled from 'styled-components';

import fonts from '../../styles/fonts';
import { ICamp } from '../../types/type';

interface IProps {
  title: string;
  camps: ICamp[];
  isHeadField?: boolean;
}
const CampSection = ({ title, camps, isHeadField = false }: IProps) => {
  return (
    <Container>
      <div className="section-title">{title}</div>
      <div className="camp-cards">
        {camps.map((camp, index) => (
          <CampCard key={index} camp={camp} isHeadField={isHeadField} />
        ))}
      </div>
    </Container>
  );
};

export default CampSection;

const Container = styled.section`
  padding: 0px 16px;

  .section-title {
    ${fonts.H1};
    padding-bottom: 8px;
  }

  .camp-cards {
    a {
      flex: 1;
    }
    @media (min-width: 680px) {
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }
  }
`;
