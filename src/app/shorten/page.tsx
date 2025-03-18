/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from "react";
import axios from 'axios';
import toast, {Toaster} from "react-hot-toast";

export default function Home() {
  const [url, setUrl] = React.useState({
    longUrl: ""
  });
  const [shortUrl, setShortUrl] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    
    try {
        const res = await axios.post('/api/url/shorten', url)
        console.log(res)
        setShortUrl(res.data.newUrl.shortUrl)
        toast.success("Url shortened successfully, visit using the link below", {
          duration: 3000
        });
    } catch (err:any) {
      setError('Failed to send long url');
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '16px',
          },
        }}
      />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
        {/* <div className="mx-auto space-y-8"> */}
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Chutki <span className="text-blue-600 dark:text-blue-400">URL</span></h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              Make sure you enter a valid link to shorten.
              Feel free to use it as much as want, but don&apos;t spam🤨.
            </p>
        
          <input
            type="url"
            value={url.longUrl}
            onChange={(e) => setUrl({...url, longUrl: e.target.value})}
            placeholder="Enter your URL here"
            className="w-full md:w-5xl p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 ease-in-out"
            required
          />
          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className="transform rounded-xl bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {loading ? 'Shortening...' : 'Shorten URL'}
          </button>

        {error && (
          <div className="p-4 text-red-500 bg-red-50 rounded">
            {error}
          </div>
        )}

        {shortUrl && (
          <div className="p-4rounded">
            <p className="font-bold">Shortened URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline break-all"
            >
              {shortUrl}
            </a>
          </div>
        )}
         </div>
        </div>
      </div>
      </>
  );
}