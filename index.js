
const server = require("./server")

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`\n ** server working on port http://localhost:${PORT} **\n`)
})