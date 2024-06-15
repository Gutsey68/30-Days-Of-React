# What is React?

## What is React?

React is a JavaScript library for building user interfaces. It enables the creation of fast, interactive, and dynamic web applications using reusable components.

## What is a library?

A library is a collection of reusable functions, objects, and classes designed to solve common problems in software development. It provides specific functionality that developers can use without having to reinvent the wheel.

## What is a single page application?

A single page application is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. This provides a smoother and faster user experience, similar to that of desktop applications.

## What is a component?

A component is a reusable, self-contained piece of the user interface in a React application. Each component manages its own state and rendering logic, making it easier to manage and reuse code.

## What is the latest version of React?

The latest version of React is 18.2.0 (as of the date of this response).

## What is DOM?

The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the structure of the document as a tree, where each node is an object representing a part of the document (elements, attributes, text, etc.).

## What is React Virtual DOM?

The React Virtual DOM is a lightweight in-memory representation of the real DOM. React uses the Virtual DOM to optimize UI updates by only changing the parts of the real DOM that have changed, rather than re-rendering the entire UI.

## What does a web application or a website (composed of) have?

A web application or website is composed of several elements: HTML for structure, CSS for styling, JavaScript for interactivity, and often libraries and frameworks to simplify development and improve performance.

# Why React?

## Why did you choose to use React?

I chose to use React because of its popularity, flexibility, and ability to create responsive and high-performance user interfaces. The component-based structure makes code reuse and management easier.

## What measures do you use to know popularity?

To measure popularity, you can look at metrics such as GitHub stars, the number of contributors, downloads, usage statistics, community support, and trends on platforms like Stack Overflow and Google Trends.

## What is more popular, React or Vue?

As of now, React is generally considered more popular than Vue, based on metrics like GitHub stars, usage in large-scale projects, job market demand, and community size.

# JSX

## What is an HTML element?

An HTML element is a building block of an HTML document, defined by a start tag, content, and an end tag (e.g., `<div>content</div>`).

## How to write a self-closing HTML element?

A self-closing HTML element is written with a slash before the closing angle bracket (e.g., `<img />`, `<br />`).

## What is an HTML attribute? Write some of them

An HTML attribute provides additional information about an element. Examples include `id`, `class`, `src`, `href`, and `alt`.

## What is JSX?

JSX is a syntax extension for JavaScript that looks similar to HTML. It is used with React to describe what the UI should look like. JSX is compiled to JavaScript by tools like Babel.

## What is babel?

Babel is a JavaScript compiler that transforms modern JavaScript code into a form that can run in older browsers. It also converts JSX into JavaScript.

## What is a transpiler?

A transpiler is a tool that translates code from one programming language to another, often converting newer language features into an older, more compatible version.

# JSX Elements

## What is a JSX element?

A JSX element is a JavaScript object that describes a part of the user interface. It looks similar to HTML but can include JavaScript expressions and components.

# JavaScript Modules and Packages

## What is a module?

A module is a self-contained piece of code that encapsulates functionality and can be reused across different parts of an application. Modules help in organizing and managing code by splitting it into smaller, manageable parts.

## What is a package?

A package is a collection of one or more modules that are bundled together and can be distributed and shared via a package manager like NPM. A package often includes additional metadata, such as the name, version, and dependencies.

## What is the difference between a module and a package?

A module is a single piece of code, typically a JavaScript file, that exports functionality. A package, on the other hand, is a collection of modules, along with additional metadata, that can be published and shared using a package manager.

## What is NPM?

NPM (Node Package Manager) is a package manager for JavaScript. It allows developers to install, share, and manage dependencies (packages) for their projects. NPM also provides a registry where packages can be published and shared with the community.

## What is Webpack?

Webpack is a module bundler for JavaScript applications. It takes modules with dependencies and generates static assets that represent those modules. Webpack allows developers to use modern JavaScript features, handle different types of assets (CSS, images), and optimize the output for production.

