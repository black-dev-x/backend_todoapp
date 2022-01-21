const express = require('express')

const configureServer = server => {
  const router = express.Router()
  server.use('/api', router)
  const todoService = require('../api/todo/todoService')
  todoService.register(router, '/todos')
}

module.exports = configureServer
