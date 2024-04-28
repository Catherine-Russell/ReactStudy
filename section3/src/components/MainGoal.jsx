import Section from "./Section";

export function MainGoal() {
  const dynamicValues = ["goals", "aims", "intentions"];

  const i = Math.floor(Math.random() * 4);
  const synonym = dynamicValues[i];
  return (
    <Section title="Goals">
      <h3> My main {synonym}</h3>
      <ul>
        <li>Complete React Complete Guide</li>
        <li>World Domination</li>
      </ul>
    </Section>
  );
}
