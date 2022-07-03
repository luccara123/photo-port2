import React from 'react';
import { render, cleanup } from '@testing-library/react';
// The render function will do just what its name implies: "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).

// The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import '@testing-library/jest-dom/extend-expect';
// jest-dom offers access to custom matchers that are used to test DOM elements.
import About from '..';
afterEach(cleanup); // afterEach is a global function

describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
  
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
      });
  })
// asFragment function, which returns a snapshot of the About component.
  // In the first argument, a string declares what is being tested. In the second argument, a callback function runs the test.
  // The index.test.js.snap file is a serialized version of the component's node structure, which includes elements, attributes, and text content. This file, stored in the __snapshots__ folder, will serve as the base model of the component's structure, and will be compared against new snapshots that are created by the asFragment function.