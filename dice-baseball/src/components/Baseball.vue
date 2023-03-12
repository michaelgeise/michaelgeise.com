<template>

<div class="col-lg-8 mx-auto p-3 py-md-5" id="wrap">
    <div id="main"></div>
  <main>
	<div class="card">
        <div class="card-body">
            <h1 class="h5">Dice Baseball!</h1>
            <div class="d-flex justify-content-between inning-score">
                <div id="outsGroup">
                    <label class="form-check-label" for="outs">Outs</label>
                    <div id="outs">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        </div>
                    </div>
                </div>

                <div id="bases">
                    <div class="base-border">
                        <!-- <div class="base" id="secondBase"></div> -->
                        <input class="form-check-input base" type="checkbox" id="second" :value="state.second">
                    </div>
                    <div class="base-border">
                        <!-- <div class="base hasRunner" id="firstBase"></div> -->
                        <input class="form-check-input base" type="checkbox" id="first" :value="state.first">
                    </div>
                    <div class="base-border">
                        <!-- <div class="base" id="thirdBase"></div> -->
                        <input class="form-check-input base" type="checkbox" id="third" :value="state.third">
                    </div>
                </div>

                <div id="runsGroup">
                    <div class="mb-3">
                    <label for="runs" class="form-label">Runs</label>
                    <div class="input-group">
                        <input type="number" class="form-control" id="runs" aria-describedby="basic-addon3" value="0">
                    </div>
                    </div>
                </div>
            </div>
			<div v-if="currentMsg" :class="`alert alert-${currentMsg.alert}`" role="alert">
			  {{ currentMsg.msg }}
			</div>
			<div>
				<div class="dice-placeholder" id="first-pick">
                    <img v-if="state.x == null" src="@/assets/img/blank.svg" alt="blank">
                    <img v-if="state.x == 1" src="@/assets/img/1.svg" alt="1">
                    <img v-if="state.x == 2" src="@/assets/img/2.svg" alt="2">
                    <img v-if="state.x == 3" src="@/assets/img/3.svg" alt="3">
                    <img v-if="state.x == 4" src="@/assets/img/4.svg" alt="4">
                    <img v-if="state.x == 5" src="@/assets/img/5.svg" alt="5">
                    <img v-if="state.x == 6" src="@/assets/img/6.svg" alt="6">
                </div>
				<div v-if="!state.steal" class="dice-placeholder" id="second-pick">
                    <img v-if="state.y == null" src="@/assets/img/blank.svg" alt="blank">
                    <img v-if="state.y == 1" src="@/assets/img/1.svg" alt="1">
                    <img v-if="state.y == 2" src="@/assets/img/2.svg" alt="2">
                    <img v-if="state.y == 3" src="@/assets/img/3.svg" alt="3">
                    <img v-if="state.y == 4" src="@/assets/img/4.svg" alt="4">
                    <img v-if="state.y == 5" src="@/assets/img/5.svg" alt="5">
                    <img v-if="state.y == 6" src="@/assets/img/6.svg" alt="6">
                </div>
				<span v-if="state.steal == 2" class="badge rounded-pill text-bg-primary steal-badge">2nd</span>
				<span v-if="state.steal == 3" class="badge rounded-pill text-bg-primary steal-badge">3rd</span>
				<span v-if="state.steal == 4" class="badge rounded-pill text-bg-primary steal-badge">Home</span>
				<div class="dropdown float-end">
				  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				    Steal
				  </button>
				  <ul class="dropdown-menu">
				    <li><a class="dropdown-item" @click="setSteal(2)" href="#">Second</a></li>
				    <li><a class="dropdown-item" @click="setSteal(3)" href="#">Third</a></li>
				    <li><a class="dropdown-item" @click="setSteal(4)" href="#">Home</a></li>
				  </ul>
				</div>
			</div>

			<div class="d-flex justify-content-between dice-row">
				<button @click="setDie(1)" type="button" class="btn btn-light btn-dice"><img src="@/assets/img/1.svg" alt="1"></button>
				<button @click="setDie(2)" type="button" class="btn btn-light btn-dice"><img src="@/assets/img/2.svg" alt="2"></button>
				<button @click="setDie(3)" type="button" class="btn btn-light btn-dice"><img src="@/assets/img/3.svg" alt="3"></button>
			</div>
	 		<div class="d-flex justify-content-between dice-row">
				<button @click="setDie(4)" type="button" class="btn btn-light btn-dice"><img src="@/assets/img/4.svg" alt="4"></button>
				<button @click="setDie(5)" type="button" class="btn btn-light btn-dice"><img src="@/assets/img/5.svg" alt="5"></button>
				<button @click="setDie(6)" type="button" class="btn btn-light btn-dice"><img src="@/assets/img/6.svg" alt="6"></button>
			</div>
		</div>
	</div>
  </main>
  </div>
  <footer class="pt-5 my-5 text-muted border-top" id="footer">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#rulesModal">
      Rules
    </button>
    <span>Dice Baseball &middot; &copy; {{new Date().getFullYear()}}</span>
  </footer>


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

