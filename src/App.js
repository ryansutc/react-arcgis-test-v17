import './App.css';

import { Map } from 'react-arcgis-react17test';

function App() {
  return (
    <div className="App" id="app1">
      <Map id="foobar" mapProperties={{ basemap: "satellite" }}></Map>
    </div>
  );
}

export default App;
