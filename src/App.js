import React from 'react';
import List from './List'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      store: this.props
    }
  }

  
  
  render (){
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
            <List />
        </div>
      </main>
  )}
}

export default App;