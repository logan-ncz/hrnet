import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const ModalDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.50);
`

const ModalConfirmation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 1.9em;
    width: 50%;
    border-radius: 5px;
`

const ModalClose = styled.div`
    position: relative;
    top: -1.9em;
    right: -16.2em;
    font-size: 1.3em;
`

export default function Modal(props) {
    const close = () => {
        props.setDisplay(false)
    }

    return(
        <ModalDiv>
            <ModalConfirmation>
                {props.children}
                <ModalClose>
                    <FontAwesomeIcon onClick={close} icon={faCircleXmark} />
                </ModalClose>
                
            </ModalConfirmation>
        </ModalDiv>
    )
}