export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Guerreros Backend Api',
      version: '1.0.0',
      description: 'Backend for Guerreros'
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'The server api environment development'
      },
      {
        url: 'https://guerrerosback.netlify.app/api',
        description: 'The server api environment production'
      }
    ]
  },
  apis: ['./src/**/doc/*.doc.js']
}
