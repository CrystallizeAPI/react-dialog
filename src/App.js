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
  const result = await showConfirm("Gimmi something");
  console.log(result);
}

export default () => (
  <div>
    <main>
      <button onClick={() => showAlerts(1)}>Show 1 alert</button>
      <button onClick={() => showAlerts(5)}>Show 5 alerts</button>
      <button onClick={() => showConfirmAndInspectFeedback()}>
        Show 1 confirm and inspect feedback
      </button>
    </main>
    <Wrapper />
  </div>
);