## How do you create a new React project?

You can create a new React project using the Create React App tool. This tool sets up a new React project with a standard configuration. Here is how you can create a new React project:

```bash
npx create-react-app my-new-project
cd my-new-project
npm start
```

# JavaScript Functions and React Components

## What is the difference between a regular function and an arrow function?

The main differences between regular functions and arrow functions in JavaScript are:

1. **Syntax**: Arrow functions have a more concise syntax compared to regular functions.
2. **`this` Context**: Arrow functions do not have their own `this` context. They inherit `this` from the surrounding scope, which makes them useful in situations where you want to preserve the context of `this`.
3. **Arguments Object**: Arrow functions do not have their own `arguments` object. If you need to access the `arguments` object, you must use a regular function.

## What is a React Component?

A React Component is a reusable piece of the user interface. It can be a class or a function that returns a React element. Components can accept inputs (called "props") and manage their own state to render dynamic content.

## How do you make a React functional component?

A React functional component is a JavaScript function that returns a React element. Functional components can accept props as an argument and use hooks to manage state and lifecycle events.

## What is the difference between a pure JavaScript function and a functional component?

The main differences are:

1. **Return Value**: A pure JavaScript function can return any type of value, while a functional component must return a React element.
2. **Usage**: A pure JavaScript function is used for general programming tasks, whereas a functional component is specifically used to define part of the UI in a React application.
3. **Lifecycle**: Functional components can use hooks like `useState` and `useEffect` to manage state and lifecycle events, which is not applicable to regular JavaScript functions.

## How small is a React component?

A React component can be as small as you want. It can represent a single HTML element like a button or an input field, or it can be a larger component that includes many child components. The idea is to break down the UI into small, reusable pieces.

## Can we make a button or input field component?

Yes, you can create a button or input field component in React. These components can be as simple or complex as needed and can encapsulate functionality and styling specific to buttons or input fields.

# React Props

## What is props in a React component?

Props (short for "properties") are read-only inputs passed from a parent component to a child component in React. They allow data and event handlers to be passed down the component tree, enabling communication between components.

## How do you access props in a React component?

In a functional component, props are accessed through the function's parameters. In a class component, props are accessed via `this.props`.

## What data types can we pass as props to components?

You can pass various data types as props to components, including:

- Strings
- Numbers
- Booleans
- Arrays
- Objects
- Functions
- React elements
- Other components

## What is a propTypes?

`propTypes` is a property used to specify the expected data types and structure for the props a component should receive. It helps with type-checking and ensures that the component is used correctly. This is typically done using the `prop-types` library.

## What is a default propTypes?

Default `propTypes` are specified using the `defaultProps` property on a component. They define the default values for props that are not provided by the parent component. This ensures that the component has sensible defaults and can function correctly even if some props are missing.

# JavaScript Arrays and Destructuring

## Why do you need to map an array?

Mapping an array is essential because it allows you to transform each element in the array and return a new array with the transformed elements. The `map` method applies a given function to each element in the array, creating a new array with the results. This is particularly useful when you need to perform the same operation on each element, such as formatting data, adding properties, or converting values.

## Why do we need keys during mapping an array?

Keys are needed when mapping an array in React to help identify which items have changed, been added, or removed. Keys should be unique for each element in the array and are essential for React's reconciliation process. This helps React optimize rendering by reusing existing elements instead of re-rendering the entire list, improving performance and efficiency.

## What is the importance of destructuring your code?

Destructuring is important because it allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and readable manner. It simplifies the syntax for accessing nested values and helps avoid repetitive code, making it easier to work with complex data structures.

## Does destructuring make your code clean and easy to read?

Yes, destructuring makes your code cleaner and easier to read. By reducing the need for repetitive and verbose code, it highlights the important parts of the code and makes the intention clearer. Destructuring helps to quickly identify which properties or elements are being accessed or used, improving overall code readability and maintainability.

# JavaScript and React Components

