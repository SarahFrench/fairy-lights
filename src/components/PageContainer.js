import React from "react"

function PageContainer({children}) {
  return (
    <div id="component-page-container" className={`page-container`}>
      <h1>Fairy Lights!</h1>
      {children}
    </div>
  )
}

export default PageContainer
