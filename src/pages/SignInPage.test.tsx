// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import SignInPage from './SignInPage';
// import { Provider } from 'react-redux';
// import store from '../store';
// import { BrowserRouter } from 'react-router-dom';
// import * as authAPI from '../api/auth';

// jest.mock('../api/auth');

// describe('SignInPage', () => {
//   test('renders sign in form', () => {
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <SignInPage />
//         </BrowserRouter>
//       </Provider>
//     );

//     expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
//   });

//   test('handles successful sign in', async () => {
//     (authAPI.signIn as jest.Mock).mockResolvedValue({ token: 'fake-token' });

//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <SignInPage />
//         </BrowserRouter>
//       </Provider>
//     );

//     fireEvent.change(screen.getByLabelText(/Email/i), {
//       target: { value: 'test@example.com' },
//     });
//     fireEvent.change(screen.getByLabelText(/Password/i), {
//       target: { value: 'password' },
//     });

//     fireEvent.click(screen.getByText(/Sign In/i));

//     await waitFor(() => {
//       expect(authAPI.signIn).toHaveBeenCalledWith('test@example.com', 'password');
//     });

//     // Additional assertions can be made here, such as redirecting to dashboard
//   });

//   test('handles sign in error', async () => {
//     (authAPI.signIn as jest.Mock).mockRejectedValue(new Error('Invalid credentials'));

//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <SignInPage />
//         </BrowserRouter>
//       </Provider>
//     );

//     fireEvent.change(screen.getByLabelText(/Email/i), {
//       target: { value: 'wrong@example.com' },
//     });
//     fireEvent.change(screen.getByLabelText(/Password/i), {
//       target: { value: 'wrongpassword' },
//     });

//     fireEvent.click(screen.getByText(/Sign In/i));

//     await waitFor(() => {
//       expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
//     });
//   });
// });

// // Adding this empty export ensures the file is treated as a module
// export {};







import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignInPage from './SignInPage';
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter } from 'react-router-dom';
import * as authAPI from '../api/auth';

jest.mock('../api/auth');

describe('SignInPage', () => {
  test('renders sign in form', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  test('handles successful sign in', async () => {
    (authAPI.signIn as jest.Mock).mockResolvedValue({ token: 'fake-token' });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInPage />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'password' },
    });

    fireEvent.click(screen.getByText(/Sign In/i));

    await waitFor(() => {
      expect(authAPI.signIn).toHaveBeenCalledWith('test@example.com', 'password');
    });

    // Additional assertions can be made here, such as redirecting to dashboard
  });

  test('handles sign in error', async () => {
    (authAPI.signIn as jest.Mock).mockRejectedValue(new Error('Invalid credentials'));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInPage />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'wrong@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'wrongpassword' },
    });

    fireEvent.click(screen.getByText(/Sign In/i));

    await waitFor(() => {
      expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
    });
  });
});
export {};