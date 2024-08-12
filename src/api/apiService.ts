
// Utility function to handle HTTP requests
const apiRequest = async (url: string, method: string, body?: any) => {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  // Sign Up function
  export const signUp = async (email: string, password: string) => {
    const url = 'https://reqres.in/api/register';
    return apiRequest(url, 'POST', { email, password });
  };
  
  // Sign In function
  export const signIn = async (email: string, password: string) => {
    const url = 'https://reqres.in/api/login';
    return apiRequest(url, 'POST', { email, password });
  };
  
  // Get list of users function
  export const getUsers = async () => {
    const url = 'https://reqres.in/api/users';
    return apiRequest(url, 'GET');
  };
  
  // Get single user function
  export const getUser = async (id: number) => {
    const url = `https://reqres.in/api/users/${id}`;
    return apiRequest(url, 'GET');
  };
  