<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12">
        <BugDetails :bug="bug" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <NoteThread :notes="notes" :bug="bug" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { bugsService } from '../services/BugsService'
import Pop from '../utils/Notifier'
export default {
  setup() {
    const route = useRoute()
    const notes = computed(() => AppState.notes)
    const bug = computed(() => AppState.activeBug)
    onMounted(async() => {
      if (route.params.bugId) {
        try {
          await bugsService.getNotesByBugId(route.params.bugId)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    })
    watchEffect(async() => {
      try {
        if (route.params.bugId) {
          await bugsService.getBugById(route.params.bugId)
        }
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      notes,
      bug
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
