import About from "./components/About";
import Home from "./components/Home";
import "./css/main.css";

function App() {
  return (
    <>
      <main className="flex mx-[10rem] my-[2rem] flex-col space-y-[2rem]">
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
      </main>
    </>
  );
}

export default App;
