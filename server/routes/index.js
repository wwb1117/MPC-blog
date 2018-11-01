import axios from 'axios'
import Router from 'koa-router'
import config from '../config'
import db from '../models'
import {checkToken, checkGithubToken} from '../middlewares/check-token'

const router = new Router()
const user = require('../controllers/user')
const tag = require('../controllers/tag')
const article = require('../controllers/article')
const comment = require('../controllers/comment')
const tool = require('../controllers/tool')

router
  .get('/rss.xml', tool.rss)
  .get('/sitemap.xml', tool.sitemap)
  .get('/robots.txt', tool.robots)
  .post('/blogapi/send-email', tool.sendEmail)

router
  .get(/\/blogapi\/oauth\/github\/callback/, user.githubCallback)
  .get('/blogapi/oauth/github/:state?', user.githubLogin)

router
  .get('/blogapi/user/:username?', user.getUserInfo)
  .patch('/blogapi/user', checkToken, user.patchUserInfo)
  .post('/blogapi/login', user.login)
  .post('/blogapi/logout', checkToken, user.logout)

router
  .get('/blogapi/tags/:id?', tag.getTagsOrArticles)
  .post('/blogapi/tag', checkToken, tag.postTag)
  .patch('/blogapi/tag', checkToken, tag.patchTag)
  .del('/blogapi/tag/:id?', checkToken, tag.deleteTag)

router
  .get('/blogapi/search/:keyword?', article.search)
  .get('/blogapi/article/:id?', article.getArticle)
  .get('/blogapi/articles/:page?/:limit?', article.getArticles)
  .get('/blogapi/private-articles', checkToken, article.getPrivateArticles)
  .get('/blogapi/archives', article.archives)
  .post('/blogapi/article', checkToken, article.postArticle)
  .post('/blogapi/upload', checkToken, article.upload)
  .patch('/blogapi/article', checkToken, article.patchArticle)
  .del('/blogapi/article/:id?', checkToken, article.deleteArticle)

router
  .post('/blogapi/comment', comment.postComment)
  .get('/blogapi/comments', comment.getComments)
  .del('/blogapi/comment/:id?', checkToken, comment.deleteComment) // 管理员可以删除评论

export default router
