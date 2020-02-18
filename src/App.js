import React from 'react';
import List from './List'

class App extends React.Component{
  
  render (){
    return (
      <main class="App">
        <header class="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div class="App-list">
            <List />
        </div>
      </main>
  )}
}

export default App;