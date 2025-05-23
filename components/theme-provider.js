"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import dynamic from "next/dynamic"


const ThemeProvider = ({ children, ...props })=> {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default dynamic (()=>Promise.resolve(ThemeProvider),{ssr: false})
// export default ThemeProvider