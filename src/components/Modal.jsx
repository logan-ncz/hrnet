import { useDispatch } from "react-redux";
import { setConfirmation } from "../redux/reducers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
// import styled from "styled-components";

// const modalDiv = styled.div`

// `

export default function Modal() {
    const dispatch = useDispatch();

    const close = () => {
        dispatch(setConfirmation(false))
    }

    return(
        <div className="modal">
            <div className="modalConfirmation">
                Employee Created!
                {/* <button onClick={close} className="modalConfirmationClose">Close</button> */}
                <FontAwesomeIcon onClick={close} icon={faCircleXmark} />
            </div>
        </div>
        
    )
}