import "./App.css";
import Items from "./components/items";
import Layout from "./components/layout";
function App() {
  return (
    <Layout>
      <div className="App text-blue-400">
        <Items />
      </div>
    </Layout>
  );
}
export default App;
