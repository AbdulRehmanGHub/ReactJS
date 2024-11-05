## Fragments in React

<Fragment>, often used via <>...</> syntax, lets you group elements without a wrapper node.

```javascript
<>
  <OneChild />
  <AnotherChild />
</>;

OR: 

<>
  <OneChild />
  <AnotherChild />
  <div>
    <Card />
    <Footer />
  </div>
</>;
```

More info: https://react.dev/reference/react/Fragment
