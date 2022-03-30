import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height:100%;
  margin: 0 auto;
//   background-color:#313e4c;

`;

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};