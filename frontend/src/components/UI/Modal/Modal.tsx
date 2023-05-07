import React, {MouseEventHandler, ReactNode} from "react";
import './Modal.css'
import Backdrop from "../Backdrop/Backdrop";


interface ModalProps {
    show: boolean;
    children: ReactNode;
    close: MouseEventHandler<HTMLElement>
}

const Modal = ({children, show, close}: ModalProps) => (
    <>
        <Backdrop show={show} click={close} />
        <div
            style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
            className='Modal'   
        >
            {children}
        </div>
    </>
)

export default Modal;
