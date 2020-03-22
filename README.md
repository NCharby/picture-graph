# Demo Time! 

## Getting Started 

Project assumes you have `node` and `yarn` installed globally

*(you can do this with `npm` as well)*
```
//install deps
yarn

//dev mode
yarn run watch

//production build
yarn run buildProd
yarn run start

```

## Caveats
- I'm treating the provided design as a wireframe rather than a mockup
    - And furthermore, it's a prototype to try out with a customer
- Material-ui is a fast way to throw something together, I lean on this to do more interesting things than writing styles
- I wouldn't consider this code production ready
    - I'm using components from `@material-ui/lab` that would need to be implimented
    - There's no security on the server
    - My types are pretty lazy
    - As this is a playground, I don't feel bad about tests; I can show you a full test suite if you're curious

## Interesting bits 
- `src/server/g/`: A graphQL wrapper around pixabay
- `create-react-app` is great and all, but I prefer to know how my tool runs
- `src/public/components/` and `src/public/containers/` is a nice way to stay organized
- `src/public/containers/results/index.js` is pretty complicated to make a dynamic tile display


## TODO
- Permalink Routing for single image viewing
- Error handling.. all over the place
- Get an E2E testing harness on this
    - Ok, really any tests would be a good idea
- HMR is partly borked. Investigate
