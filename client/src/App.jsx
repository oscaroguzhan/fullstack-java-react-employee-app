import AddEmployee from "./components/AddEmployee";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col gap-16">
      <Header />
      <AddEmployee />
    </div>
  );
}
