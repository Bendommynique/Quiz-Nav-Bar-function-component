
import './App.css';
import QuizNavBar from './QuizNavBar/QuizNavBar';
import { questions } from "./dataModel/dataModel";

function App() {
  return <QuizNavBar questions={questions} />;
}

export default App;
