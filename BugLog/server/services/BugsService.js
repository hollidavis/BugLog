import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class BugsService {
  async getAll() {
    const bugs = await dbContext.Bugs.find().populate('creator', 'name picture')
    return bugs
  }

  async getById(id) {
    const bug = await dbContext.Bugs.findById(id).populate('creator', 'name picture')
    if (!bug) {
      throw new BadRequest('Invalid Id')
    }
    return bug
  }

  async create(body) {
    const bug = await dbContext.Bugs.create(body)
    return await dbContext.Bugs.findById(bug._id).populate('creator', 'name picture')
  }

  async getNotesByBugId(query = {}) {
    const notes = await dbContext.Notes.find(query)
    if (!notes) {
      throw new BadRequest('Invalid Id')
    }
    return notes
  }

  async edit(id, body) {
    const bug = await this.getById(id)
    if (!bug) {
      throw new BadRequest('Invalid Id')
    }
    if (bug.creatorId.toString() !== body.creatorId) {
      throw new Forbidden('This is not your bug')
    }
    if (bug.closed) {
      throw new BadRequest('This bug is closed')
    }
    const updated = await dbContext.Bugs.findByIdAndUpdate(id, body, { new: true })
    return updated
  }

  async close(id, body) {
    const bug = await this.getById(id)
    if (!bug) {
      throw new BadRequest('Invalid Id')
    }
    if (bug.creatorId.toString() !== body.creatorId) {
      throw new Forbidden('This is not your bug')
    }
    if (bug.closed === true) {
      throw new BadRequest('This bug is already closed')
    }
    body.closed = true
    const updated = await dbContext.Bugs.findByIdAndUpdate(id, body)
    return updated
  }
}

export const bugsService = new BugsService()
