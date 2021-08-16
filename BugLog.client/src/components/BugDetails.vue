<template>
  <div class="row mt-3" v-if="account.id">
    <div class="col-12">
      <div class="bg-light rounded p-3">
        <div class="row">
          <div class=" ml-3 mb-2 mr-auto">
            <h3 class="m-0">
              {{ bug.title }}
            </h3>
          </div>
          <!-- Edit Bug Button -->
          <div v-if="account.id == bug.creatorId">
            <button type="button"
                    class="btn btn-sm btn-success"
                    data-toggle="modal"
                    :data-target="'#editBugModal' + bug.id"
                    v-if="bug.closed === false"
                    :title="'Edit Bug' + bug.title"
            >
              <span class="fas fa-edit"></span>
            </button>
            <!-- Close Bug Button -->
            <button type="button" class="btn btn-sm btn-danger mx-2" @click.stop="closeBug" v-if="bug.closed === false" :title="'Close Bug' + bug.title">
              <span class="fa fa-times"></span>
            </button>
          </div>
        </div>
        <!-- Header -->
        <div class="row align-items-center">
          <div class="d-flex align-items-center">
            <!-- Picture -->
            <img class="profile-pic ml-3" :src="bug.creator?.picture" :alt="bug.creator?.name + 'Profile Picture'">
            <!-- Reported/Name -->
            <div class="ml-3">
              <p class="m-0">
                Reported By:
              </p>
              <p class="m-0">
                <b>{{ bug.creator?.name }}</b>
              </p>
            </div>
          </div>
          <!-- Last Updated -->
          <div class="mr-auto">
            <div class="ml-3 text-center">
              <p class="m-0">
                Last Updated:
              </p>
              <p class="m-0">
                <b>{{ state.updatedAt }}</b>
              </p>
            </div>
          </div>
          <!-- Status -->
          <div class="mr-4 text-center">
            <div v-if="bug.closed === false">
              <p class="m-0">
              </p><p class="m-0">
                Status:
              </p>
              <b><p class="m-0">
                🟢 Open
              </p></b>
            </div>
            <div v-else>
              <p class="m-0">
                Status:
              </p>
              <b><p class="m-0">
                🔴 Closed
              </p></b>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="mx-3 mt-3 text-break">
            <p class="m-0">
              {{ bug.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <EditBugModal :bug="bug" />
</template>

<script>
import { computed, reactive, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { bugsService } from '../services/BugsService'
import Pop from '../utils/Notifier'
import { router } from '../router'
export default {
  props: {
    bug: { type: Object, required: true }
  },
  setup(props) {
    const account = computed(() => AppState.account)
    const state = reactive({
      updatedAt: ''
    })
    watchEffect(() => {
      try {
        if (props.bug) {
          const updated = new Date(props.bug.updatedAt)
          state.updatedAt = new Intl.DateTimeFormat('en-US').format(updated)
        }
      } catch (error) {
      }
    })
    return {
      state,
      account,
      async closeBug() {
        try {
          if (await Pop.confirm()) {
            await bugsService.closeBug(props.bug.id)
            router.push({ name: 'Home' })
            Pop.toast('Bug Successfully Close', 'success')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-pic{
  max-height: 10vh;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}
</style>