## How do you write a pure JavaScript function?

A pure JavaScript function is a function that, given the same input, will always return the same output and does not cause any observable side effects. It does not modify any external state and relies solely on its input parameters.

## What is inheritance and how do you make a child from a parent class?

Inheritance is a fundamental concept in object-oriented programming where a class (child class) inherits properties and methods from another class (parent class). This allows the child class to reuse the code defined in the parent class and also extend or override the behavior. To create a child class from a parent class, the child class uses the `extends` keyword followed by the parent class name.

## What is a class based React component?

A class based React component is a component defined using ES6 class syntax. It extends `React.Component` and must include a `render` method that returns a React element. Class based components can have state and lifecycle methods.

## What is the difference between functional React component and class based React component?

The main differences are:

- **Syntax**: Functional components are simple JavaScript functions, while class based components use ES6 class syntax.
- **State and Lifecycle**: Functional components use hooks like `useState` and `useEffect` to manage state and lifecycle, whereas class based components use `this.state` and lifecycle methods like `componentDidMount`.
- **Performance**: Functional components with hooks can be more performant because they avoid some of the overhead associated with classes.

## When do we need to use class based components instead of functional components?

Class based components are typically used when you need to use lifecycle methods that are not easily replicated with hooks, or when working on an existing codebase that already uses class based components. However, with the introduction of hooks, the need for class based components has significantly decreased.

## What is the use cases of class based component?

Class based components are useful when:

- You need to manage state and lifecycle methods in a more traditional object-oriented approach.
- You are working with an older codebase that heavily uses class based components.
- You need to use lifecycle methods that might be complex to handle with hooks.

## Which type of component do you use most frequently? functional or class-based component?

Most developers now use functional components more frequently due to their simplicity and the power of hooks, which allow functional components to manage state and lifecycle effectively.

## What is React life cycle?

React life cycle refers to the series of methods that are invoked in different stages of a component's existence. These stages include mounting (when the component is first rendered), updating (when the component's state or props change), and unmounting (when the component is removed from the DOM). Lifecycle methods allow developers to run code at specific points in a component's life.

## What is state in React?

State in React is an object that holds data that influences the output of a component. It allows components to create and manage their own data that can change over time. State is managed within the component and can be updated using the `setState` method in class based components or the `useState` hook in functional components.

# React State and Props

## What is state in React?

State in React is an object that holds data or information about the component. It is managed within the component and can change over time. The state is used to create dynamic and interactive components by allowing components to respond to user input, network responses, and other events.

## What is the difference between props and state in React?

The main differences between props and state in React are:

- **Props**:

  - Props (short for "properties") are read-only inputs passed from a parent component to a child component.
  - Props are immutable, meaning they cannot be modified by the receiving component.
  - Props are used to pass data and event handlers to child components.

- **State**:
  - State is an internal object managed within a component.
  - State is mutable, meaning it can be updated by the component.
  - State is used to keep track of data that changes over time and affects the rendering of the component.

## How do you access state in a React component?

In a class-based component, state is accessed using `this.state`. In a functional component, state is accessed using the `useState` hook.

## How do you set a state in a React component?

In a class-based component, state is set using the `setState` method. In a functional component, state is set using the `setState` function returned by the `useState` hook.

### Class-based Component:

- Access state: `this.state`
- Set state: `this.setState({ key: value })`

### Functional Component with Hooks:

- Access state: `[state, setState] = useState(initialValue)`
- Set state: `setState(newValue)`

# Conditional Rendering in React

## What is conditional rendering?

Conditional rendering in React refers to the ability to render different UI elements or components based on certain conditions. It allows developers to dynamically control what is displayed on the screen depending on the state or props of the component.

## How do you implement conditional rendering?

There are several ways to implement conditional rendering in React:

1. **Using if/else statements**:
   This is the most straightforward way to conditionally render elements. However, it cannot be directly used inside JSX. You need to put the logic outside the JSX return statement.

