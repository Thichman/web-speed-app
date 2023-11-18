// components/GoogleSpeedTest.js
//https://tailwindcomponents.com/

import React, { useState, useEffect } from 'react';
import { getGoogleSpeedTestResults } from '../Api/googleSpeedAPI';


const GoogleSpeedTest = ({ websiteUrl }) => {
    const [websiteUrl1, setWebsiteUrl] = useState('');
    const [results, setResults] = useState(null);

    const handleWebsiteUrlChange = (event) => {
        setWebsiteUrl(event.target.value);
    };

    const handleRunSpeedTest = async () => {
        const result = await getGoogleSpeedTestResults(websiteUrl1);
        console.log(result)
        setResults(result)
    };

    return (
        <div>
            <h1>Website Speed Test App</h1>
            <label>
                Enter Website URL:
                <input type="text" onChange={handleWebsiteUrlChange} className='text-black' />
            </label>

            <button onClick={handleRunSpeedTest}>Run Speed Test</button>

            {results && (
                <div className="my-8">
                    <h2 className="text-2xl font-bold mb-4">Speed Test Results:</h2>
                    <p className="mb-2">Page tested:</p>
                    <h3 className="text-xl font-bold mb-2">Page Speed Insights Report Results:</h3>
                    <div className="border p-4 rounded-md bg-gray-100 mb-4">
                        <h4 className="block antialiased font-sans relative my-5 text-4xl font-bold leading-tight tracking-normal text-black md:text-3xl">Lighthouse Results:</h4>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Cumulative Layout Shift: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Description: {JSON.stringify(results.lighthouseResult.audits['cumulative-layout-shift'].description)}</p>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Load Time: {JSON.stringify(results.lighthouseResult.audits['cumulative-layout-shift'].displayValue)}</p>

                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Largest Contentful Paint: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Description: {JSON.stringify(results.lighthouseResult.audits['largest-contentful-paint'].description)}</p>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Load Time: {JSON.stringify(results.lighthouseResult.audits['largest-contentful-paint'].displayValue)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> First Contentful Paint: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Description: {JSON.stringify(results.lighthouseResult.audits['first-contentful-paint'].description)}</p>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Load Time: {JSON.stringify(results.lighthouseResult.audits['first-contentful-paint'].displayValue)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Speed Index: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Description: {JSON.stringify(results.lighthouseResult.audits['speed-index'].description)}</p>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Load Time: {JSON.stringify(results.lighthouseResult.audits['speed-index'].displayValue)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> First Meaningful Paint: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Description: {JSON.stringify(results.lighthouseResult.audits['first-meaningful-paint'].description)}</p>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Load Time: {JSON.stringify(results.lighthouseResult.audits['first-meaningful-paint'].displayValue)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Time to Interactive: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Description: {JSON.stringify(results.lighthouseResult.audits['interactive'].description)}</p>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Load Time: {JSON.stringify(results.lighthouseResult.audits['interactive'].displayValue)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Server Response Time: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Description: {JSON.stringify(results.lighthouseResult.audits['server-response-time'].description)}</p>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Load Time: {JSON.stringify(results.lighthouseResult.audits['server-response-time'].displayValue)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Render Blocking Resources: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Description: {JSON.stringify(results.lighthouseResult.audits['render-blocking-resources'].description)}</p>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Numeric Value: {JSON.stringify(results.lighthouseResult.audits['render-blocking-resources'].numericValue)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Total Blocking Time: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Description: {JSON.stringify(results.lighthouseResult.audits['total-blocking-time'].description)}</p>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Numeric Value: {JSON.stringify(results.lighthouseResult.audits['total-blocking-time'].numericValue)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Max Potential First Input Delay: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Description: {JSON.stringify(results.lighthouseResult.audits['max-potential-fid'].description)}</p>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Max Delay Value: {JSON.stringify(results.lighthouseResult.audits['max-potential-fid'].displayValue)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Payload Rating: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Description: {JSON.stringify(results.lighthouseResult.audits['total-byte-weight'].description)}</p>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Max Delay Value: {JSON.stringify(results.lighthouseResult.audits['total-byte-weight'].displayValue)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Third Party Usage: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Description: {JSON.stringify(results.lighthouseResult.audits['third-party-summary'].description)}</p>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Max Delay Value: {JSON.stringify(results.lighthouseResult.audits['third-party-summary'].displayValue)}</p>
                        </div>

                    </div>

                </div>
            )
            }
        </div >
    );
}
export default GoogleSpeedTest;
