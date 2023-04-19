import './App.css';
import ComplexForm from './components/ComplexForm';
import FormWithState from './components/FormWithState';
import SimpleForm from './components/SimpleForm';
import RegistrationForm from './components/Validation';
import Ref from './components/Ref';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleForm />

        <FormWithState />

        <ComplexForm />

        <RegistrationForm />

        <Ref />
      </header>
    </div>
  );
}

export default App;
