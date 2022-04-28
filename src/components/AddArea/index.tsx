import { KeyboardEvent, useState } from 'react'
import * as C from './styles'

type TProps = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: TProps) => {

    const [ inputText, setInputText ] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText)
            setInputText('')
        }
    }

    return(
        <div>
            <C.Container>
                <div className='image'>➕</div>
                <input type="text" placeholder='Create new task' value={inputText} onChange={e => setInputText(e.target.value)} onKeyUp={handleKeyUp}/>
            </C.Container>
        </div>
    )
}