
import { useNavigate } from 'react-router-dom'
import { getToken } from '@utils/axios/until'
import { useEffect } from 'react'


const Index = () => {
  const navigate = useNavigate()
 useEffect(() => {
   const token = getToken()
   
   if (token) {
    navigate('/routerDemo/list')
     return
   }
   navigate('/login')
 }, [navigate])
 return <div></div>
}

export default Index