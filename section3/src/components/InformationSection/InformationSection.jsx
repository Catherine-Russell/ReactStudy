import { TabButton } from "./TabButton";
import EXAMPLES from "./data";
import { useState } from "react";
import "../../index.css";
import Section from "../Section";

export function InformationSection() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleButtonClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };
  return (
    <Section title="React Core Concepts" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleButtonClick("components")}
        >
          components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleButtonClick("jsx")}
        >
          jsx
        </TabButton>

        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleButtonClick("props")}
        >
          props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleButtonClick("state")}
        >
          state
        </TabButton>
      </menu>
      {!selectedTopic ? (
        <p>Please select a topic</p>
      ) : (
        <div id="examples">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
