import { useState } from 'react'
import * as C from './App.styles'
import { ListItem } from './components/ListItem'
import { TTask } from './types/item'

const App = () => {

  const [ list, setList ] = useState<TTask[]>([
    { id: 1, name: 'tirar o lixo', isDone: false },
    { id: 2, name: 'estudar javascript', isDone: true }
  ])

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

          {list.map((item, index) => (
            <ListItem key={index} item={item}/>
          ))}

      </C.Area>
    </C.Container>
  )
}

export default App