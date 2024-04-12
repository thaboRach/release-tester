# React Release Tester

## About the project

A simple React app to test github actions

### Built with

- [![Typescript][typescript]][typescript-url]
- [![React][react]][react-url]
- [![Tailwindcss][tailwindcss]][tailwindcss-url]

## Getting Started

To get a local copy up and running follow these simple example steps.

### Yarn

```sh
    npm install --global yarn
```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/thaboRach/release-tester.git
   ```
2. Install the required packages
   ```sh
   yarn
   ```

## Usage

Start the web application locally:

```sh
yarn dev
```

## Contributing

We follow the [Conventional Commits Convention](https://www.conventionalcommits.org/en/v1.0.0/), with our own twist.

The commit message should be structed as follows:
   
   ``` <type>(<scope>): <description> ```

### Type
The type has to be one of the following:

1. **fix:** A patch for a bug (correlates with **PATCH** in Semantic Versioning)
   - Other types such as `chore:`, `docs:`, `style:`, `refactor:` and `test:` are also allowed.
2. **feat:** Introduces a new feature to the codebase (correlates with **MINOR** in Semantic Versioning)

### Scope
The scope used to indicate which ticket the commit belongs to for auditing reasons:

   ``` TEST-XXXX ```

### Description
The description is a short summary of the code changes, e.g., __array parsing issue when multiple spaces were contained in string.__

### Example

- `fix(TEST-0001): Button not working`: Indicates that you are making a bug fix.
- `feat(TEST-0002): Add details page`: Indicates that you are add a new feature.


[typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[react]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://react.dev/
[tailwindcss]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwindcss-url]: https://tailwindcss.com/
