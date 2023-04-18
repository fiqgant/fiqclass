import './App.css';
import DataServer from './components/ComponentDidMount_ds';
import OtherComponent from './components/ComponentDidMount_om';
import ActComponentUpdate from './components/ComponentDidUpdate_act';
import DataUpdate from './components/ComponentDidUpdate_ds';
import OtherComponentUpdate from './components/ComponentDidUpdate_om';
import ComponentWillUnmount from './components/ComponentWillUnmount';
import GetDerivedStateFromProps from './components/GetDerivedStateFromProps';
import GetSnapshotBeforeUpdate from './components/GetSnapshotBeforeUpdate';
import ShouldComponentUpdate from './components/ShouldComponentUpdate';
import StateProps from './components/StateProps';

function App() {
  return (
    <div className="App">
      <h1>componentDidMount</h1>
      <OtherComponent />

      <h1>componentDidMount</h1>
      <DataServer />

      <h1>componentDidUpdate</h1>
      <OtherComponentUpdate />

      <h1>componentDidUpdate</h1>
      <DataUpdate />

      <h1>componentDidUpdate</h1>
      <ActComponentUpdate />

      <h1>State & Props</h1>
      <StateProps />

      <h1>shouldComponentUpdate</h1>
      <ShouldComponentUpdate />

      <h1>componentWillUnmount</h1>
      <ComponentWillUnmount />

      <h1>GetDerivedStateFromProps</h1>
      <GetDerivedStateFromProps />

      <h1>GetSnapshotBeforeUpdate</h1>
      <GetSnapshotBeforeUpdate />
    </div>
  );
}

export default App;
