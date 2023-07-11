export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Guerreros Backend Api Documentation',
      version: '1.0.0',
      description: 'Backend for Guerreros Api Documentation',
      xLogo: {
        url: './src/asset/img/logo.png',
        href: 'https://guerrerosback.netlify.app/api',
        altText: 'Guerreros Backend Api'
      },
      contact: {
        name: 'API Support',
        url: 'https://www.example.com/support',
        email: 'support@example.com'
      },
      license: {
        name: 'Mit',
        url: 'https://opensource.org/license/mit/'
      }
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
  apis: ['./src/**/doc/*.doc.js'],

  xTagGroups: [
    {
      name: 'Guerreros',
      tags: ['Users', 'Posts', 'Categories']
    },
    {
      name: 'Schemes',
      tags: ['Users', 'Posts', 'Categories']
    }
  ]
};
