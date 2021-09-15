# useStorage

Sync state to local storage so that it persists through a page refresh. Usage is similar to useState except we pass in a local storage key so that we can default to that value on page load instead of the specified initial value.

## Usage

```jsx
import { useStorage } from "./useStorage";

function App(props) {
  const [name, setName, removeName] = useSessionStorage("name", "Tom");
  const [age, setAge, removeAge] = useLocalStorage("age", 20);

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("John")}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  );
}

export default App;
```
