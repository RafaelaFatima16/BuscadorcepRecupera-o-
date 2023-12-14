import Form from 'react-bootstrap/Form'
import  Button  from 'react-bootstrap/Button'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert'


function App(){
  const [dados,setDados] = useState(false)
  const [alert,setAlert] = useState(false)


function BuscarDados(event){
  event.preventDefault()
  const cep = event.target[0].value
  axios.get(`http://viacep.com.br/ws/${cep}/json/`).then((respostas)=>setDados (respostas.data))
  .catch((resposta)=>setAlert(true))
}
  return(
    <div className="container mt-5 mx-auto">
      <h2 className="text-center"> Buscador de CEP</h2>
      <Form onSubmit={BuscarDados}>
        <Form.Control required />
        <Button variant='primary' type='submit'className= "mt-3 ">Buscar</Button>
      </Form>
      {dados ?  <ListGroup className="mt-3"> 
      <ListGroup.Item>CEP: {dados.cep}</ListGroup.Item>
      <ListGroup.Item>Logradouro: {dados.logradouro}</ListGroup.Item>
      <ListGroup.Item>Complemento: {dados.complemento  ? dados.complemento: "Não existe" } </ListGroup.Item>
      <ListGroup.Item>Bairro: {dados.bairro}</ListGroup.Item>
      <ListGroup.Item>Localidade: {dados.localidade}</ListGroup.Item>
      <ListGroup.Item>UF: {dados.uf}</ListGroup.Item>
    </ListGroup>:""}
      {alert ? <Alert className='mt-3'>Dados não encontrados</Alert>: ""}
    </div>

  )
}

export default App