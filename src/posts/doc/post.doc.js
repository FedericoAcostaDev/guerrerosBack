/**
 * @swagger
 * components:
 *  schemas:
 *    Post:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of task
 *        user:
 *          type: string
 *          description: the name of the user
 *      required:
 *        - user
 *      example:
 *        user: Dc Dev
 */

/**
 * @swagger
 *  /post:
 *    get:
 *      tags: [Post]
 *      summary: Get all posts
 *      description:
 *        Get all posts
 *      parameters:
 *        - in: query
 *          name: limit
 *          schema:
 *            type: integer
 *            $ref: '#/components/schemas/Post'
 *
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Post'
 *        404:
 *          description: Not Found
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/NotFound'
 *        500:
 *          description: Internal Server Error
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/NotServer'
 */
