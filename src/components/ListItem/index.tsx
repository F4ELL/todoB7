import React, { useState } from 'react'
import { TTask } from '../../types/item'
import * as C from './styles'

type TProps = {
    item: TTask,
    onChange: (id: number, isDone: boolean) => void
}

export const ListItem = ({ item, onChange }: TProps) => {

    return(
        <div>
            <C.Container done={item.isDone}>
                <input type='checkbox' checked={item.isDone} onChange={e => onChange(item.id, e.target.checked)}/>
                <label>{item.name}</label>
            </C.Container>
        </div>
    )
}