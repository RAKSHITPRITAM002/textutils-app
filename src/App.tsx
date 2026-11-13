
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Textform from './Components/Textform';
import About from './Components/About';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import { Route, Routes } from 'react-router-dom';

const TextformComponent = Textform as any;
const palettes = {
  red: { background: '#2b1114', surface: '#40191e' },
  green: { background: '#102319', surface: '#193526' },
  blue: { background: '#101b2d', surface: '#1b2b45' },
  purple: { background: '#21142d', surface: '#342044' },
} as const;

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [palette, setPalette] = useState<keyof typeof palettes>('blue');
  const [alert, setAlert] = useState<{ msg: string; type: string } | null>(null)

  const showAlert = (message: string, type: string) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? palettes[palette].background : 'white';
  }, [mode, palette]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    showAlert(
      mode === 'light' ? 'Dark Mode has been enabled' : 'Light Mode has been enabled',
      'success'
    );
    document.title = mode === 'light' ? 'Textutils-darkmode' : 'TextUtils-Lightmode';
  };

  return (
    <>

      <Navbar
        abouttext={undefined}
        title={''}
        mode={mode}
        toggleMode={toggleMode}
        palette={palette}
        onPaletteChange={setPalette}
      />
<Alert alert={alert}/>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container my-4">
              <TextformComponent
                showAlert={showAlert}
                heading="Try Textutils Word counter,Character counter remove extra space & save them"
                mode={mode}
                darkSurfaceColor={palettes[palette].surface}
              />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

