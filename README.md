# Custom React Hooks! 🎉 ⚛

A collection of easy-to-use React custom hooks.

- **useFetch**:
  [src](https://github.com/wiliamfeng/react-custom-hooks/tree/main/src/useFetch.js)
  /
  [doc](https://github.com/wiliamfeng/react-custom-hooks/tree/main/docs/useFetch.md)

  ```jsx
  import useFetch from "./useFetch";

  const App = () => {
    const {
      loading,
      error,
      data = [],
    } = useFetch("https://hn.algolia.com/api/v1/search?query=react");

    if (error) return <p>Error!</p>;
    if (loading) return <p>Loading...</p>;

    return (
      <div>
        <ul>
          {data?.hits?.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  ```

- **useEventListener**:
  [src](https://github.com/wiliamfeng/react-custom-hooks/tree/main/src/useEventListener.js)
  /
  [doc](https://github.com/wiliamfeng/react-custom-hooks/tree/main/docs/useEventListener.md)

  ```jsx
  import { useRef } from "React";
  import useEventListener from "./useEventListener";

  const Dialog = ({ show = false, onClose = () => null }) => {
    const dialogRef = useRef();

    // Event listener to close dialog on click outside element
    useEventListener(
      "mousedown",
      (event) => {
        // Do nothing if the event was already processed
        if (event.defaultPrevented) {
          return;
        }
        // Check if click is outside the dialog
        if (!dialogRef?.current?.contains(event.target)) {
          onClose();
        }
      },
      dialogRef.current
    );

    // Renders dailog
    return show
      ? React.createPortal(<div ref={dialogRef}>...</div>, document.body)
      : null;
  };
  ```

- **useLocalStorage**:
  [src](https://github.com/wiliamfeng/react-custom-hooks/tree/main/src/useLocalStorage.js)
  /
  [doc](https://github.com/wiliamfeng/react-custom-hooks/tree/main/docs/useLocalStorage.md)

  ```jsx
  import useLocalStorage from "./useLocalStorage";

  const App = () => {
    const [name, setName] = useLocalStorage("name", "Bob");
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    );
  };
  ```

- **useMediaQuery**:
  [src](https://github.com/wiliamfeng/react-custom-hooks/tree/main/src/useMediaQuery.js)
  /
  [doc](https://github.com/wiliamfeng/react-custom-hooks/tree/main/docs/useMediaQuery.md)

  ```jsx
  import useMediaQuery from "./useMediaQuery";

  const App = () => {
    const canHover = useMediaQuery(
      // Media queries
      ["(hover: hover)"],
      // Values corresponding to the above media queries by array index
      [true],
      // Default value
      false
    );

    const canHoverClass = "opacity-0 hover:opacity-100 transition-opacity";
    const defaultClass = "opacity-100";

    return <div className={canHover ? canHoverClass : defaultClass}>...</div>;
  };
  ```

- **useDarkMode**:
  [src](https://github.com/wiliamfeng/react-custom-hooks/tree/main/src/useDarkMode.js)
  /
  [doc](https://github.com/wiliamfeng/react-custom-hooks/tree/main/docs/useDarkMode.md)

  ```jsx
  import useDarkMode from "./useDarkMode";

  const App = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    return (
      <div>
        Dark mode:
        <button onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "Disable" : "Enable"}
        </button>
      </div>
    );
  };
  ```

- **useDebounce**:
  [src](https://github.com/wiliamfeng/react-custom-hooks/tree/main/src/useDebounce.js)
  /
  [doc](https://github.com/wiliamfeng/react-custom-hooks/tree/main/docs/useDebounce.md)

  ```jsx
  import { useDebounce } from "./useDebounce";

  const App = () => {
    const handleFetchApi = (key) => {
      console.log(`fetching api with key ===> ${key}`);
    };
    const debouncedFetchApi = useDebounce(handleFetchApi, 2000);

    const handleInputChange = (e) => {
      debouncedFetchApi(e.target.value);
    };

    return <input onChange={handleInputChange} />;
  };
  ```

- **usePrevious**:
  [src](https://github.com/wiliamfeng/react-custom-hooks/tree/main/src/usePrevious.js)
  /
  [doc](https://github.com/wiliamfeng/react-custom-hooks/tree/main/docs/usePrevious.md)

  ```jsx
  import { usePrevious } from "./usePrevious";

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

- **useStorage**:
  [src](https://github.com/wiliamfeng/react-custom-hooks/tree/main/src/useStorage.js)
  /
  [doc](https://github.com/wiliamfeng/react-custom-hooks/tree/main/docs/useStorage.md)

  ```jsx
  import { useStorage } from "./useStorage";

  const App = () => {
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
  };
  ```
