import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const google_client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';


// console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)

const Auth: React.FC = () => {
  const responseGoogle = (response: any) => {
    console.log(jwtDecode(response.credential));
    // Handle the Google authentication response
  };

  return (
    <GoogleOAuthProvider clientId={google_client_id}>
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
