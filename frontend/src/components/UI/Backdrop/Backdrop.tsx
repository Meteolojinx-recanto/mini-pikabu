import React, { MouseEventHandler } from "react";
import './Backdrop.css'

interface BackdropProps {
    show: boolean;
    click: MouseEventHandler<HTMLElement>
}

const Backdrop = ({show, click}: BackdropProps) => (
    show ? <div onClick={click} className='Backdrop'/> : null
)

export default Backdrop;