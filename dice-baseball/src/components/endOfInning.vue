<template>
  <div class="modal show" tabindex="-1" aria-labelledby="rulesModalLabel" style="display: block;">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">End of Inning</h5>
            <button @click="emit('undo')" type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <table class="table">
            <thead>
                <tr>
                <th scope="col">Runs</th>
                <th scope="col">Hits</th>
                <th scope="col">LOB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row" colspan="1">{{ props.state.runs }}</td>
                    <td scope="row" colspan="1">{{ props.state.runs + 3 + onBaseCount }}</td>
                    <td scope="row" colspan="1">{{ onBaseCount }}</td>
                </tr>
            </tbody>
            </table>
            <!-- leave commented out until logic to clear runs is added -->
            <!-- <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
              <label class="form-check-label" for="flexCheckChecked">
                Clear runs
              </label>
            </div> -->
        </div>
        <div class="modal-footer">
            <button @click="emit('clear')" type="button" class="btn btn-primary w-100" data-bs-dismiss="modal">Next inning</button>
            <button @click="emit('undo')" type="button" class="btn btn-light w-100" data-bs-dismiss="modal">Go back</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script setup>
  import { computed } from 'vue';
  const props = defineProps(['state'])
  const emit = defineEmits([
    'clear', 'undo'
  ])
  const onBaseCount = computed(() => {
    const bases = [props.state.first, props.state.second, props.state.third];
    return bases.reduce((a,b) => { return !!b ? a + 1 : a}, 0)
  })
</script>

<style>

</style>