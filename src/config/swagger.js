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
        url: 'https://localhost:5000/api',
        description: 'The server api environment development'
      },
    ],
  },
  apis: ['./src/**/doc/*.doc.js']
}
