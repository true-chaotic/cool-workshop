import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  const callServerProcess = () => {
    window.workshopApi.uploadSite({
      login: 'login',
      password: 'password',
      folder: '/var/www/site',
    });
  };

  return (
    <div>
      <h2>Hello from React!</h2>
      <button type="button" onClick={callServerProcess}>Upload stuff</button>
    </div>
  );
}

function render() {
  ReactDOM.render(<App />, document.getElementById('container'));
}

render();
