import React from 'react';
import '../src/components/sass/global-styles.scss';
import LinkAbout from './components/atoms/Link/link-about';
import LinkMe from './components/atoms/Link/link-me';
import LinkWork from './components/atoms/Link/link-work';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
        <LinkAbout />
        <LinkMe />
        <LinkWork />
      </div>
      
    </div>
  );
}

export default App;
