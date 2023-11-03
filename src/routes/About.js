import {
  Description,
  StyledAbout,
  Title,
  Emoji,
} from "../components/styles/About.styled";
import { Container } from "../components/styles/Container.styled";

function About() {
  return (
    <Container>
      <StyledAbout>
        <Title>About😺</Title>
        <Description>
          This project was created by me (Tonu Cristian) for the Internship. The
          purpose of this project is to highlight some of my skills. Hope we
          work together one day!🤝
        </Description>
        <Emoji>🐈</Emoji>
      </StyledAbout>
    </Container>
  );
}

export default About;
