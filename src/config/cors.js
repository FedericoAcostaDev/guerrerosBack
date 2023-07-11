export const corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  acceptControlAllowMethods: 'GET, POST, PUT, DELETE, OPTIONS',
  acceptControlAllowHeaders: 'Origin, Content-Type, Accept',
  acceptControlAllowOrigin: '*',
  acceptControlAllowCredentials: true
}