2. **Using ternary operators**:
   The ternary operator is a concise way to conditionally render elements within JSX. It is suitable for simple conditions.

3. **Using logical && operator**:
   The logical AND (`&&`) operator can be used to render an element only if a condition is true. If the condition is false, nothing is rendered.

4. **Using switch/case statements**:
   For multiple conditions, using a switch statement outside of the JSX can help organize and manage the different rendering options.

5. **Using immediate if (IIFE) or self-invoking functions**:
   This is useful when you need to include more complex logic within the JSX return statement.

# React Folder Structure and File Naming

## Importance of React Folder Structure and File Naming

### Readability and Maintainability

- A well-organized folder structure makes it easier to navigate the project, quickly find files and components.
- Consistent file naming helps developers quickly understand what each file contains and its role in the application.

### Scalability

- A thoughtful structure allows the application to grow without becoming cluttered. It also makes it easier to add new features and manage complexity.

### Team Collaboration

- In a collaborative development environment, clear structure and naming conventions enable all team members to work efficiently without getting lost in the code.

## How to Export a File

In React, you can export files in two ways: `export default` and `export named`.

### `export default`

This method allows you to export a default value from a file. It can be a class, function, object, etc.

# React Events

## What is an event?

An event is an action or occurrence recognized by software that may be handled by the software. Events can be generated by user actions such as clicks, key presses, and mouse movements, or by other occurrences like page loads and network responses.

## What is the difference between an HTML element event and React event?

- **HTML Element Event**: These are the native events provided by the browser's DOM API. They are written in lowercase, such as `onclick`, `onmouseover`, etc.
- **React Event**: These are the synthetic events provided by React, which are a cross-browser wrapper around the browser's native event. React events are written in camelCase, such as `onClick`, `onMouseOver`, etc. React's synthetic events are consistent across different browsers.

## Write at least 4 keyboard events?

1. `onKeyDown`
2. `onKeyPress`
3. `onKeyUp`
4. `onInput`

## Write at least 8 mouse events?

1. `onClick`
2. `onDoubleClick`
3. `onMouseDown`
4. `onMouseUp`
5. `onMouseEnter`
6. `onMouseLeave`
7. `onMouseMove`
8. `onMouseOver`
9. `onMouseOut`
10. `onContextMenu`

## What are the most common mouse and keyboard events?

- **Mouse Events**: `onClick`, `onDoubleClick`, `onMouseDown`, `onMouseUp`, `onMouseEnter`, `onMouseLeave`
- **Keyboard Events**: `onKeyDown`, `onKeyPress`, `onKeyUp`

## Write an event specific to input element?

`onInput`

## Write an event specific to form element?

`onSubmit`

## Display the coordinate of the view port when a mouse is moving on the body?

You can use the `onMouseMove` event on the `body` element to display the coordinates of the mouse.

## What is the difference between onInput, onChange and onBlur?

- **onInput**: This event is fired when the value of an `<input>`, `<textarea>`, or `<select>` element is changed. It is triggered immediately after the value changes.
- **onChange**: This event is fired when the value of an `<input>`, `<textarea>`, or `<select>` element is changed and the element loses focus (for `<input>` and `<textarea>`) or when a value is selected (for `<select>`).
- **onBlur**: This event is fired when an element loses focus. It is commonly used for validation when the user leaves the input field.

## Where do we put the onSubmit event?

The `onSubmit` event should be put on a `<form>` element.

# HTML Forms and Inputs

## What is the importance of form?

Forms are crucial in web development as they provide a way for users to submit data to a server. Forms are used for a variety of purposes, including user registration, login, data collection, and more. They enable user interaction and data submission, making them essential for dynamic and interactive web applications.

## How many input types do you know?

There are many input types in HTML. Some of them include:

- `text`
- `password`
- `email`
- `number`
- `date`
- `checkbox`
- `radio`
- `file`
- `submit`
- `button`
- `reset`
- `hidden`
- `url`
- `tel`
- `search`
- `range`
- `color`

