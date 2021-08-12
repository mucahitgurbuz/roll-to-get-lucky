## Roll To Get Lucky

This is a game where player race their luck using TypeScript, ReactJS, Redux.

## How to install

- You need to have `yarn` & `node` installed in your machine.
- "client" folder handles frontend, "server" folder handles backend.
- Use Node version 15.0.1 for a smooth experience.

1. Run `yarn` in root/ folder.
2. Run `yarn` in client/ folder.

3. To start backend and frontend, in the root folder run

```bash
yarn dev
```

4. To run unit tests, in the client folder run

```bash
yarn test
```

## Used packages

- `reach-router-dom` for routing.
- `axios` for API requests.
- `bumbag` for ThemeProvider and StyledSystem (CSS-in-Props).
- `i18next` for managing the app languages.
- `redux` & `react-redux` for state management.
- `redux-devtools-extension` & `redux-thunk` as redux enhancers.
- `use-global-hook` for global state management.
- `react-loading-skeleton` for loading skelatons.

## Project Structure

- `client/src/state/redux/actions/` for redux action methods.
- `client/src/state/redux/reducers/` for redux reducers.
- `client/src/state/globalStore/` for useGlobalStore getters and setters.
- `client/src/components/` for all general components with **Atomic Design** methodology.
- `client/src/config/` for all config files like env variabes.
- `client/src/i18n/` for localization files.
- `client/src/routes/` for routers and urls management.
- `client/src/types/` for global typings.
- `client/src/utils/` for utils functions.
- `client/docs/` general documentation.
- `server/` for json databases and db management.

### Followed React Best Practices

- In the implementation following best practices applied:

1. Functional components are preferred and used around the project (No classfull components).
2. Hook based state management is used inside the components.
3. Dependencies used as their latest versions where they have hook based injections. Avoid of using HoC.
4. Unit testing with a 100% of business logic.
5. Atomic design principles applied (https://bradfrost.com/blog/post/atomic-web-design/) for reusable and scalable product.
6. Used design system for the apply CSS-in-Props where handling state management with css is much more easy.
7. All pages and components should be responsive for mobile and tablet views.

### In18 Integration

- So far, two langaues are supported `tr` & `en`. All languages related files must reside under `client/src/i18n/`, each language should have a seperate file.
- There is a naming convention for the files e.g. `tr` `ru` `fr` ... etc.
- For each language there is a file named like `en.json` that contain the (key, value) pair used in translation.
- The code is able to detect your language configuration and set the proper one intially.
- For more info visit [I18Next](https://www.i18next.com/)

### Design System

- It's a general file (`theme.ts`) used for global styling, colors, font sizes, ...etc.
