import { useMsal } from '@azure/msal-react';
import { useQuery } from '@tanstack/react-query';

import './App.css';

function App() {
  const { instance, accounts, inProgress } = useMsal();
  const { isLoading, error, data } = useQuery(['query'], async () => {
    const authResult = await instance.acquireTokenSilent({ scopes: [], account: accounts[0] });
    const token = authResult?.accessToken;
    const res = await fetch(import.meta.env.VITE_TEST_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.text();
  });

  return (
    <div className="App">
      <h3>Test App</h3>
      <dl>
        <dt>MSAL.inProgress</dt>
        <dd>{inProgress}</dd>
        <dt>MSAL.accounts</dt>
        <dd>{JSON.stringify(accounts, null, 2)}</dd>
        <dt>RQ.isLoading</dt>
        <dd>{isLoading ? 'true' : 'false'}</dd>
        <dt>RQ.error</dt>
        <dd>{JSON.stringify(error, null, 2)}</dd>
        <dt>RQ.data</dt>
        <dd>{JSON.stringify(data, null, 2)}</dd>
      </dl>
    </div>
  );
}

export default App;