## Mention at least four attributes of an input element

1. `type`
2. `name`
3. `value`
4. `placeholder`
5. `required`
6. `readonly`
7. `disabled`

## What is the importance of htmlFor?

The `htmlFor` attribute in a `<label>` element is used to associate the label with a specific input element. This association improves accessibility by allowing screen readers to provide more context to users. It also allows users to click on the label to focus or activate the corresponding input element.

## Write an input type which is not given in the example if there is?

`color`

```html
<input type="color" name="favcolor" value="#ff0000" />
```

## What is a controlled input?

A controlled input is an input element in a React component whose value is controlled by the component's state. This means that the value of the input field is set and managed by the React state, and any changes to the input field are handled by updating the state.

## What do you need to write a controlled input?

To write a controlled input in React, you need:

1. A piece of state to hold the input's value.
2. An `onChange` event handler to update the state when the input's value changes.

## What event type do you use to listen changes on an input field?

`onChange`

## What is the value of a checked checkbox?

The value of a checked checkbox is the value specified in the `value` attribute. If no value attribute is specified, the default value is `"on"`.

## When do you use onChange, onBlur, onSubmit?

- **onChange**: Used to handle changes in the input fields, such as typing into a text field or changing the value of a select dropdown.
- **onBlur**: Used to handle events when an input field loses focus, often used for validation purposes.
- **onSubmit**: Used to handle form submission events, typically to collect and process form data.

## What is the purpose of writing e.preventDefault() inside the submit handler method?

The purpose of `e.preventDefault()` inside the submit handler is to prevent the default form submission behavior, which typically involves sending the form data to the server and reloading the page. By preventing the default behavior, you can handle the form submission using JavaScript, such as making an AJAX request to submit the data without reloading the page.

## How do you bind data in React? The first input field example is data binding in React.

In React, data binding is achieved by linking the component's state to the value of an input element. This is done using the `value` attribute for the input element and an `onChange` event handler to update the state when the input value changes.

```javascript
import React, { useState } from 'react';

function Example() {
  const [value, setValue] = useState('');

  return (
    <input type="text" value={value} onChange={e => setValue(e.target.value)} />
  );
}
```

## What is validation?

Validation is the process of checking if the data entered into a form meets specific criteria or requirements before the data is processed or submitted. This can include checking if required fields are filled out, if the input matches a specific pattern, or if the value is within a valid range. Validation ensures that the data submitted by the user is accurate, complete, and formatted correctly.

## What is the event type you use to listen when an input changes?

`onChange`

## What are event types do you use to validate an input?

- **onChange**: Validate the input as the user types.
- **onBlur**: Validate the input when the user leaves the input field.
- **onSubmit**: Validate the entire form when it is submitted.

# React Input Management

## What is a controlled input?

A controlled input is an input element in a React component whose value is controlled by the component's state. This means that the value of the input field is set and managed by the React state, and any changes to the input field are handled by updating the state.

## What is an uncontrolled input?

An uncontrolled input is an input element in a React component that maintains its own internal state. Instead of relying on React state to manage the input value, you access the value directly from the DOM using refs.

## How do you get the content of a certain HTML element in React?

To get the content of a certain HTML element in React, you typically use refs. Refs provide a way to access the DOM nodes or React elements created in the render method.

## Why it is not a good idea to touch the DOM directly in React?

Touching the DOM directly in React is not a good idea because it can lead to inconsistencies between the React virtual DOM and the actual DOM. React's declarative nature and virtual DOM are designed to efficiently manage and update the UI, and direct DOM manipulation can interfere with this process, leading to bugs and unpredictable behavior.

## What is most frequently used in React? Controlled or Uncontrolled input.

Controlled inputs are most frequently used in React because they provide better control over the form data and allow for more consistent and predictable state management.

## What do you need to write uncontrolled input?