<script setup>
import { reactive, computed } from 'vue'
const state = reactive({
    x: null,
    y: null,
    steal: null,
    msg: 'Batter up',
    runs: 0,
    outs: 0,
    first: false,
    second: false,
    third: false
});

const messages = [
    { dice: [[1,1],[2,6]], msg: "Single!", alert:	"success" },
    { dice: [[1,2]], msg: 'Double play!', alert:	'danger' },
    { dice: [[1,3]], msg: 'Ground out plus!', alert: 'warning'},
    { dice: [[1,4]], msg: 'Ground out!', alert: 'danger'},
    { dice: [[1,5]], msg: 'Fly out plus!', alert: 'warning'},
    { dice: [[1,6],[2,5]], msg: 'Pop out!', alert: 'danger'},
    { dice: [[2,2], [5,5]], msg: 'Double!', alert: 'success'},
    { dice: [[2,3],[3,4],[4,5]], msg: 'Strikeout!', alert: 'danger'},
    { dice: [[2,4],[3,5]], msg: 'Walk', alert: 'success'},
    { dice: [[3,3]], msg: 'Triple!', alert: 'success'},
    { dice: [[3,6],[5,6]], msg: 'Flyout!', alert: 'danger'},
    { dice: [[4,4],[6,6]], msg: 'Home run!', alert: 'success'},
    { dice: [[4,6]], msg: 'Single plus!', alert: 'success'},
    { dice: [[5,6]], msg: 'Fly out plus!', alert: 'warning'},
    ]

const stealMessages = [
    {   base: 2,
        dice: [1,2,3,4],
        msg: 'Stolen base!',
        alert: 'success'
    },
    {   
        base: 2,
        dice: [5,6],
        msg: 'Caught stealing!',
        alert: 'danger'
    },
    {   
        base: 3,
        dice: [1,2,3],
        msg: 'Stolen base!',
        alert: 'success'
    },
    {   
        base: 3,
        dice: [4,5,6],
        msg: 'Caught stealing!',
        alert: 'danger'
    },
    {   
        base: 4,
        dice: [1],
        msg: 'Stolen base!',
        alert: 'success'
    },
    {   
        base: 4,
        dice: [2,3,4,5,6],
        msg: 'Caught stealing!',
        alert: 'danger'
    }
]


const setSteal = base => {
    if (base !== null) {
        state.steal = base;
        state.x = null;
        state.y = null;
    }
};

const currentMsg = computed(() => {
    if (state.steal !== null) {
        if (state.x == null) {
            return {
                msg: 'Steal Attempt!', alert: 'primary'
            }   
        } else {
            return stealMessages.find(m => m.base == state.steal && m.dice.includes(state.x));
        }
    } else if (state.x && state.y) {
        console.log('complete bat', [state.x,state.y]);
        const msg = messages.find(m => {
            const roll = [Math.min(state.x, state.y), Math.max(state.x, state.y)];
            const index = JSON.stringify(m.dice).indexOf(JSON.stringify(roll));
            return index != -1;
        })
        console.log(msg, [state.x, state.y], messages)
        return msg;
    } else {
        return {
            msg: 'Batter up', alert: 'primary'
        }
    }

})

