import React, { Suspense, lazy } from 'react'
const LazyComponent = lazy(() => import("./LazyComponent"))

const LazyLoading = () => {
  return (
    <div>
        <h4>lazy loading example</h4>
        <Suspense fallback={<div>loaing lazy component...</div>}>
            <LazyComponent />
        </Suspense>
    </div>
  )
}

export default LazyLoading