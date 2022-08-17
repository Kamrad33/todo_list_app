import React, {useState, useEffect} from 'react';
import './styles/App.css';
import AppContainer from './components/UI/container/AppContainer';
import AppHeader from './components/UI/header/AppHeader';
import TaskItem from './components/TaskItem'

function App() {
  return (
    <div className="App">
    <AppHeader>
    <AppContainer style={{
      backgroundColor: 'blue',
      minWidth: '100px',
      minHeight: '100px',
      flex: '0 0 100px',
    }}>Icon</AppContainer>
    <AppContainer style = {{
      backgroundColor: 'green',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    }}>
    <text>
    Todo
    </text>
    <button>+</button>
    </AppContainer>
    </AppHeader>
    <AppContainer style = {{
      backgroundColor: 'grey',
      display: 'flex',
      margin: 'auto',
      height: 'calc(100vh - 100px)',

    }}>
    <AppContainer style = {{
      display: 'flex',
      flexDirection: 'column',
      margin: '5px',
    }}>
    <input type="checkbox" id="click" />
    <text>Hide done</text>
    <text>Work</text>
    <text>Study</text>
    <text>Entertaiment</text>
    <text>Family</text>
    </AppContainer>
    <AppContainer style = {{
      backgroundColor: '#ffffff',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      overflow: 'auto',
    }}>
    <div style = {{
      backgroundColor: '#fff1ae',
      display: 'flex',
      flex: '0 0 40vw',
      margin: '25px',
      height: 'auto',
      minHeight: '20vh',
      minWidth: '20vw',
      borderRadius:'10px',
    }}>

      </div>
      <div style = {{
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        display: 'flex',
        flex: '0 0 calc(60vh)',
        margin: '20px',
      }}>
        </div>
        <TaskItem/>
        <div style = {{
          backgroundColor: 'grey',
          flex: '0 0 40vw',
          margin: '25px',
          height: 'auto',
          minHeight: '20vh',
        }}>
          </div>
          <div style = {{
            backgroundColor: 'grey',
            flex: '0 0 40vw',
            margin: '25px',
            height: 'auto',
            minHeight: '20vh',

          }}>
            </div>
            <div style = {{
              backgroundColor: 'grey',
              flex: '0 0 40vw',
              margin: '25px',
              height: 'auto',
              minHeight: '20vh',
            }}>
              </div>
              <div style = {{
                backgroundColor: 'grey',
                flex: '0 0 40vw',
                margin: '25px',
                height: 'auto',
                minHeight: '20vh',
              }}>
                </div>
                <div style = {{
                  backgroundColor: 'grey',
                  flex: '0 0 40vw',
                  margin: '25px',
                  height: 'auto',
                  minHeight: '20vh',
                }}>
                  </div>
                  <div style = {{
                    backgroundColor: 'grey',
                    flex: '0 0 40vw',
                    margin: '25px',
                    height: 'auto',
                    minHeight: '20vh',
                  }}>
                    </div>
        <div style = {{
          width: '100px',
          height: '100px',
          backgroundColor: 'red',
          display: 'flex',
          flex: '0 0 calc(60vh)',
          margin: '20px',
        }}>
          Task3</div>
          <div style = {{
            width: '100px',
            height: '100px',
            backgroundColor: 'red',
            display: 'flex',
            flex: '0 0 calc(60vh)',
            margin: '20px',
          }}>
            Task3</div>

    </AppContainer>
    </AppContainer>

    </div>
  );
}

export default App;
