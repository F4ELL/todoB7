import { useState } from 'react'
import * as C from './App.styles'
import { TTask } from './types/item'

const App = () => {

  const [ list, setList ] = useState<TTask[]>([])

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
      </C.Area>
    </C.Container>
  )
}

export default App