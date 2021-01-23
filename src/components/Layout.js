import React, { useState } from "react"
import favicon from "../images/favicon.png"
import Helmet from "react-helmet"
import PageContainer from "../components/PageContainer"
import Lights from "../components/Lights"
import LightsController from "../components/LightsController"

function Layout({children}) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark")
      return;
    }
    setMode("light")
  }

  return (
    <>
    <style>
      {`
        body {
          background: ${mode === "dark" ? '#000020' : '#008B8B;'}
        }
      `}
    </style>
    <div className={`${mode}-mode`}>
      <Helmet>
        <link rel="icon" href={favicon} />
        <title>Sarah French: Developer Portfolio</title>
      </Helmet>
      <Lights mode={mode} />
      <LightsController mode={mode} toggleMode={toggleMode}/>
      <PageContainer mode={mode}>{children}</PageContainer>
    </div>
    </>
  )
}

export default Layout
