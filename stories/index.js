import React from "react";
import { storiesOf } from "@storybook/react";

import { Wrapper, showDialog, showAlert, showConfirm } from "../src";

class DialogRenderer extends React.Component {
  componentDidMount() {
    this.props.render();
  }

  render() {
    return <button onClick={this.props.render}>Reopen</button>;
  }
}

function withDialogWrapper(storyFn) {
  return (
    <>
      <Wrapper />
      <pre>
        <code>{`import { Wrapper, showDialog, showAlert, showAlert } from '@crystallize/react-dialog';

<Wrapper />`}</code>
      </pre>
      {storyFn()}
    </>
  );
}

function withCleanThemeDialogWrapper(storyFn) {
  return (
    <>
      <Wrapper cleanTheme />
      <pre>
        <code>{`import { Wrapper, showDialog, showAlert, showAlert } from '@crystallize/react-dialog';

<Wrapper cleanTheme />`}</code>
      </pre>
      {storyFn()}
    </>
  );
}

function addStories(story) {
  return story
    .add("Dialog", () => (
      <DialogRenderer render={() => showDialog(`showDialog("Hello there")`)} />
    ))
    .add("Dialog: with title", () => (
      <DialogRenderer
        render={() =>
          showDialog({
            title: "Cool title",
            body: (
              <pre>
                <code>
                  {`showDialog({
  title: "Cool title",
  body: "Hello there"
})`}
                </code>
              </pre>
            )
          })
        }
      />
    ))
    .add("Dialog: body as jsx", () => (
      <DialogRenderer
        render={() =>
          showDialog({
            title: "Cool title",
            body: (
              <em>
                <pre>
                  <code>
                    {`showDialog({
  title: "Cool title",
  body: <em>Hello there</em>
})`}
                  </code>
                </pre>
              </em>
            )
          })
        }
      />
    ))
    .add("Alert", () => (
      <DialogRenderer render={() => showAlert(`showAlert("Oh no!")`)} />
    ))
    .add("Confirm", () => (
      <DialogRenderer
        render={() =>
          showConfirm({
            title: "Can you confirm?",
            body: (
              <em>
                <pre>
                  <code>
                    {`showConfirm({
  title: "Can you confirm?",
  body: "Important decision"
})`}
                  </code>
                </pre>
              </em>
            )
          })
        }
      />
    ))
    .add("Confirm: custom buttons", () => (
      <DialogRenderer
        render={() =>
          showConfirm({
            title: "Can you confirm?",
            body: "Important decision",
            buttons: {
              ok: p => <button {...p}>Oki doki</button>,
              cancel: p => <button {...p}>What? No!</button>
            },
            body: (
              <em>
                <pre>
                  <code>
                    {`showConfirm({
  title: "Can you confirm?",
  body: "Important decision",
  buttons: {
    ok: p => (
      <button {...p}>Oki doki</button>
    ),
    cancel: p => (
      <button {...p}>What? No!</button>
    )
  }
})`}
                  </code>
                </pre>
              </em>
            )
          })
        }
      />
    ));
}

addStories(storiesOf("Themed", module).addDecorator(withDialogWrapper));

addStories(
  storiesOf("Clean theme", module).addDecorator(withCleanThemeDialogWrapper)
);
