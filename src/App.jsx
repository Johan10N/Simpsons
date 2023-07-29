import ListaCaracteres from "./components/ListaCaracteres.jsx";

function App() {
  return (
    <div className="text-white" style={{ fontFamily: "Robot, Simpsonfont", fontStyle: "italic", color: "#f8db27", }} >
      <h1 className="text-center display-1 py-4"><b>The Simpsons</b></h1>
      <ListaCaracteres />
    </div>
  );
}
export default App;
