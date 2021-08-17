<template>
  <div class="row my-2 text-light">
    <div class="col-12">
      <div class="d-flex p-3 flex-row row mx-1 justify-content-around bg-primary rounded lead">
        <!-- Title -->
        <div class="col-md-3 text-center">
          <router-link :to="{name:'BugDetailsPage', params: { bugId: bug.id } }" :title="'Navigate to ' + bug.title + ' Details Page'">
            <p class="m-0 text-light">
              {{ bug.title }}
            </p>
          </router-link>
        </div>
        <!-- Reported By -->
        <div class="col-md-3 text-center">
          <p class="m-0">
            {{ bug.creator.name }}
          </p>
        </div>
        <!-- Last Modified -->
        <div class="col-md-3 text-center">
          <p class="m-0">
            {{ updatedAt }}
          </p>
        </div>
        <!-- Status -->
        <div class="col-md-3 text-center">
          <p class="m-0" v-if="bug.closed === false">
            🟢 Open
          </p>
          <p class="m-0" v-else>
            🔴 Closed
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  props: {
    bug: { type: Object, required: true }
  },
  setup(props) {
    return {
      updatedAt: computed(() => {
        const updated = new Date(props.bug.updatedAt)
        return new Intl.DateTimeFormat('en-US').format(updated)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
