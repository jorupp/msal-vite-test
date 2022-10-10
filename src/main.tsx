import React from 'react';
import ReactDOM from 'react-dom/client';
import { MsalProvider, MsalAuthenticationTemplate } from '@azure/msal-react';
import { Configuration, PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import './index.css';

// react-query configuration
const queryClient = new QueryClient();

// MSAL configuration
const configuration: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_CLIENT_ID,
    authority: import.meta.env.VITE_CLIENT_AUTHORITY,
  },
};

const pca = new PublicClientApplication(configuration);

function ErrorComponent({ error }: any) {
  return <p>An Error Occurred: {JSON.stringify(error, null, 2)}</p>;
}

function LoadingComponent() {
  return <p>Authentication in progress...</p>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        errorComponent={ErrorComponent}
        loadingComponent={LoadingComponent}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </MsalAuthenticationTemplate>
    </MsalProvider>
  </React.StrictMode>
);
