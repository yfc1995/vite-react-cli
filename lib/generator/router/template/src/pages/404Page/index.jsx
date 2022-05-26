import _404 from '@img/404.png'
import { useSelector } from "react-redux"
import './index.less'
import { useNavigate } from 'react-router-dom'

const NotFondPage = () => {
  const navigate = useNavigate()

  const { firstPath } = useSelector((state) => {
    return state.routerPromise
  })

  const handleClick = () => {
    navigate(-1)
  }


  return <div className="notFond" onClick={handleClick}>
    {
      firstPath ? <img src={_404} alt=""/> : <img src={_404} alt=""/> 
    }
    
  </div>
}

export default NotFondPage