<template>
  <!-- Modal -->
  <div class="modal modal-xl fade" id="rulesModal" tabindex="-1" aria-labelledby="rulesModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Dice Baseball Rules</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <ul>
                <li>Runners advance an extra base when there is a hit with 2 outs</li>
                <li>Outcomes ending in "plus" allow the runners to advance an extra base</li>
            </ul>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Roll</th>
                <th scope="col">Outcome</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" colspan="2">Batting</th>
                </tr>
                <tr class="table-success">
                    <td scope="row">1-1, 2-6</td>
                    <td>Single!</td>
                </tr>
                <tr class="table-danger">
                    <td scope="row">1-2</td>
                    <td>Double play!</td>
                </tr>
                <tr class="table-warning">
                    <td scope="row">1-3</td>
                    <td colspan="2">Groundout plus!</td>
                </tr>
                <tr class="table-danger">
                    <td scope="row">1-4</td>
                    <td>Groundout!</td>
                </tr>
                <tr class="table-warning">
                    <td scope="row">1-5</td>
                    <td colspan="2">Fly out plus!</td>
                </tr>
                <tr class="table-danger">
                    <td scope="row">1-6, 2-5</td>
                    <td>Pop out!</td>
                </tr>
                <tr class="table-success">
                    <td scope="row">2-2, 5-5</td>
                    <td>Double!</td>
                </tr>
                <tr class="table-danger">
                    <td scope="row">2-3, 3-4, 4-5</td>
                    <td>Strikeout!</td>
                </tr>
                <tr class="table-success">
                    <td scope="row">2-4, 3-5</td>
                    <td>Walk</td>
                </tr>
                <tr class="table-success">
                    <td scope="row">3-3</td>
                    <td>Triple!</td>
                </tr>
                <tr class="table-danger">
                    <td scope="row">3-6, 5-6</td>
                    <td>Fly out!</td>
                </tr>
                <tr class="table-success">
                    <td scope="row">4-4, 6-6</td>
                    <td>Home run!</td>
                </tr>
                <tr class="table-success">
                    <td scope="row">4-6</td>
                    <td>Single plus!</td>
                </tr>
                <tr>
                    <th scope="row" colspan="2">Stealing Second</th>
                </tr>
                <tr class="table-success">
                    <td scope="row">1, 2, 3, 4</td>
                    <td>Stolen base!</td>
                </tr>
                <tr class="table-danger">
                    <td scope="row">5, 6</td>
                    <td>Caught stealing!</td>
                </tr>
                <tr>
                    <th scope="row" colspan="2">Stealing Third</th>
                </tr>
                <tr class="table-success">
                    <td scope="row">1, 2, 3</td>
                    <td>Stolen base!</td>
                </tr>
                <tr class="table-danger">
                    <td scope="row">4, 5, 6</td>
                    <td>Caught stealing!</td>
                </tr>
                <tr>
                    <th scope="row" colspan="2">Stealing Home</th>
                </tr>
                <tr class="table-success">
                    <td scope="row">1</td>
                    <td>Stolen base!</td>
                </tr>
                <tr class="table-danger">
                    <td scope="row">2, 3, 4, 5, 6</td>
                    <td>Caught stealing!</td>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>