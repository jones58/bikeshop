# bikeshop

A bike shop website for my favourite bikes - Using NextJS, Apollo and Shopify

## Planning

- Gathered inspiration sites in an Are.na folder
- Planned out the design in

## Building and Debugging

- Set up a Vite project with React and TypeScript.
- Followed a basic GraphQL and Apollo setup [here](https://www.telerik.com/blogs/leveraging-graphql-apollo-client-efficient-data-fetching-state-management-api-driven-apps?ref=dailydev) guide to get started with it.
- Set up a Shopify store for development purposes and a Shopify app to acess the data via GraphQL API.
- Edited my previous GraphQL and Apollo setup to use Shopify's API. This took awhile to get right, using the console I was able to debug.
- The Apollo Chrome extension was very useful for writing GraphQL queries, in particular the Explorer tab.
- Added Tailwind for quick styling. Seeing as this is a project for quickly learning new technologies, I settled for a basic design system built on Tailwind. For now, the website is desktop only.
- Set up a component for products called product card.
- Added Storybook to the project. This can be run with `npm run storybook`.

## Editing locally

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
