import { useSelector,useDispatch } from "react-redux";
import {changeAge} from '../redux/user';

function Cart(){
  let state = useSelector(state => state);
  let dispatch = useDispatch();
  console.log(state)
  return (
    <div>
     <p>{state.user.people}</p>
    <p>{state.user.age} 
        <button onClick={
          () => dispatch(changeAge(10))}> + </button></p>
    </div>
  )
}

export default Cart;