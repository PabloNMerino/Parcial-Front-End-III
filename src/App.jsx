import Form from './components/Form'
import Card from './components/Card'

import './App.css'
import { useState } from 'react'

function App() {

  const [nombreForm, setNombreForm] = useState('');
  const [bandaForm, setBandaForm] = useState('');
  const [submitDone, setSubmitDone] = useState(false);

  const handleSubmit = (valueForm) => {
    setNombreForm(valueForm.nombre);
    setBandaForm(valueForm.banda);
    setSubmitDone(true)
  }

  return (
    <>
      <h2>Formulario</h2>
      <Form onSubmit={handleSubmit}/>
      {submitDone ? <Card nombre={nombreForm} banda={bandaForm}/> : undefined}
    </>
  )
}

export default App
