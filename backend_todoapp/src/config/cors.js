const middlewareToAllowCors = (_, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  response.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}

module.exports = middlewareToAllowCors
