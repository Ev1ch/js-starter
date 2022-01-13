# Basic information

## Start-up

To start the application do the following:

- Clone the repository
- Go to the respository directory and execute: `npm install`
- Execute command: `npm start`
- Go to `http://localhost:3000` in a browser

## Stack

Main stack includes:

- React
- Redux
- Redux Saga _(for working with asynchronous and other middlewares in Redux)_
- React Router
- clsx _(for merging classNames)_
- SCSS

Developing stack includes:

- Husky _(pre-commit hooks)_
- Eslint
- Prettier
- Stylelint
- Commitlint _(linting of commit messages)_
- Lint-staged _(starting linters only when files of special format change)_
- Extentions recommendations _(for VS Code)_
- Settings recommendations _(for VS Code)_
- Connected Devtools _(for Redux)_

## Structure

### Folders

Folder and files structure of the project:

- `api` - functions which allow to call API correctly and easily
- `assets` - folder with all media files, for example images
- `common` - constants and enums
- `components` - all components, which are used in views
  - `base` - atomic components, which are common and used in bigger components
  - `common` - common components, which are used on most pages, for example footer
  - `modals` - all modal windows, which are used
    - `base` - base modal window, which can be taken as an example
- `helpers` - functions, which are used in application to optimise some routine operations
- `containers` - application logic components, which pass properties to `pages`
- `services` - core logic of all entities, interact with API
- `store` - core application configured store
- `styles` - core styles, which are common for all parts of application, also have some atomic classes

### Components

Common component is just a folder with 2 files. Main file is called `index.jsx`. React framework is already configured to resolve main file, so use just `%component%`, not `%component%/index.jsx`. HTML and JS code is inside `index`, styles are extracted in `.module.scss` file is the same directory and imported in component. BEM is offered to use in the names of SCSS classes, but there are some atomic classes in `styles` too. PropTypes must be specified in `index.jsx` as well.

`components` folder contains some categories, so after creating a component place it in the correct folder and add its export in `index.js` file of the category.

All logic is extracted to containers. Those components pass properties to pages, which are just a views and do not have any logic. We can say that this is something like MVC pattern, where `components/pages` are V and `containers` are C.

All common/example files and their structure you can already find in this started.
