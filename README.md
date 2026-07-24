# Vue Pair Programming Test

This project is a simple Vue.js application designed for pair programming exercises. It includes basic components and functionality to help candidates demonstrate their skills in Vue.js development.

## Project Structure

```
vue-pair-programming-test
├── src
│   ├── components
│   │   ├── HelloWorld.vue
│   │   └── Counter.vue
│   ├── App.vue
│   ├── main.js
│   └── styles
│       └── main.css
├── public
│   └── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Components

- **HelloWorld.vue**: A simple component that displays a greeting message.
- **Counter.vue**: A component that implements a counter with increment and decrement functionality.

## Pair Programming Exercise

### Feature 1: List + Filter
- Add a list of 5 items to the app (in `Counter.vue` or a new `TodoList.vue`).
- Add a text input to filter items as the user types.
- Add a “no results” message when the filter matches nothing.

### Feature 2: Persistence + Reset
- Store the counter value (or list state) in `localStorage` whenever it changes.
- On mount, initialize state from `localStorage` if available.
- Add a “Reset” button that clears saved state and restores defaults.

### Bonus
- Extract filter input and behavior into a reusable component (e.g., `ItemFilter.vue`).
- Add a simple test (unit or integration) validating:
  - counter increments / decrements,
  - filter updates results correctly,
  - reset works.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd vue-pair-programming-test
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

This application serves as a foundation for pair programming sessions. Candidates can be asked to modify existing components, add new features, or fix bugs as part of the exercise.

## License

This project is licensed under the MIT License.

## Implementation Summary

### Core Features

#### Task Filtering and Search

- Added a task list from json data.
- Added case-insensitive filtering by name and description.
- Search starts after a minimum of two characters and uses a 300 ms debounce to avoid filtering on every keystroke.
- Matching text is highlighted in task names and descriptions (at first I used v-html then I created a dedicated component since the danger of XSS attacks).
- Added a Reset button that clears the current search and restores the complete task list.
- Added a `No results` state when no tasks match the search.
- Replaced static completion text with interactive checkboxes with no persistance in localStorage.

#### State Persistence

The following values are stored in `localStorage` and restored after a page refresh:

- The active view: Todo list or Counter.
- The current task search query.
- The current counter value.

#### Refactor and architecture

- Extracted the task search UI into `ItemFilter.vue`.
- Extracted reusable stateful logic into `useFilter` and `useCounter` composables.

#### Unit Tests

Added 13 Vitest unit tests covering the composables:

- The filter returns every task for an empty query.
- Queries shorter than two characters do not filter the task list.
- Tasks can be filtered by name or description.
- Filtering is case-insensitive.
- A search with no matches returns an empty result set.
- Resetting the search clears the query and restores every task.
- The counter starts at zero by default and supports a custom initial value.
- The counter increments and decrements correctly.
- The counter supports negative values.
- A persisted counter value is restored from `localStorage`.

#### UI

- Added shadcn-vue as the shared UI component collection.

#### Accessibility

- Added semantic sections, headings, table headers, column scopes, and a screen-reader-only table caption.
- Connected the search input, result status, and result table with `aria-describedby` and `aria-controls`.

#### Internationalization

- Added `vue-i18n` in Composition API mode.