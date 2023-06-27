import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
const Quantity = props => {
    const onClickHandler = (props) => {

    }
    return (
        <form style={{ width: '50px' }} onSubmit={props.onChange} >
            <input type='number' />
        </form>

    )
}
export default Quantity;