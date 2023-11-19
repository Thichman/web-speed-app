// api/googleSpeedTestApi.js
const apiUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

const apiKey = ''; // <-----Replace with your actual API key from googlePageSpeed insights

export const getGoogleSpeedTestResults = async (url) => {

    try {
        const response = await fetch(`${apiUrl}?url=${url}&key=${apiKey}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching PageSpeed Insights results:', error);
        throw error;
    }
};