# React Hooks Playground 😄

Welcome to the React Hooks Playground! This repository contains live code examples of various React hooks. You can explore and experiment with each hook to see how they work.

This README includes all the instructions, examples, contributing guidelines, license information, and the live demo link. This will give you a comprehensive overview of the React Hooks Playground and how to use it.

## Getting Started 🚀

To get started, follow these steps:

1. Clone the repository to your local machine using the following command:
   ```
   git clone https://github.com/cindykandie/react-hooks.git
   ```

2. Navigate to the project directory:
   ```
   cd react-hooks
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to access the React Hooks Playground and see the power of each of the following code.

## Available Hooks 🎣

### 1. useState

-  Adds state to functional components.
- Example Code:
  ```jsx
  import React, { useState } from 'react';

  const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };

  // Usage
  ReactDOM.render(<Counter />, document.getElementById('root'));
  ```

### 2. useEffect

 Performs side effects in functional components.


### 3. useContext

- Accesses data stored in React's Context API.


### 4. useReducer

- Manages complex state logic in functional components.
- Example Code:


### 5. useCallback

- Optimizes performance by memoizing functions.


### 6. useMemo

 Memoizes expensive computations to improve performance.


### 7. useRef

- Description: Allows direct access to DOM elements and stores mutable values.


### 8. useImperativeHandle

-  Customizes the instance value exposed through ref.


### 9. useLayoutEffect

- Performs measurements or DOM manipulations before rendering.


### 10. Custom Hooks

- Create reusable logic for your specific application needs.


## Contributing 🤝

Feel free to contribute to this project by adding more examples, improving existing ones, or suggesting new hooks to explore. Your contributions are greatly appreciated!

## License 📄

**License**: [MIT License](https://opensource.org/licenses/MIT)
---

**Live Demo**: [React Hooks Playground](https://react-hooks.vercel.app)

Happy hooking! 🎣🔥
