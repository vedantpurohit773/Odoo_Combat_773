import styled from 'styled-components';

const HeroWrapper = styled.section`
  background-color: ${props => props.theme.backgroundColor || 'white'};
  color: ${props => props.theme.textColor || 'black'};
  padding: 2rem;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <h1>Welcome to our site!</h1>
      <p>We offer amazing products for your needs.</p>
    </HeroWrapper>
  );
};

export default Hero;
