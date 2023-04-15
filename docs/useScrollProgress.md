# useScrollProgress

This helps you how progress that you've scroll on a container.
A container can be either
- Window object (full page scroll)
- Any scrolling element (container scroll)

## Usage

```jsx
import { useThrottle } from './useThrottle'

export default function App() {
  const { containerRef, onBottomReach, isFullPageScroll } = props
  const { progress, isAtBottom } = useScrollProgress({
    isFullPageScroll,
    containerRef,
    onBottomReach
  })

  return (
    <Progress className="custom-progress" color="success" value={progress}>
      {progress}%
      {isAtBottom ? ` - Yay ... you read it all 🎉` : ''}
    </Progress>
  );
}

export default App;
```
