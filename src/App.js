import { Board } from "./components/Board";

const App = () => (
  <>
    <header></header>
    <main>
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-rose-50 to-rose-200">
        <h1 className="mb-3 font-bold text-2xl">
          Tic <span className="text-rose-500">Tac</span> Toe
        </h1>
        <Board />
      </section>
    </main>
    <footer></footer>
  </>
);

export default App;
