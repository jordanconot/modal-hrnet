# Modal HRnet

A simple, lightweight React package for displaying a customisable modal, ideal for confirmation messages like ‘Employee Created!

## 📰 Requirements

Before using this package, make sure that your environment meets the following requirements:

- **React** : 18.3.1
- **React-DOM** : 18.3.1
- **Node.js** : >= 16.0.0
-**Text Editor** : [Visual Studio Code](https://code.visualstudio.com/) (recommended)

Make sure you have these versions installed before using this package.

---

## 🚀 Installation

Install the package in your React project using npm or yarn :

### Using npm:
```bash
npm install demo-module-test-hrnet
```
### Using yarn:
```bash
yarn add install demo-module-test-hrnet
```
If the versions of React or React-DOM differ from version 18.3.1, make sure you install the correct versions:
```bash
npm install react@18.3.1 react-dom@18.3.1
```
## 📝 General Description

The Modal HRnet module lets you easily display a customisable modal window for messages such as confirmations. The modal supports the following customisations:

- **Text: Display your own message.**
- **Background colour: adjusts the background of the modal window.**
- **Button colour: customise the colour of the close button.**

## 💻 How to Use

Below is a basic example of how to integrate and use the Modal HRnet package in your project:

### Example Code

```jsx
import {useState} from "react";
import Modal from "demo-module-hrnet";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal= () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
      <div>
        <button onClick={openModal}>Save</button>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          text="Employee Created!"
          backgroundColor="#FFF"
          buttonColor="#000"
        />
      </div>
    );
}

export default App;
```

## 🧐 Props and Options

| Prop              | Type       | Default       | Description                                        |
|-------------------|------------|---------------|----------------------------------------------------|
| `isOpen`          | `boolean`  | `false`       | Controls whether the modal is visible.            |
| `onClose`         | `function` | `null`        | Function to call when the modal is closed.        |
| `text`            | `string`   | `"Message"`   | The message displayed inside the modal.           |
| `backgroundColor` | `string`   | `"#fff"`      | Background color of the modal.                    |
| `buttonColor`     | `string`   | `"#000"`      | Color of the modal's close button.                |

Example Props:
```jsx
<Modal
  isOpen={true}
  onClose={() => console.log("Modal Closed")}
  text="Your text"
  backgroundColor="#256562"
  buttonColor="#456898"
/>
```