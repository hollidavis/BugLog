import { api } from './AxiosService'
import { bugsService } from './BugsService'

class NotesService {
  async createNote(newNote) {
    const res = await api.post('api/notes', newNote)
    bugsService.getNotesByBugId(res.bugId)
  }

  async deleteNote(id) {
    const res = await api.delete('api/notes/' + id)
    bugsService.getNotesByBugId(res.bugId)
  }
}

export const notesService = new NotesService()
