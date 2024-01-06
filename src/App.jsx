import "./App.scss";
import { Container, Heading, QuestionList } from "./components";

export default function App() {
  return (
    <>
      <Container>
        <Heading>FAQs</Heading>
        <QuestionList />
      </Container>
    </>
  );
}
