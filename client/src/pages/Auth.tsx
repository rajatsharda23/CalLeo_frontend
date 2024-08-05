// src/pages/Auth.tsx

import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Auth: React.FC = () => {
  const responseGoogle = (response: any) => {
    console.log(response);
    // Handle the Google authentication response
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="mt-16 p-8 flex justify-center items-center flex-col">
        <h1 className="text-3xl font-playfair-display mb-4">Login with Google</h1>
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={responseGoogle}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Auth;
