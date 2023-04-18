import React from 'react';
import Salam from './component/Salam';
import IsiKucing from './component/Kucing';
import PemilikKucing from './component/PemilikKucing';
import OnClick from './component/OnClick';
import OnChange from './component/OnChange';
import OnSubmit from './component/OnSubmit';
import OnFocus from './component/OnFocus';
import OnBlur from './component/OnBlur';
import OnMouseOver from './component/OnMouseOver';
import OnMouseOut from './component/OnMouseOut';
import Button from './component/Button';

function App() {

  return (
    <>
    <h1>Props</h1>
    <Salam nama="Taufiq" />

    <IsiKucing />

    <PemilikKucing 
      nama="Majikan" 
      umur="30" 
      namaKucing="kiko" 
      warnaKucing="Hitam"/>
    
    <h1>Events</h1>

    <h2>onClick</h2>
    <OnClick />

    <h2>onChange</h2>
    <OnChange />

    <h2>onSubmit</h2>
    <OnSubmit />

    <h2>onFocus</h2>
    <OnFocus />

    <h2>onBlur</h2>
    <OnBlur />

    <h2>onMouseOver</h2>
    <OnMouseOver />

    <h2>onMouseOut</h2>
    <OnMouseOut />

    <h1>Gabungan Props dan Events</h1>
    <Button name="Taufiq" />
    </>
  );
}

export default App;
