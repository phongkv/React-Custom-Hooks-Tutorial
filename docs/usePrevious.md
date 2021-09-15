# usePrevious

When using hooks how do I get the previous value of props or state

## Usage

```jsx
import usePrevious from "./usePrevious";

const App = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```
