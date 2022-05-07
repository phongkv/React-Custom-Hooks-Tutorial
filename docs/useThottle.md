# useThrottle

Throttling is a technique, where a given function runs only once at a specified period of time.

Throttling could be used in scenarios, where our code does expensive CPU/Network tasks on frequently fired events:

- Listening to HTML Input element change
- Listening to window resize or scroll
- Listening to mouse cursor position change

## Usage

```jsx
import { useThrottle } from './useThrottle'

export default function App() {
  const [value, setValue] = useState('hello')
  const throttledValue = useThrottle(value)

  useEffect(() => console.log(`throttledValue changed: ${throttledValue}`), [
    throttledValue,
  ])

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  return (
    <div>
      Input: <input value={value} onChange={onChange} />
      <p>Throttled value: {throttledValue}</p>
    </div>
  )
}

export default App;
```
