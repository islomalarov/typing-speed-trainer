import React, { useState } from 'react';
import TextDisplay from './components/TextDisplay';
import TextInput from './components/TextInput';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const sampleText = 'This is a sample text for typing.';

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleRestart = () => {
    setUserInput('');
  };

  return (
    <div>
      <TextDisplay text={sampleText} userInput={userInput} />
      <TextInput
        userInput={userInput}
        handleInputChange={handleInputChange}
        onRestart={handleRestart}
      />
    </div>
  );
};

export default App;
