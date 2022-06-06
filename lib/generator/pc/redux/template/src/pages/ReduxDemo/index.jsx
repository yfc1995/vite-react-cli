import { add, asyncAdd } from '@store/demo'
import { useSelector, useDispatch } from "react-redux"

const ReduxDemo = () => {
  const dispatch = useDispatch()
  const { sum } = useSelector((state) => {
    return state.demo
  })
  return <div>
    <button onClick={()=> dispatch(add({ num: 1 }))}>add{sum}</button>
    <button onClick={()=> dispatch(asyncAdd({ num: 1}))}>addasync{sum}</button>
  </div>
}

export default ReduxDemo