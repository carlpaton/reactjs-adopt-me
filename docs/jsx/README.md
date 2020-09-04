You will need Parcel to run JSX as this will do transformations for you (this uses a project called babel)

Consider this javascript below written to mimic markup:

```js
import React from "react";
export default function Pet({ name, animal, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
}
```

With JSX you can just have:

```js
return (
  <div>
    <h1>{name}</h1>
    <h2>{animal}</h2>
    <h2>{breed}</h2>
  </div>
);
```

You can however only return one top level thing, this is invalid:

```js
return (
    <h1>Foo</h1>
    <div>
        <h1>{name}</h1>
        <h2>{animal}</h2>
        <h2>{breed}</h2>
    </div>
);
```

You would need to need to return fragments if you needed to accomplish the above. This would be one top level fragment which encapsulates two things.

```js
// fragments example
```

The react core team have said that its not necessary to save your files as `.jsx` however for Emmet to work out of the box you will need to save the file as `foo.jsx`.

### References

- https://reactjs.org/docs/introducing-jsx.html
- https://babeljs.io/
- https://docs.emmet.io/
