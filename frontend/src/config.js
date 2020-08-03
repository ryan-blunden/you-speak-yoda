const config = Object.freeze({
  HOSTNAME: process.env.HOSTNAME,
  PORT: process.env.PORT,
  TLS_CERT: process.env.TLS_CERT,
  TLS_KEY: process.env.TLS_KEY,
  LOGGING: process.env.LOGGING,

  BACKEND_ENDPOINT: process.env.BACKEND_ENDPOINT,
  BACKEND_AUTH_TOKEN: JSON.parse(process.env.BACKEND_AUTH_TOKEN),
})

export default config
