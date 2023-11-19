// components/GoogleSpeedTest.js
//https://tailwindcomponents.com/

import { useState, useEffect } from 'react';
import { getGoogleSpeedTestResults } from '../Api/googleSpeedAPI';


const GoogleSpeedTest = ({ websiteUrl }) => {
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {

        const fetchData = async () => {
            try {
                const result = await getGoogleSpeedTestResults(websiteUrl);
                console.log(result)
                setResults(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData()
    }, [websiteUrl])


    return (
        <div>
            {loading ? (
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-opacity-50"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            ) : (
                results && (<div className="my-8">
                    <h2 className="text-2xl font-bold mb-4">Speed Test Results:</h2>
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
                    <br></br>

                    <div className="border p-4 rounded-md bg-gray-100 mb-4">
                        <h4 className="block antialiased font-sans relative my-5 text-4xl font-bold leading-tight tracking-normal text-black md:text-3xl">Loading Experience Results:</h4>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Overall Score: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Rating: {JSON.stringify(results.loadingExperience.overall_category)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Cumulative Layout Shift Score: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Rating: {JSON.stringify(results.loadingExperience.metrics['CUMULATIVE_LAYOUT_SHIFT_SCORE'].category)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Time to First Byte Score: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Rating: {JSON.stringify(results.loadingExperience.metrics['EXPERIMENTAL_TIME_TO_FIRST_BYTE'].category)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> First Contentful Paint Score: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Rating: {JSON.stringify(results.loadingExperience.metrics['FIRST_CONTENTFUL_PAINT_MS'].category)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Largest Contentful Paint Score: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Rating: {JSON.stringify(results.loadingExperience.metrics['LARGEST_CONTENTFUL_PAINT_MS'].category)}</p>
                        </div>
                    </div>
                    <br></br>

                    <div className="border p-4 rounded-md bg-gray-100 mb-4">
                        <h4 className="block antialiased font-sans relative my-5 text-4xl font-bold leading-tight tracking-normal text-black md:text-3xl">Overall Loading Experience Results:</h4>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Overall Score: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Rating: {JSON.stringify(results.originLoadingExperience.overall_category)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Cumulative Layout Shift Score: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Rating: {JSON.stringify(results.originLoadingExperience.metrics['CUMULATIVE_LAYOUT_SHIFT_SCORE'].category)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Time to First Byte Score: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Rating: {JSON.stringify(results.originLoadingExperience.metrics['EXPERIMENTAL_TIME_TO_FIRST_BYTE'].category)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> First Contentful Paint Score: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Rating: {JSON.stringify(results.originLoadingExperience.metrics['FIRST_CONTENTFUL_PAINT_MS'].category)}</p>
                        </div>
                        <div className="ml-4">
                            <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black"> Largest Contentful Paint Score: </h5>
                            <p className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Rating: {JSON.stringify(results.originLoadingExperience.metrics['LARGEST_CONTENTFUL_PAINT_MS'].category)}</p>
                        </div>
                    </div>

                </div>


                )
            )}
        </div >
    );
}
export default GoogleSpeedTest;
