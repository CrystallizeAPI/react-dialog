import React from "react";
import faker from "faker";

import { Wrapper, showAlert, showConfirm } from "./component";

function showAlerts(howMany) {
  for (let i = 0; i < howMany; i++) {
    showAlert({
      title: faker.hacker.noun(),
      body: faker.hacker.phrase()
    });
  }
}

async function showConfirmAndInspectFeedback() {
  const result = await showConfirm({
    title: "Do you agree?",
    body: faker.hacker.phrase()
  });
  console.log(result);
}

export default () => (
  <div>
    <main style={{ maxWidth: "600px", margin: "0 auto", padding: "5vh 5vw" }}>
      <h2>Alert</h2>
      <button onClick={() => showAlerts(1)}>Show 1 alert</button>
      <button onClick={() => showAlerts(5)}>Show 5 alerts</button>

      <h2>Confirm</h2>
      <button onClick={() => showConfirmAndInspectFeedback()}>
        Show 1 confirm and inspect feedback
      </button>
    </main>
    <Wrapper />
  </div>
);
