import {
  add, asyncAdd
} from 'store/reduxDemo';
import {
  useSelector, useDispatch
} from 'react-redux';

const ReduxDemo = () => {
  const dispatch = useDispatch();
  const { sum } = useSelector((state) => {
    console.log(state);
    return state.reduxDemo;
  });
  return <div>
    <h1>ReduxDemo</h1>
    <button onClick={() => dispatch(add({ num: 1 }))}>同步{sum}</button>
    <button onClick={() => dispatch(asyncAdd({ num: 1 }))}>异步{sum}</button>
  </div>;
};

export default ReduxDemo;