import * as React from 'react';
import styled from 'styled-components';

interface ICamp {
  id?: number;
  type?: 'popular' | 'specialDiscount';
  dateStart?: string;
  thumbnail?: string;
  campName?: string;
  //인가 부트 캠프
  status?: '모집전' | '모집중' | '모집완료';
  //특가 할인 캠프
  category?: string;
  //커뮤니티
  tag?: '조회수 TOP' | '취업 고민';
}

// export default function Main(props: ICamp) {
//   return <div style={{ backgroundColor: 'red' }}>This is main</div>;
// }

export const Main: React.FC<ICamp> = ICamp => {
  return (
    <Wrapper>
      Hi there this is main page(check master branch update or not!!!)
    </Wrapper>
  );
};

const Wrapper = styled.div``;
