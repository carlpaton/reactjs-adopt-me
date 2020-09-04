This can be used to create a re-usable bit of code.

> Building your own Hooks lets you extract component logic into reusable functions.

The below is in `useDropdown.js` and creates a drop down box.

```js
import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => updateState(e.target.value)}
        onBlur={(e) => updateState(e.target.value)}
        disabled={!options.length}
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
```

You would then consume it as

```js
import useDropDown from "./useDropdown";

const [breed, BreedDropdown, setBreed] = useDropDown("Breed", "", breeds);
```

### References

- https://reactjs.org/docs/hooks-custom.html
