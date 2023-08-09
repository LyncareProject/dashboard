import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle.js';
import { lightTheme, darkTheme } from './styles/theme';
import Main from './pages/Main/Main';
import Sidebar from './pages/Sidebar/Sidebar.jsx';

import './App.css';

function App() {
  const themeMode = useSelector((state) => state.theme.value.darkMode)
  return (
    <ThemeProvider theme={ themeMode ? darkTheme : lightTheme }>
      <GlobalStyle />
      <div className="App">
          <Sidebar />
          <Routes>
            <Route path='/' element={ Main } />
          </Routes>  
      </div>
    </ThemeProvider>
  );
}

export default App;
