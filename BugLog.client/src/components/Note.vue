<template>
  <div class="row my-2">
    <div class="col-12">
      <div class="bg-primary text-light rounded p-3">
        <!-- Profile & Buttons -->
        <div class="d-flex align-items-center">
          <!-- Picture -->
          <img class="profile-pic" :src="note.creator?.picture" :alt="note.creator?.name + 'Profile Picture'">
          <!-- Reported/Name -->
          <div class="ml-3 mr-auto">
            <p class="m-0">
              <b>{{ note.creator?.name }}</b>
            </p>
          </div>
          <div v-if="account.id === note.creatorId">
            <button type="button" class="btn btn-sm btn-danger text-shadow ml-2" @click.stop="deleteNote" v-if="bug.closed === false" :title="'Delete' + note.body">
              <span class="fa fa-times"></span>
            </button>
          </div>
        </div>
        <!-- Note Body -->
        <div class="mt-2">
          <p class="m-0 text-break">
            {{ note.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { notesService } from '../services/NotesService'
import { useRoute } from 'vue-router'
export default {
  props: {
    note: { type: Object, required: true },
    bug: { type: Object, required: true }
  },
  setup(props) {
    const account = computed(() => AppState.account)
    const route = useRoute()
    return {
      account,
      async deleteNote() {
        if (await Pop.confirm()) {
          try {
            await notesService.deleteNote(props.note.id, route.params.bugId)
            Pop.toast('Successfully Deleted!', 'success')
          } catch (error) {
            Pop.toast(error, 'error')
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-pic{
  max-height: 7vh;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}
</style>