To write an uncontrolled input, you need to use refs to access the input's value directly from the DOM.

## Does state require to write uncontrolled input?

No, state is not required to write an uncontrolled input. The input's value is managed by the DOM itself, and you access the value using refs.

## When do you use uncontrolled input?

Uncontrolled inputs are typically used in simple forms or when you need quick access to the input's value without the overhead of managing state. They are useful when integrating with third-party libraries that expect DOM elements.

## When do you use controlled input?

Controlled inputs are used when you need to manage the input's value through the React state. They are essential for form validation, dynamic forms, and when you need to perform actions based on the input's value in real-time.

## Do you use a controlled or uncontrolled input to validate form input fields?

Controlled inputs are used to validate form input fields because they provide direct control over the input's value through the React state, making it easier to implement and manage validation logic.

# React Component Life Cycles

## What is component life cycles?

Component life cycles refer to the sequence of events that happen from the creation to the destruction of a React component. These events allow developers to hook into specific points of a component's existence to perform actions such as fetching data, updating the DOM, or cleaning up resources.

## What is the purpose of life cycles?

The purpose of life cycles is to give developers control over what happens at different stages of a component's life. This includes managing side effects, optimizing performance, and ensuring resources are properly allocated and cleaned up.

## What are the three stages of a component life cycle?

1. **Mounting**: When the component is being created and inserted into the DOM.
2. **Updating**: When the component is being re-rendered due to changes in state or props.
3. **Unmounting**: When the component is being removed from the DOM.

## What does mounting mean?

Mounting refers to the process of creating a component and inserting it into the DOM for the first time. This is when the component initializes and renders for the first time.

## What does updating mean?

Updating refers to the process of re-rendering a component due to changes in its state or props. This can happen multiple times during the component's life as the data it relies on changes.

## What does unmounting mean?

Unmounting refers to the process of removing a component from the DOM. This is when the component is destroyed and any cleanup tasks are performed.

## What is the most common built-in mounting life cycle method?

The most common built-in mounting life cycle method is `componentDidMount`.

## What are the mounting life cycle methods?

1. **`constructor`**: Initializes the component's state and binds methods.
2. **`getDerivedStateFromProps`**: Syncs state with props when the component is created.
3. **`render`**: Returns the JSX to render the component.
4. **`componentDidMount`**: Invoked immediately after the component is inserted into the DOM. It's a good place to fetch data or set up subscriptions.

## What are the updating life cycle methods?

1. **`getDerivedStateFromProps`**: Syncs state with props when the component is updated.
2. **`shouldComponentUpdate`**: Determines if a re-render is necessary.
3. **`render`**: Returns the JSX to update the component.
4. **`getSnapshotBeforeUpdate`**: Captures some information from the DOM before it is potentially changed.
5. **`componentDidUpdate`**: Invoked immediately after the component updates. It's a good place to operate on the DOM after the changes have been flushed.

## What is the unmounting life cycle method?

1. **`componentWillUnmount`**: Invoked immediately before the component is removed from the DOM. It's a good place to clean up subscriptions, timers, or any other resources that were set up in `componentDidMount`.

# JavaScript Packages

## What is a package?

A package is a collection of files and code that are bundled together to provide specific functionality that can be easily shared and reused. In the context of JavaScript, a package is usually a library or module that can be installed and used in a project to add features or functionality.

## What is a third party package?

A third party package is a package that is developed and maintained by someone other than the primary developers of the project. These packages are made available for public use and can be installed from package registries such as npm.

## Do you have to use third party packages?

No, you do not have to use third party packages. However, using them can save time and effort by leveraging pre-built solutions for common tasks and functionalities, allowing you to focus on the unique aspects of your project.

## How do you know the popularity and stability of a third party package?

To determine the popularity and stability of a third party package, you can check:

