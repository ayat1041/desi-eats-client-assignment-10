import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const windowHeight = window.innerHeight;
const documentHeight = document.documentElement.scrollHeight;
const fullHeight = Math.max(windowHeight, documentHeight);
const options = {
    orientation: 'landscape',
    unit: 'px',
    format: [window.innerWidth, fullHeight]
};
const Blogs = () => {
  return (
    <div className="conainer_blog" ref={ref}>
      <div className="text-center p-4 mt-6">
        <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
          {({ toPdf }) => (
            <div>
              <button
                onClick={toPdf}
                className="btn bg-orange-600 my-5 w-[80vw] lg:w-[50vw] border-0 shadow-lg hover:bg-red-600"
              >
                Export to PDF
              </button>
            </div>
          )}
        </Pdf>
        <div>
          <p className="text-orange-500 font-bold text-2xl mb-4 text-left drop-shadow-md">
            Differences between uncontrolled and controlled components.
          </p>
          <p className="text-justify drop-shadow-lg mb-6">
            In React, controlled components are those that are controlled by
            state, while uncontrolled components are those that are not.
            Controlled components are typically used when you need to manage
            form input values, while uncontrolled components are useful when you
            want to get the value of a form field without needing to update its
            state.
          </p>

          <p className="text-orange-500 font-bold text-2xl mb-4 text-left drop-shadow-md">
            How to validate React props using PropTypes ?
          </p>
          <p className="text-justify drop-shadow-lg mb-6">
            To validate React props using PropTypes, you first need to install
            the PropTypes library using the npm install prop-types command.
            Then, import PropTypes at the top of your component file using
            import PropTypes from 'prop-types';. Next, define the expected types
            for your props in the component's propTypes object, using the
            appropriate PropTypes validators such as string, number, array,
            object, etc. Finally, pass the props to the component and the
            PropTypes library will automatically validate them, throwing
            warnings in the console if the expected types are not met. This
            helps to catch errors and ensure that the props are of the expected
            type, making the code more robust and maintainable.
          </p>

          <p className="text-orange-500 font-bold text-2xl mb-4 text-left drop-shadow-md">
            Tell us the difference between nodejs and express js. ?
          </p>
          <p className="text-justify drop-shadow-lg mb-6">
            Node.js is a runtime environment for executing JavaScript code
            outside of a web browser, while Express.js is a web framework that
            is built on top of Node.js and provides a set of features for
            building web applications and APIs.
          </p>

          <p className="text-orange-500 font-bold text-2xl mb-4 text-left drop-shadow-md">
            What is a custom hook, and why will you create a custom hook?
          </p>
          <p className="text-justify drop-shadow-lg mb-6">
            A custom hook is a reusable piece of code that contains some logic
            and allows you to share functionality between components in React.
            You might create a custom hook to abstract away complex logic,
            reduce duplication, or create a common interface for your components
            to interact with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
