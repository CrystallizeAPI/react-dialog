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

async function showCustomConfirm() {
  const result = await showConfirm({
    title: "Custom confirm",
    body: faker.hacker.phrase(),
    buttons: {
      ok: {
        value: "HellYeah",
        text: "Hell yeah"
      },
      cancel: {
        value: "ShitNo",
        text: "Shit no"
      }
    }
  });
  console.log(result);
}

export default () => (
  <div>
    <main style={{ maxWidth: "600px", margin: "0 auto", padding: "5vh 5vw" }}>
      <h2>Alert</h2>
      <p>
        <button onClick={() => showAlerts(1)}>Show 1 alert</button>
      </p>
      <p>
        <button onClick={() => showAlerts(5)}>Show 5 alerts</button>
      </p>

      <h2>Confirm</h2>
      <p>
        <button onClick={showConfirmAndInspectFeedback}>
          Show confirm and inspect feedback
        </button>
      </p>
      <p>
        <button onClick={showCustomConfirm}>
          Show confirm with custom buttons and inspect feedback
        </button>
      </p>
    </main>
    <Wrapper />
  </div>
);
