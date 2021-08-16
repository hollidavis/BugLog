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
            <button type="button" class="btn btn-success text-shadow">
              <span class="fas fa-edit"></span>
            </button>
            <button type="button" class="btn btn-danger text-shadow ml-2">
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
export default {
  props: {
    note: { type: Object, required: true }
  },
  setup() {
    const account = computed(() => AppState.account)
    return {
      account
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
