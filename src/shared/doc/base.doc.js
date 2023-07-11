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