const setDie = num => {
    if (state.steal !== null && state.x !== null) {
        //  we finished a steal roll, so clear the numbers
        state.steal = null;
        state.x = null;
    }

    if (state.x == null) {
        //  fist roll, make X the result;
        state.x = num;

        //  Handle if Stealing
        if (state.steal) {
            updateStats();
        }
    } else if(state.y == null) {
        //  second roll, make Y the result
        console.log('set y', num)
        state.y = num;
        
        //  This was a hit, now we need to handle the result
        updateStats();
    } else {
        //  otherwise, it's a new roll, clear the old Y and set x to number
        state.x = num;
        state.y = null;
    }
}

const updateStats = () => {
    //  what might we do?

    //  add x to outs
    //  ADVANCE BASES BY X (1,2,3,4)
    //  Remove from base
    //  Add X to runs
    //  clear all

    const addToRun = num => {
        state.runs = state.runs + num;
    }

    const advanceBases = (num = 1) => {
        state.first, state.second, state.third
        if (state.third) {
            addToRun(1);
            state.third = false;
        }
        if (state.second) {
            if (num == 1) {
                state.third = true;
            } else {
                addToRun(1);
            }
            state.second = false;
        }
        if (state.first) {
            state.first = false;
            if (num == 1) {
                state.second = true;
            } else if (num == 2) {
                state.third = true;
            } else {
                addToRun(1);
            }
        }
        //  handle batter
        if (num == 4) {
            addToRun(1);
        } else {
            const b = [first, second, third];
            state[b] = true;
        }
    }

    const roll = [state.x, state.y];

    if (roll == [[1,1],[2,6]]) {    //  single
        advanceBases(1);
    };

    // { dice: [[1,1],[2,6]], msg: "Single!", alert:	"success" },
    // { dice: [[1,2]], msg: 'Double play!', alert:	'danger' },
    // { dice: [[1,3]], msg: 'Ground out plus!', alert: 'warning'},
    // { dice: [[1,4]], msg: 'Ground out!', alert: 'danger'},
    // { dice: [[1,5]], msg: 'Fly out plus!', alert: 'warning'},
    // { dice: [[1,6],[2,5]], msg: 'Pop out!', alert: 'danger'},
    // { dice: [[2,2], [5,5]], msg: 'Double!', alert: 'success'},
    // { dice: [[2,3],[3,4],[4,5]], msg: 'Strikeout!', alert: 'danger'},
    // { dice: [[2,4],[3,5]], msg: 'Walk', alert: 'success'},
    // { dice: [[3,3]], msg: 'Triple!', alert: 'success'},
    // { dice: [[3,6],[5,6]], msg: 'Flyout!', alert: 'danger'},
    // { dice: [[4,4],[6,6]], msg: 'Home run!', alert: 'success'},
    // { dice: [[4,6]], msg: 'Single plus!', alert: 'success'},
    // { dice: [[5,6]], msg: 'Fly out plus!', alert: 'warning'},
}

</script>

