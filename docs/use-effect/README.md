> The function passed to useEffect will run after the render is committed to the screen.

The default behavior for effects is to fire the effect after every completed render. You can however specify and array of dependencies. (`deps`) Lint will moan if we dont have `[setLocation]` as the deps.

```js
const [location, setLocation] = useState("New Zealand");

useEffect(() => {
  setLocation("");
  // some API call here
}, [setLocation]);
```

This will only ever run once as its has an empty array `[]` - so you are saying it has no `deps`.

```js
useEffect(() => {
  // some API call here
}, []);
```

This will run after every render as it has no `deps` parameter.

```js
useEffect(() => {
  // some API call here
});
```

### References

- https://reactjs.org/docs/hooks-reference.html#useeffect
