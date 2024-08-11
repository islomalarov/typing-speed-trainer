import React from 'react';
import TextDisplay from './components/TextDisplay';
import TextInput from './components/TextInput';
import Statistics from './components/Statistics';

const App = () => {
  return (
    <div>
      <TextDisplay />
      <TextInput />
      <Statistics />
    </div>
  );
};

export default App;
