# React package boilerplate

Template and quick-starter to create your own modern React library includes awesome features and bandled using Rollup.

## Note

_This repository created for:_
. Help to bootstrap your own react library with some nice features and
without bothering with configuration and saving time.

## Introduction

This boilerplate uses Rollup as a bundler https://rollupjs.org/

## Getting started

- Copy over the template by cloning this repository and install its dependencies:

```bash
git clone https://github.com/houssemAmiri/react-package-boilerplate.git
cd react-package-boilerplate
npm install
```

- Change the name of the project in `package.json`

## Development:

- To start the developing run :

```
npm run start
```

This will build a version of your library, run the watcher and also run Storybook.
To open Storybook manually open your Browser and navigate to [http://localhost:6060](http://localhost:6060).
Start developing your components in `src/components` folder and update the `src/index.js` file accordingly.
Always provide an `YourComponent.story.tsx` file, so your component will show up in Storybook.

You can refer to example `Box` component, but I think you'll get the idea.

- Storybook: Storybook gives you an easy way to see and use your components while working on them in your library project, without having to build an unnecessary testing page just to display them.

  ```bash
  npm run storybook # runs the host Storybook application locally for quick and easy testing
  ```

  Now, anytime you make a change to your library or the stories, the storybook will live-reload your local dev server so you can iterate on your component in real-time.

- Rollup watch and build:

  - for Local development run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.

    ```bash
    npm run dev # runs rollup with watch flag
    ```

### Scripts:

- `npm run build` : builds the library to `dist`
- `npm run dev` : builds the library, then keeps rebuilding it whenever the source files change.
- `npm test` : tests the library and show the coverage.
- `lint:fix` : runs eslint.
- `npm run storybook` : runs the host Storybook application locally for quick and easy testing
- `npm run build-storybook` : builds a static HTML/JS bundle that can easily be hosted on a remote server, so all members of your team can try your components.
- `npm run format` : format project files with prettier
- `npm run start` : start developping using storybook
- `npm run clean` : remove dist folder

## Publishing :

- you should change the version of the package in `pachage.json`
- you should build the package with :

```bash
npm run build
```

- and finnaly publish the package:

```bash
npm publish
```

## Resources and useful links

- https://blog.logrocket.com/how-to-build-component-library-react-typescript/
- https://betterprogramming.pub/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca#7b1c
- https://dev.to/siddharthvenkatesh/component-library-setup-with-react-typescript-and-rollup-onj
- https://github.com/sidv93/react-ts-lib
- https://dev.to/siddharthvenkatesh/component-library-setup-with-react-typescript-and-rollup-onj
- https://github.com/MidoAhmed/rollup-react-library-starter/tree/master
- https://github.com/KaiHotz/react-rollup-boilerplate/tree/main
