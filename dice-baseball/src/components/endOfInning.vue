<template>
  <div class="modal modal-xl show" tabindex="-1" aria-labelledby="rulesModalLabel" style="display: block;">
    <div class="modal-dialog" style="width: 300px;">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">End of Inning</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                    <td scope="row" colspan="1">1</td>
                    <td scope="row" colspan="1">3</td>
                    <td scope="row" colspan="1">0</td>
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
  const props = defineProps(['state'])
  const emit = defineEmits([
    'clear', 'undo'
  ])
</script>

<style>

</style>