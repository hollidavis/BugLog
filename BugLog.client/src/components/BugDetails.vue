<template>
  <div class="row mt-3">
    <div class="col-12">
      <div class="bg-light rounded p-3">
        <div class="row align-items-center">
          <div class="d-flex align-items-center">
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
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, watchEffect } from '@vue/runtime-core'
export default {
  props: {
    bug: { type: Object, required: true }
  },
  setup(props) {
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
      state
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
