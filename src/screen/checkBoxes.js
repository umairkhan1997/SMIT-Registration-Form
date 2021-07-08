import React from 'react'

const CheckBoxes = props => {
    return (
        <li>
            <input key={props.id} style={{ marginLeft: 20, }} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> <span style={{ fontSize: 16, color: '#024ca1' }}>{props.value}</span>
        </li>
    )
}

export default CheckBoxes