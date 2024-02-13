const express = require('express')
const {addComment, getComments, getCommentById, updateComment, removeComment} = require('./comment.controller')
const router = express.Router()


router.get('/', getComments)
router.get('/:id', getCommentById)
router.post('/', addComment)
router.put('/:id', updateComment)
router.delete('/:id', removeComment)

module.exports = router




