// This is a script that would be run to generate the favicon
// For demonstration purposes only - in a real project you would run this with Node.js

import fs from "fs"
import { Favicon } from "../components/favicon"
import ReactDOMServer from "react-dom/server"

// Generate SVG
const svgString = ReactDOMServer.renderToStaticMarkup(<Favicon />)
const svgWithDeclaration = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>${svgString}`

// Write to file
fs.writeFileSync("./public/favicon.png", svgWithDeclaration)

console.log("Favicon SVG generated successfully!")
