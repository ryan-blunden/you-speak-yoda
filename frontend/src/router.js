import https from 'https'
import axios from 'axios'
import express from 'express'
import config from './config.js'

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const translationErrorMessage = 'A disturbance in the force there was. So tranlate your message, I cannot.'
  const requestConfig = {}

  // Allow requests to domains with invalid certs during development
  if (app.settings.env === 'development') {
    requestConfig.httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    })
  }

  // Fetch translation
  ;(async () => {
    try {
      const response = await axios.post(config.BACKEND_ENDPOINT, `text=${req.body.text}`, requestConfig)
      res.render('index', {
        text: req.body.text,
        translation: response.data.translation,
      })
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : 'A disturbance in the force, there was'
      res.render('index', {
        text: req.body.text,
        translation: translationErrorMessage,
      })
    }
  })()
})

export default router
