"use client"

import ReactDOM from "react-dom"

export function PreloadResources() {
  ReactDOM.preconnect("https://fonts.googleapis.com")
  ReactDOM.preconnect("https://static.cloudflareinsights.com")

  return null
}
