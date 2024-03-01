import CardEducation from "./components/CardEducation";
import CardExperience from "./components/CardExperience";
import CardPersonalia from "./components/CardPersonalia";

export default function App() {
  return (
    <div id="page">
      <CardPersonalia />
      <CardExperience />
      <CardEducation />
    </div>
  );
}
