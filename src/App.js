import React from "react";
import faker from "faker";

import { Wrapper, showDialog, showAlert, showConfirm } from "./component";

const MyOkButton = props => (
  <button {...props}>{props.children || "Yes"}</button>
);
const MyCancelButton = props => (
  <button {...props}>{props.children || "No"}</button>
);

export default () => (
  <div>
    <main style={{ maxWidth: "600px", margin: "0 auto", padding: "5vh 5vw" }}>
      <h2>Dialog</h2>
      <p>
        <button onClick={() => showDialog(faker.hacker.phrase())}>
          Just a simple dialog
        </button>
      </p>
      <p>
        <button
          onClick={() =>
            showDialog({ title: "What?", body: faker.hacker.phrase() })
          }
        >
          With title
        </button>
      </p>

      <h2>Alert</h2>
      <p>
        <button onClick={() => showAlert("What?")}>Show simple alert</button>
      </p>
      <p>
        <button
          onClick={() =>
            showAlert({ title: "My custom title", body: faker.hacker.phrase() })
          }
        >
          Show advanced alert with title and body
        </button>
      </p>
      <p>
        <button
          onClick={async () => {
            await showAlert({
              title: faker.hacker.noun(),
              body: faker.hacker.phrase()
            });
            await showAlert({
              title: faker.hacker.noun(),
              body: faker.hacker.phrase()
            });
            await showAlert({
              title: faker.hacker.noun(),
              body: faker.hacker.phrase()
            });
            await showAlert({
              title: faker.hacker.noun(),
              body: faker.hacker.phrase()
            });
            await showAlert({
              title: faker.hacker.noun(),
              body: faker.hacker.phrase()
            });
          }}
        >
          Show 5 alerts
        </button>
      </p>

      <h2>Confirm</h2>
      <p>
        <button
          onClick={async () => {
            showAlert(
              await showConfirm({
                title: "Do you agree?",
                body: faker.hacker.phrase()
              })
            );
          }}
        >
          Show confirm and inspect feedback
        </button>
      </p>
      <p>
        <button
          onClick={async () => {
            showAlert(
              await showConfirm({
                title: "Custom confirm",
                body: faker.hacker.phrase(),
                buttons: {
                  ok: props => <button {...props}>{props.children}</button>,
                  cancel: "Nope nope!"
                }
              })
            );
          }}
        >
          Show confirm with custom buttons and inspect feedback
        </button>
      </p>
    </main>
    <Wrapper ButtonOk={MyOkButton} ButtonCancel={MyCancelButton} />
  </div>
);
