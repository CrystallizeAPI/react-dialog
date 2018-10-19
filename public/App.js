import React from "react";
import faker from "faker";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import styled from "styled-components";

import {
  Wrapper,
  showDialog,
  showAlert,
  showConfirm,
  closeCurrent
} from "../src";

const myI18n = i18n.init({
  lng: "en", // active language http://i18next.com/translate/
  fallbackLng: "en",
  resources: [],
  ns: ["common"],
  defaultNS: "common",
  debug: false
});

const MyOkButton = props => (
  <button {...props}>{props.children || "Yes"}</button>
);
const MyCancelButton = props => (
  <button {...props}>{props.children || "No"}</button>
);

const MyTitle = styled.h2`
  margin: 0;
  color: #bada55;
`;

const MyCloseButton = styled.button`
  color: #bada55;
`;

export default () => (
  <I18nextProvider i18n={myI18n}>
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
              showAlert({
                title: "My custom title",
                body: faker.hacker.phrase()
              })
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

        <h2>Utils</h2>
        <p>
          <button
            onClick={async () => {
              showAlert("Don't worry. I will close soon");
              setTimeout(closeCurrent, 2000);
            }}
          >
            Show alert and auto close after 2s.
          </button>
        </p>
      </main>
      <Wrapper
        ButtonOk={MyOkButton}
        ButtonCancel={MyCancelButton}
        ButtonClose={MyCloseButton}
        Heading={MyTitle}
      />
    </div>
  </I18nextProvider>
);
