
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'



const LayoutBox = () => {
  return <div>
    <h1>Layout</h1>
    <Suspense fallback={<div>loading</div>} >
      <Outlet />
    </Suspense>
  </div>
}


export default LayoutBox