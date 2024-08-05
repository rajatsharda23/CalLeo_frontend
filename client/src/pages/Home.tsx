// src/pages/Home.tsx

import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="mt-16 p-8">
      <section className="text-center py-20 bg-deep-navy-blue text-white">
        <h1 className="text-4xl font-playfair-display mb-4">Effortlessly Manage Your Calendar with AI</h1>
        <p className="text-xl mb-8">Create, Update, and Delete Events in Google Calendar with Ease.</p>
        <button className="bg-pastel-green text-deep-navy-blue px-6 py-2 rounded-full font-semibold">Get Started</button>
      </section>
      
      <section className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">AI-Powered Event Management</h2>
            <p className="text-gray-600">Use AI to manage your events seamlessly.</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Google Calendar Integration</h2>
            <p className="text-gray-600">Sync effortlessly with Google Calendar.</p>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Minimalistic Interface</h2>
            <p className="text-gray-600">Enjoy a clean and modern design.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
