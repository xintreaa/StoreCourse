import { useDispatch, useSelector } from "react-redux"
import { CounterState } from "./counterReducer"

export default function ProductDetails() {
    const data = useSelector((state: CounterState) => state.data)
    const dispatch = useDispatch();
    return (
        <div>ContactPage</div>
    )
}