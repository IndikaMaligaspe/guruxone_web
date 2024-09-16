import React from 'react'
import { Row, Col, Toast, ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap';
import { PencilSquare, Trash, Plus } from 'react-bootstrap-icons';

interface StyledMessageProps {
    message?: string;
    header?:string;
    type?:string;
    show:boolean;
    setShow: (show:boolean)=>void;
}

const StyledMessage:React.FC<StyledMessageProps> = ({message, header, type, show, setShow}) =>{
  return (
    <ToastContainer position='middle-center'>
        <Toast bg={type?.toLowerCase()}
        onClose={(e)=>{setShow(false)}}
        show={show} 
        className="d-inline-block m-1"  
        >
            <Toast.Header>
                {
                    type?.toLowerCase() == 'danger'?<Trash/>
                    :type?.toLowerCase() == 'success'?<PencilSquare/>
                    :type?.toLowerCase() == 'info'?<Plus/>
                    :null
                }
                <strong>{header}</strong>
                <small className="text-muted">just now</small>
            </Toast.Header>
            <ToastBody style={{color:'white'}}>
                {message}
            </ToastBody>
        </Toast>
    </ToastContainer>
  )
}

export default StyledMessage;