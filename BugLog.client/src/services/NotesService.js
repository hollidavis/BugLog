import { api } from './AxiosService'
import { bugsService } from './BugsService'

class NotesService {
  async createNote(newNote) {
    const res = await api.post('api/notes', newNote)
    bugsService.getNotesByBugId(res.data.bugId)
  }

  async deleteNote(id, bugId) {
    await api.delete('api/notes/' + id)
    bugsService.getNotesByBugId(bugId)
  }
}

export const notesService = new NotesService()
