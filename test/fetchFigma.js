const axios = require("axios")
const fs = require("fs")
const { figmaToTailwind } = require("figma-to-smart-code")

const FIGMA_API_URL = "https://api.figma.com/v1/files/"
const FILE_KEY = "MbUzcnUAQ8QER5qFcWlcjQ"
const ACCESS_TOKEN =
  process.env.FIGMA_ACCESS_TOKEN
console.log(ACCESS_TOKEN)

async function fetchFigmaFile(nodeId) {
  try {
    const response = await axios.get(`${FIGMA_API_URL}${FILE_KEY}/nodes?ids=${nodeId}`, {
      headers: {
        "X-Figma-Token": ACCESS_TOKEN,
      },
    })
    const figmaContent = response.data["nodes"][nodeId].document;
    fs.writeFileSync("./dist/figma_content.json", JSON.stringify(figmaContent, null, 2))

    const tailwindContent = await figmaToTailwind(figmaContent)
    fs.writeFileSync("./dist/tailwind.html", tailwindContent)

    console.log("Figma content and Tailwind content have been saved.")
  } catch (error) {
    console.error("Error fetching Figma file:", error)
  }
}

fetchFigmaFile("1:2")
