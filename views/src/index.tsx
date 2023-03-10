import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import Head from './Head';
import App from './App';
import reportWebVitals from './test/reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <HelmetProvider>
            <Head />
        </HelmetProvider>
        <App />
    </React.StrictMode>
);


reportWebVitals();
