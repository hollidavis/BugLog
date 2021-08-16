<template>
  <!-- Modal -->
  <div class="modal fade"
       id="createBugModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Report New Bug
          </h5>
          <button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close" title="Close Create Bug Modal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createBug">
            <div class="form-group">
              <input type="text"
                     name="title"
                     v-model="state.newBug.title"
                     class="form-control"
                     placeholder="Title..."
                     aria-describedby="titleHelpId"
                     required
              >
              <small id="titleHelpId" class="text-muted">Input Bug Title</small>
            </div>
            <div class="form-group">
              <input type="text"
                     name="description"
                     v-model="state.newBug.description"
                     class="form-control"
                     placeholder="Description..."
                     aria-describedby="descriptionHelpId"
                     required
              >
              <small id="descriptionHelpId" class="text-muted">Input Bug Description</small>
            </div>
            <button type="submit" class="btn btn-primary" title="Submit Create Bug Form">
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
import { bugsService } from '../services/BugsService'
import Pop from '../utils/Notifier'
import $ from 'jquery'
import { router } from '../router'
export default {
  setup() {
    const state = reactive({
      newBug: {}
    })
    return {
      state,
      async createBug() {
        try {
          const newId = await bugsService.createBug(state.newBug)
          state.newBug = {}
          $('#createBugModal').modal('hide')
          router.push({ name: 'BugDetailsPage', params: { bugId: newId } })
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
