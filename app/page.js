'use client'

import { useState } from 'react';
import GoogleSpeedTest from './components/googleSpeedTest';


export default function Home() {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleWebsiteUrlChange = (event) => {
    setWebsiteUrl(event.target.value);
  };

  const handleShowResults = () => {
    setShowResults(true);
    setLoading(true)
  };

  const handleTestNewWebsite = () => {
    window.location.reload();
  };

  return (
    <div className="bg-light-blue p-4">
      <div className="my-8">
        <h2 className="text-3xl font-bold mb-4">Test Your Websites Speed:</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Enter Website URL:
          </label>
          <input
            type="text"
            value={websiteUrl}
            onChange={handleWebsiteUrlChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black"
          />
        </div>
        {!loading ? (
          <button
            onClick={handleShowResults}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Run Speed Test
          </button>
        ) : (

          <button
            onClick={handleTestNewWebsite}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Test a New Website
          </button>
        )}

        {showResults && <GoogleSpeedTest websiteUrl={websiteUrl} />}

      </div>
    </div>
  );
}
