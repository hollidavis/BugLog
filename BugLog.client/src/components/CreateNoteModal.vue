<template>
  <!-- Modal -->
  <div class="modal fade"
       id="createNoteModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            New Note
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createNote">
            <div class="form-group">
              <input type="text"
                     name="body"
                     v-model="state.newNote.body"
                     class="form-control"
                     placeholder="Note..."
                     aria-describedby="titleHelpId"
              >
              <small id="titleHelpId" class="text-muted">Input Note Title</small>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { notesService } from '../services/NotesService'
import Pop from '../utils/Notifier'
import $ from 'jquery'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      newNote: {
        bugId: route.params.bugId
      }
    })
    return {
      state,
      async createNote() {
        try {
          await notesService.createNote(state.newNote)
          state.newNote = { bugId: route.params.bugId }
          $('#createNoteModal').modal('hide')
          Pop.toast('Successfully Created', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
