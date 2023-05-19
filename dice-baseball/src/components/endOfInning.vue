<template>
  <div class="modal modal-xl show" tabindex="-1" aria-labelledby="rulesModalLabel" style="display: block;">
    <div class="modal-dialog" style="width: 300px;">
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
        </div>
        <div class="modal-footer">
            <button @click="emit('clear')" type="button" class="btn btn-primary" data-bs-dismiss="modal">Next inning</button>
            <button @click="emit('undo')" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Go Back</button>
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