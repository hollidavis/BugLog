<template>
  <!-- Modal -->
  <div class="modal fade"
       :id="'editBugModal' + bug.id"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Edit Bug
          </h5>
          <button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close" :title="'Close Edit' + bug.title + 'Modal'">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editBug">
            <div class="form-group">
              <input type="text"
                     name="title"
                     v-model="state.editBug.title"
                     class="form-control"
                     placeholder="Title..."
                     aria-describedby="titleEditHelpId"
              >
              <small id="titleEditHelpId" class="text-muted">Edit Bug Title</small>
            </div>
            <div class="form-group">
              <input type="text"
                     name="description"
                     v-model="state.editBug.description"
                     class="form-control"
                     placeholder="Description..."
                     aria-describedby="descriptionEditHelpId"
              >
              <small id="descriptionEditHelpId" class="text-muted">Edit Bug Description</small>
            </div>
            <button type="submit" class="btn btn-primary" :title="'Submit Edit '+ bug.title + 'Modal'">
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
  props: {
    bug: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      editBug: {
        bugId: props.bug.id
      }
    })
    return {
      state,
      async editBug() {
        try {
          await bugsService.editBug(props.bug.id, state.editBug)
          state.editBug = { bugId: props.bug.id }
          $('#editBugModal' + props.bug.id).modal('hide')
          router.push({ name: 'BugDetailsPage', params: { bugId: props.bug.id } })
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
