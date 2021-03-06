import { AppState } from '../AppState'
import { api } from './AxiosService'

class BugsService {
  async getAllBugs() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
  }

  async getBugById(id) {
    const res = await api.get('api/bugs/' + id)
    AppState.activeBug = res.data
  }

  async getNotesByBugId(id) {
    const res = await api.get('api/bugs/' + id + '/notes')
    AppState.notes = res.data
  }

  async createBug(newBug) {
    const res = await api.post('api/bugs', newBug)
    AppState.activeBug = res.data
    this.getAllBugs()
    return res.data.id
  }

  async editBug(id, editBug) {
    const res = await api.put('api/bugs/' + id, editBug)
    AppState.activeBug = res.data
  }

  async closeBug(id) {
    await api.delete('api/bugs/' + id)
    this.getAllBugs()
  }
}

export const bugsService = new BugsService()
