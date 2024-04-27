import { TabButton } from "./TabButton";
import EXAMPLES from "./data";
import { useState } from "react";

export function InformationSection() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  const handleButtonClick = (selectedButton) => {
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
  };
  return (
    <>
      <menu>
        <TabButton onClick={() => handleButtonClick("components")}>
          components
        </TabButton>
        <TabButton onClick={() => handleButtonClick("jsx")}>jsx</TabButton>
        <TabButton onClick={() => handleButtonClick("props")}>props</TabButton>
        <TabButton onClick={() => handleButtonClick("state")}>state</TabButton>
      </menu>
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    </>
  );
}
