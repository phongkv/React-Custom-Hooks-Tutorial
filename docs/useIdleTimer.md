# Introduce

This hook provides a way to detect when the user has been idle (not interacting with the app) for a certain amount of time. It can be useful for triggering automatic logouts or other actions after a period of inactivity.

## Usage

```jsx
import useIdleTimer from './useIdleTimer';

const App = () => {
  const isIdle = useIdleTimer(5000); // 5 seconds of inactivity

  useEffect(() => {
    if (isIdle) {
      console.log('User is idle for 5 seconds!');
      // Add your logout or other action here
    }
  }, [isIdle]);

  return <div>Hello World</div>;
};

export default App;
```
