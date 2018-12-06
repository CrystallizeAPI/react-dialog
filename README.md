![alt text](https://raw.githubusercontent.com/snowballdigital/react-dialog/HEAD/media/logo.png "Speech bubble")

# @crystallize/react-dialog

React component to display accessible dialogs. This is a [general purpose component to build awesome and accessible dialogs in react](https://crystallize.com/developers/react-components/react-dialog). Built initially for use in the [Crystallize headless commerce service](https://crystallize.com).

Uses [styled-components](https://npmjs.org/package/styled-components) and [a11y-dialog](https://www.npmjs.com/package/a11y-dialog). Leverages the [native dialog HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) when possible

## Demo
[Demo](https://react-dialog.weknowinternet.work/?selectedKind=Themed&selectedStory=Dialog&full=0&addons=1&stories=1&panelRight=0)

## Usage

```
yarn add @crystallize/react-dialog styled-components
```

**In your app root**

```
import { Wrapper } from '@crystallize/react-dialog';

export default () => (
  <main>
    <YourApp />
  </main>
  <Wrapper />
);
```

**Use it**

```
import { showDialog, showAlert, showConfirm, closeCurrent } from '@crystallize/react-dialog';

await showDialog('Hey dude');
await showDialog({
  body: <strong>Hey dude</strong>
});

await showAlert('Wow');
await showConfirm('Are you sure?');

await showConfirm({
  body: <div>JSX rules</div>,
  buttons: {
    ok: p => <button {...p}>Allrighty</button>,
    cancel: p => <button {...p}>Nope</button>
  }
});

// Closes any open dialog
closeCurrent();
```

**Wrapper props**
| Prop Name    | Default | Type | Description                                |
| ------------ | ------- | ---- | ------------------------------------------ |
| cleanTheme   | false   | bool | Use the clean theme instead of the default |
| ButtonOk     | false   | jsx  | Set a custom default Ok button             |
| ButtonCancel | false   | jsx  | Set a custom default Cancel button         |
| ButtonClose  | false   | jsx  | Set a custom default Close button          |
| Heading      | false   | jsx  | Set a custom default Heading               |

**Show dialog functions**
All of the show dialog functions (showDialog, showAlert, showConfirm) returns a promise when called. The promise is resolved when the dialog is closed. The return value of the
promise changes depending on which type of dialog it is

The functions accepts a single string argument. They also support a single object as argument with these common properties:

```
{
  title<string|jsx>: <h1>Hi there</h1>
  body<string|jsx>: 'you',
  showCloseButton<bool>: false (default is true)
}
```

showConfirm does however accept a few more:
```
...
buttons: {
  ok: props => <button {...props}>{props.children}</button>,
  cancel: "Nope nope!"
}
```
showConfirm resolves its promise with either "ok" or "cancel"
