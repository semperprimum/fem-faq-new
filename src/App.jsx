import "./App.scss";
import { Attribution, Container, Heading, QuestionList } from "./components";

export default function App() {
  return (
    <>
      <main>
        <Container>
          <Heading>FAQs</Heading>
          <QuestionList />
        </Container>
      </main>
      <footer>
        <Attribution />
      </footer>
    </>
  );
}
