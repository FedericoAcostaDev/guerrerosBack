import { HTTP_STATUSES, HTTP_MESSAGES } from '../constants/index.js'

export const handleSuccessResponse = ({ res, status, message, data = null }) => {
  const statusCode = status || HTTP_STATUSES.OK

  res.status(statusCode).json({
    success: true,
    code: statusCode,
    status: HTTP_MESSAGES[statusCode],
    message,
    data
  })
}

export const handleErrorResponse = (err, req, res, next) => {
  const status = err.status || HTTP_STATUSES.INTERNAL_SERVER_ERROR

  res.status(status).json({
    success: false,
    code: err.status,
    status: HTTP_MESSAGES[err.status],
    message: err.message,
    error_details: err.errorDetails || null
  })
}