<style>
        * {
            font-size: 24px;
            margin: 0;
            padding: 0;
          }
        .btn img {
            height: 2.5rem;
          }
        .alert {
            background-size: contain;
            font-size: 20px;
            }
        body {
            background: rgb(92,165,218);
            background-size: cover;
            min-height: 100vh;
            background-image: url('/dice-baseball/assets/img/bg.jpg');
            background-position: center center;
        }

        html,
        body {
          height: 100%;
        }

        #wrap {
          min-height: 100%;
        }

        #main {
          overflow: auto;
          /* padding-bottom: calc(50vh - 12rem); */
          /* must be same height as the footer */
        }
        h1.h5 {
            text-align: center;
            margin-bottom: 1rem;
            font-weight: 500;
        }
        .inning-score * {
            font-size: 24px;
        }
        #outsGroup .form-check-inline {
            display: inline-block;
            margin-right: 0;
        }
        #outsGroup .form-check-input[type=checkbox] {
            border-radius: 50%;
            cursor: pointer;
        }
        #outsGroup .form-check-input:checked {
            background-color: #EB5757;
            border-color: #EB5757;
        }
        #outsGroup .form-check-input:checked[type=checkbox] {
            background-image: none;
        }
        #outsGroup .form-check-input:focus {
            border-color: #EB5757;
            outline: 0;
            box-shadow: 0 0 0 0.25rem rgba(235,87,87,.25);
        }
        #bases {
            --s: 1.5rem; /* control the size */
            display: grid;
            grid: auto-flow var(--s) / repeat(2,var(--s));
            place-items: center;
            transform: rotate(45deg);
            left: -0.5rem;
            position: relative;
        }
        #bases > .base-border {
            width: 2rem; 
            aspect-ratio: 1;
            transform: scale(var(--_t,1)) rotate(-45deg);
            clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
            cursor: pointer;
            transition: .2s linear;
            background-color: #757575;
            position: relative
        }
        #bases > .base-border > .base {
            width: 1.833rem;
            height: 1.833rem;
            aspect-ratio: 1;
            clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
            cursor: pointer;
            transition: .2s linear;
            background-color: #fff;
            position: absolute;
            top: 0.0833rem;
            left: 0.0833rem;
            margin: 0;
            border: none;
        }
        #bases > .base-border > .base.form-check-input:checked {
            background-color: #F2C94C;
            background-image: none;
        }
        #bases > .base-border > .base:hover {
            filter: grayscale(0);
            --_t: 1.15;
            background: #F8E4A5;
        }
        #bases .base.hasRunner {
            background-color: #F2C94C;
        }         
        #runsGroup input, #runsGroup .input-group, #runsGroup .input-group>.form-control {
            width: 2rem;
            height: 1.5rem;
        }
        #runsGroup .form-label {
            margin-bottom: 0;
        }
        #runsGroup .form-control {
            padding: 0.25rem 0.125rem 0.25rem 0.25rem;
            font-size: 24px;
        }

        #footer {
            position: relative;
            margin-top: -3.5rem !important;
            height: 3.5rem;
            clear: both;
            text-align: center;
            padding-top: 1rem !important;
            background-color: white;
        }
        #footer a, #footer span {
            font-size: 20px;
            margin:0 1rem;
        }


        /* Opera Fix thanks to Maleika (Kohoutec) */

        body:before {
          content: "";
          height: 100%;
          float: left;
          width: 0;
          margin-top: -32767px;
          /* thank you Erik J - negate effect of float*/
        }
        .card {
            width: 12rem;
            margin: auto;
        }
        h1.card-title.h5 {
            font-size: 1REM;
            text-align: center;
            font-weight: 400;
            color: #101010;
            margin-bottom: 1rem;
        }
        .dice-placeholder {
            height: 2rem;
            width: 2rem;
            border-radius: 0.375rem;
            background-color: #e9e9e9;
            display: inline-block;
            padding: .25rem;
            margin-right: 0.25rem;
        }
        .dice-placeholder img {
            height: 1.5rem;
            display: block;
        }
        .steal-badge.badge {
            vertical-align: top;
        }
        .dice-row {
            margin-top: 1rem;
        }
        .dice-row .btn-dice {
            padding: 0;
            box-shadow: 0 .125rem .25rem #757575
        }
        .alert {
            background-position: right center;
            background-repeat: no-repeat;
        }
        .alert-success {
            background-image: url('/dice-baseball/assets/img/success.svg');
        }
        .alert-warning {
            background-image: url('/dice-baseball/assets/img/warning.svg');
        }
        .alert-danger {
            background-image: url('/dice-baseball/assets/img/danger.svg');
        }
        .alert-primary {
            background-image: url('/dice-baseball/assets/img/primary.svg');
        }
        .modal * {
            font-size: 16px;
        }
        /* If screen size is more than 600px wide, set the font-size of <div> to 80px */
        @media screen and (min-width: 800px) {
            * {
              font-size: 32px;
            }
             .btn img {
              height: 2.5rem;
             }
            .alert {
                background-size: contain;
                font-size: 28px;
            }
            .modal * {
                font-size: 24px;
            }
        }
</style>