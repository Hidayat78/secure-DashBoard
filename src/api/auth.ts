// src/api/auth.ts

// Function for signing up a user
export const signUp = async (email: string, password: string) => {
  const response = await fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

// Function for signing in a user
export const signIn = async (email: string, password: string) => {
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};










// export const signIn = async (email: string, password: string) => {
//     // Your sign-in logic here
//     const response = await fetch('/api/signin', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (!response.ok) {
//       throw new Error('Sign-in failed');
//     }
  
//     return response.json();
//   };
  
















// // import apiClient from './axios';

// // interface AuthResponse {
// //   token: string;
// // }

// // export const signIn = async (email: string, password: string): Promise<AuthResponse> => {
// //   const response = await apiClient.post('/login', { email, password });
// //   return response.data;
// // };

// // export const signUp = async (email: string, password: string): Promise<AuthResponse> => {
// //   const response = await apiClient.post('/register', { email, password });
// //   return response.data;
// // };
