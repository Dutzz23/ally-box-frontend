import '../assets/css/App.css';
import PageLayout from "../components/PageLayout";
import Test from "../components/Test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageLayout />
          <Test />
      </header>
    </div>
  );
}

export default App;
