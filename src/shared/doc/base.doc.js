/**
 * @swagger
 * tags:
 *  name: Api
 *  description: Api endpoint
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    ApiResponse:
 *      type: object
 *      properties:
 *        code:
 *          type: string
 *        type:
 *          type: string
 *        message:
 *          type: string
 *    NotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: Not found
 *      example:
 *        msg: not found
 *    NotServer:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: Error in the server
 *      example:
 *        msg: Error in the server
 *  securitySchemes:
 *    petstore_auth:
 *      type: oauth2
 *      flows:
 *        implicit:
 *          authorizationUrl: https://petstore3.swagger.io/oauth/authorize
 *          scopes:
 *            write:pets: modify pets in your account
 *            read:pets: read your pets
 *    api_key:
 *      type: apiKey
 *      name: api_key
 *      in: header
 *
 *  parameters:
 *      Id:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the search id
 */
