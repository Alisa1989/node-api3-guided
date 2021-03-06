module.exports = (format) => {
    return (req, res, next)=> {
        switch (format) {
            case "short":
                console.log(`${req.method} ${req.url}`)
                break
            case "long":
            //log this info out for every request that comes in before moving onto the route
            const time = new Date().toISOString()
            console.log(`[${time} ${req.ip} ${req.method} ${req.url}]`)
            break
        }
            // this middleware is finishes, move on to the next piece of middleware in the stack
            next()
    }
}


