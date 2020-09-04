> Returns a stateful value, and a function to update it.
> During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).
> The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

```js
const [state, setState] = useState(initialState);
```

### References

- https://reactjs.org/docs/hooks-reference.html#usestate
