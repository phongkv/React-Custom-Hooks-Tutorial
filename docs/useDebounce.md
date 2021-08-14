# useDebounce

Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page

## Usage

```jsx
import { useDebounce } from "./useDebounce";

function App(props) {
  const handleFetchApi = (key) => {
    console.log(`fetching api with key ===> ${key}`);
  };
  const debouncedFetchApi = useDebounce(handleFetchApi, 2000);

  const handleInputChange = (e) => {
    debouncedFetchApi(e.target.value);
  };

  return <input onChange={handleInputChange} />;
}

export default App;
```
