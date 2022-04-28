import { useState } from 'react'
import { TTask } from '../../types/item'
import * as C from './styles'

type TProps = {
    item: TTask
}

export const ListItem = ({ item }: TProps) => {

    const [ isChecked, setIsChecked ] = useState(item.isDone)

    return(
        <div>
            <C.Container done={isChecked}>
                <input type='checkbox' checked={isChecked} onChange={e => setIsChecked(e.target.checked)}/>
                <label>{item.name}</label>
            </C.Container>
        </div>
    )
}