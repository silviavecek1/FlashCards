const path = require('path');

function indexTemplate(filePaths) {
    const exportEntries = filePaths.map(filePath => {
        const basename = path.basename(filePath, path.extname(filePath))
        const exportName = `${basename}`
        return `export { default as ${exportName} } from "./${basename}"`
    })
    return exportEntries.join("\n")
}

module.exports = indexTemplate