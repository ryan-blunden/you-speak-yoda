#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app.js'
import config from '../config.js'
import debug from 'debug'
import https from 'https'

/**
 * Get port from environment and store in Express.
 */

app.set('port', config.PORT)

const server = https.createServer(
  {
    cert: config.TLS_CERT,
    key: config.TLS_KEY,
  },
  app
)

/**
 * Listen on provided port, on all network interfaces.
 */

server.on('error', onError)
server.on('listening', onListening)
server.listen(config.PORT)

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  console.log(`Running on https://${config.HOSTNAME}:${config.PORT}/ (Press CTRL+C to quit)`)
}
