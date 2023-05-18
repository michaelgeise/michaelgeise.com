<template>
  <div class="modal show" tabindex="-1" aria-labelledby="rulesModalLabel" style="display: block;">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">End of Inning</h5>
            <button @click="emit('undo')" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Go back"></button>
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
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
              <label class="form-check-label" for="flexCheckChecked">
                Clear runs
              </label>
            </div>
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
  const props = defineProps(['state'])
  const emit = defineEmits([
    'clear', 'undo'
  ])
</script>

<style>

</style>