import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMTestUtils from 'react-dom/test-utils';

import {useInstagram} from '../src';

const TestHook = ({ callback }: { callback: any }) => {
  callback();
  return null;
};

let container: any = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

/**
 * ToDo[Fix]:  Error: Cross origin http://localhost forbidden
 */
// test('values have correct types', async (done) => {
//   let actual: any = null;

//   ReactDOMTestUtils.act(() => {
//     ReactDOM.render(
//       <TestHook
//         callback={() => {
//           actual = useInstagram('katalonne');
//         }}
//       />,
//       container
//     );
//   });
//   await new Promise((r) => setTimeout(r, 2000));

//   expect(typeof actual.followers).toBe('number');
//   expect(typeof actual.following).toBe('number');
//   expect(typeof actual.isPrivate).toBe('boolean');
//   expect(typeof actual.isVerified).toBe('boolean');
//   expect(typeof actual.posts).toBe('number');
//   expect(typeof actual.profileImage).toBe('string');
//   done()
// });

test('should be null, wrong username', async () => {
  let actual: any = null;

  ReactDOMTestUtils.act(() => {
    ReactDOM.render(
      <TestHook
        callback={() => {
          actual = useInstagram('');
        }}
      />,
      container
    );
  });

  expect(actual).toBe(null);
});