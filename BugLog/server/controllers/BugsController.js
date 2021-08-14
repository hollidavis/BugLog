import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugsService } from '../services/BugsService'

export class BugsController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/notes', this.getNotesByBugId)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.close)
  }

  async getAll(req, res, next) {
    try {
      const bugs = await bugsService.getAll()
      res.send(bugs)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const bug = await bugsService.getById(req.params.id)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async getNotesByBugId(req, res, next) {
    try {
      const notes = await bugsService.getNotesByBugId(req.params.id)
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // DO NOT TRUST THE CLIENT
      req.body.creatorId = req.userInfo.id
      const bug = await bugsService.create(req.body)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      delete req.body.closed
      req.body.creatorId = req.userInfo.id
      const bug = await bugsService.edit(req.params.id, req.body)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async close(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bug = await bugsService.close(req.params.id, req.body)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }
}
