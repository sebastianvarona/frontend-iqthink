import Sidebar from './components/sidebar/Sidebar';

function App(): JSX.Element {
  return (
    <div className="App grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
