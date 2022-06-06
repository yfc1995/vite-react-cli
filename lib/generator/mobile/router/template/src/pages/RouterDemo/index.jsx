

import { useNavigate } from 'react-router-dom'

const RouterDemo = () => {
  const navigate = useNavigate()
  return <div>
    list
    <button onClick={() => navigate('/routerDemo/detail')}>点击</button>
  </div>
}

export default RouterDemo