- **npm statistics**: Number of downloads, stars, and forks on npm.
- **GitHub repository**: Number of stars, forks, issues, and pull requests.
- **Community and maintenance**: Frequency of updates, responsiveness of maintainers, and community support.
- **Documentation**: Quality and comprehensiveness of the documentation.
- **Usage**: References and usage in other popular projects.

## How many JavaScript packages are there on the npm registry?

As of now, there are over one million JavaScript packages available on the npm registry.

## How do you install a third party package?

You can install a third party package using npm or yarn. For example, to install a package using npm:

```bash
npm install package-name
```

## What packages do you use most frequently?

The packages used most frequently can vary depending on the project, but common ones include:

- **React**: For building user interfaces.
- **axios** or **fetch**: For making HTTP requests.
- **lodash**: For utility functions.
- **classnames**: For conditionally applying CSS class names.
- **moment** or **date-fns**: For date manipulation.

## What package do you use to fetch data?

To fetch data, the most commonly used packages are:

- **axios**
- **fetch** (native JavaScript method, but often wrapped for additional features)

## What is the purpose of classnames package?

The purpose of the `classnames` package is to conditionally join CSS class names together. It allows you to apply class names dynamically based on certain conditions, making it easier to manage CSS classes in your components.

## What is the purpose of validator package?

The purpose of the `validator` package is to provide a set of string validation and sanitization functions. It helps in validating and sanitizing user inputs to ensure they meet certain criteria, such as valid email addresses, URLs, and other common data formats.

# Higher Order Component

## What is a Higher Order Function?

A higher order function is a function that either takes one or more functions as arguments, returns a function as its result, or both. Higher order functions are a powerful concept in functional programming and are commonly used in JavaScript for tasks such as iterating over collections, composing functions, and more.

Examples of higher order functions include `map`, `filter`, and `reduce`.

## What is a Higher Order Component?

A Higher Order Component (HOC) is an advanced technique in React for reusing component logic. An HOC is a function that takes a component and returns a new component with enhanced capabilities. HOCs are used to abstract and share common functionality between components without repeating code.

## What is the difference between Higher Order Function and Higher Order Component?

1. **Purpose and Usage**:

   - **Higher Order Function**: Aims to abstract and reuse logic by taking functions as arguments and/or returning functions. It is a core concept in functional programming and is not specific to any particular library or framework.
   - **Higher Order Component**: A specific pattern in React used to enhance components by adding extra functionality. It takes a component as an argument and returns a new component.

2. **Context**:

   - **Higher Order Function**: Used broadly in JavaScript and other functional programming contexts.
   - **Higher Order Component**: Specific to React and used for extending the functionality of React components.

3. **Examples**:
   - **Higher Order Function**: `map`, `filter`, `reduce` in JavaScript.
   - **Higher Order Component**: `withRouter`, `connect` from `react-redux`.

## A higher order component can allow us to enhance a component. (T or F)

**True**. A Higher Order Component (HOC) allows us to enhance a component by wrapping it with additional functionality. This technique is useful for sharing common logic between components, such as handling authentication, data fetching, or adding styling, without repeating code in each component.

# React Router

## What package do you use to implement routing in React?

To implement routing in React, you use the `react-router-dom` package.

## What is the default export in `react-router-dom`?

The default export in `react-router-dom` is `BrowserRouter`.

## What is the use of the following Components?

- **Route**:
  The `Route` component is used to render UI when its path matches the current URL. It allows you to define which component should be rendered for a specific route.

- **NavLink**:
  The `NavLink` component is a special type of link that adds styling attributes to the rendered element when it matches the current URL. It's used for navigation links with active styling.

- **Switch**:
  The `Switch` component is used to group multiple `Route` components. It renders the first `Route` that matches the current URL, ensuring that only one route is rendered at a time.

- **Redirect**:
  The `Redirect` component is used to programmatically navigate the user to a different route. It can be used to redirect users from one route to another.

- **Prompt**:
  The `Prompt` component is used to prompt the user before navigating away from the current page. It can be useful for confirming navigation actions that might result in unsaved changes being lost.
