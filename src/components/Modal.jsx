import { useDispatch } from "react-redux";
import { setConfirmation } from "../redux/reducers";

export default function Modal() {
    const dispatch = useDispatch();

    const close = () => {
        dispatch(setConfirmation(false))
    }

    return(
        <div id="confirmation" className="modal">
            Employee Created!
            <button onClick={close} className="close-modal">Close</button>
        </div>
    )
}