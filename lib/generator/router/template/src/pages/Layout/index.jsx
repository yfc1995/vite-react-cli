import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Spin } from 'antd';

function DotLoading() {
  return <div className="dotLoadingBox">
    <Spin size="large" tip="加载中..." />
  </div>
}


const LayoutBox = () => {
  return <div>
    layout
    <Suspense fallback={<DotLoading />}>
      <Outlet />
    </Suspense>

  </div>
}

export default LayoutBox