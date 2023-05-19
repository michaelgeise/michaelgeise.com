<template>
    <div class="col-lg-8 mx-auto p-sm-3 py-md-5" id="wrap">
        <div id="main"></div>
    <main>
        <div class="card">
            <div class="card-head">
                <h1 class="d-none">Dice Baseball!</h1>
                <div class="input-group">
                    <input type="text" class="form-control" id="titleInput" aria-describedby="basic-addon3" value="Dice Baseball!">
                </div>
            </div>
            <div class="card-body">

                <div class="d-flex justify-content-between inning-score">
                    <div id="outsGroup">
                        <label class="form-check-label" for="outs">Outs</label>
                        <div id="outs" @click.stop.prevent="state.outs >= 2 ? state.outs = 0 : state.outs++" style="cursor: pointer;">
                            <div class="form-check form-check-inline" style="pointer-events: none;">
                                <input class="form-check-input" type="checkbox" :checked="state.outs > 0">
                            </div>
                            <div class="form-check form-check-inline" style="pointer-events: none;">
                                <input class="form-check-input" type="checkbox" :checked="state.outs > 1">
                            </div>
                        </div>
                    </div>

                    <div id="bases">
                        <div class="base-border">
                            <!-- <div class="base" id="secondBase"></div> -->
                            <input class="form-check-input base" type="checkbox" id="second" v-model="state.second">
                        </div>
                        <div class="base-border">
                            <!-- <div class="base hasRunner" id="firstBase"></div> -->
                            <input class="form-check-input base" type="checkbox" id="first" v-model="state.first">
                        </div>
                        <div class="base-border">
                            <!-- <div class="base" id="thirdBase"></div> -->
                            <input class="form-check-input base" type="checkbox" id="third" v-model="state.third">
                        </div>
                    </div>

                    <div id="runsGroup">
                        <div class="mb-3">
                        <label for="runs" class="form-label">Runs</label>
                        <div class="input-group">
                            <input type="number" class="form-control" id="runs" aria-describedby="basic-addon3" v-model="state.runs">
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
                    <div class="dropdown float-end" v-if="state.first && state.third && !state.second">
                    <button 
                        class="btn btn-secondary btn-sm dropdown-toggle" 
                        type="button" 
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Steal
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" @click="setSteal(2)" href="#">Second</a></li>
                        <li><a class="dropdown-item" @click="setSteal(4)" href="#">Home</a></li>
                    </ul>
                    </div>
                    <div class="dropdown float-end" v-else>
                    <button 
                        @click="setSteal()"
                        :disabled="!state.first && !state.second && !state.third" 
                        style="font-size: 21px;"
                        class="btn btn-secondary btn-sm" 
                        type="button" 
                        aria-expanded="false">
                        Steal {{ state.third ? 'Home' : state.second ? '3rd' : state.first ? '2nd' : '' }}
                    </button>
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
    <footer class="pt-5 text-muted border-top" id="footer">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#rulesModal">
        Rules
        </button>
        <span>Dice Baseball &middot; &copy; {{new Date().getFullYear()}}</span>
    </footer>

    <rules></rules>
    <transition name="fade">
        <end-of-inning v-if="showEOI" :state="state" @clear="clearStats(); showEOI = false;" @undo="state.outs--; showEOI = false;"></end-of-inning>
    </transition>
    <transition name="fade">
        <div v-if="showEOI" class="modal-backdrop fade show"></div>
    </transition>

</template>

<script setup>
import { reactive, computed, watch, ref } from 'vue'

import Rules from './Rules.vue';
import endOfInning from './endOfInning.vue';

const state = reactive({
    x: null,
    y: null,
    steal: null, // could be null, 2, 3 or 4 to designate base attempt
    msg: 'Batter up',
    runs: 0,
    totalRuns: 0,
    outs: 0,
    first: false, //    is someone on first, boolean
    second: false,
    third: false
});

const showEOI = ref(false);

//  watches outs, and triggers the modal when we get to three
watch(() => state.outs, outs => {
    console.log(outs);
    if (outs > 2) {
        console.log('Inning over!');
        showEOI.value = true;
    }
})

const clearStats = (clearAll) => { // Pass in true like clearStats(true) and it will clear total runs, too.
    state.runs = 0;
    state.outs = 0;
    state.first = false;
    state.second = false;
    state.third = false;
    state.x = null;
    state.y = null;
    if (clearAll) {
        state.totalRuns = 0;
    }
}

const stealMessages = [
    {   base: 2,
        dice: [1,2,3,4],
        msg: 'Stolen base!',
        safe: true,
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
        safe: true,
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
        safe: true,
        alert: 'success'
    },
    {   
        base: 4,
        dice: [2,3,4,5,6],
        msg: 'Caught stealing!',
        alert: 'danger'
    }
]

const handleSteal = safe => {
    //  if stealing third, everyone else advances.
    //  if stealing home or second, no runner on second, no one else advances
    //  if stealing home or second with runner on second, everyone else advances
    //  handle all other runners
    let trailRunnersMove = false;
    if (state.steal == 3 || ((state.steal == 4 || state.steal == 2) && state.second)) { 
        trailRunnersMove = true;
    }

    let runnerOut = !safe;
    if (trailRunnersMove) {
        advanceBases(1, runnerOut, false, true)
    } else {
        if (safe) {
            if (state.steal == 4) {
                state.runs++;
                state.third = false;
            } else if (state.steal == 3) { 
                state.third = true;
                state.second = false;
            } else {
                state.second = true;
                state.first = false;
            }
        } else {
            state.outs++;
            const startBase = ['first','second','third'][state.steal - 2];
            state[startBase] = false;
        }
    }
}

const setSteal = b => {
    let base;
    if (b) {
        base = b;
    } else if (state.third) {
        base = 4;
    } else if (state.second) {
        base = 3;
    } else {
        base = 2;
    }
    console.log('steal ' + base);
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
            const stealState = stealMessages.find(m => m.base == state.steal && m.dice.includes(state.x));
            handleSteal(stealState.safe);
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

const addToRun = num => {
        state.runs = state.runs + num;
    }

const walkBatter = () => {
    //  check if someone is on first
    if (state.first) {
        advanceBases(1);
    } else {
        //  Just put them on first
        state.first = true;
    }
}

const advanceBases = (num = 1, runnerOut, forceBatterTo, noBatter) => {
    //  handle runner out on third out
    if (runnerOut && state.outs == 2) {
        state.outs == 3;
        return;
    }

    const bonus = state.outs == 2 && !noBatter ? 1 : 0;

    console.log('advance bases ' + num);
    const bonusNum = num + bonus;
    // otherwise advance bases
    if (state.third) {
        addToRun(1);
        state.third = false;
    }
    if (state.second) {
        if (bonusNum == 1) {
            state.third = true;
        } else {
            addToRun(1);
        }
        state.second = false;
    }
    if (state.first) {
        state.first = false;
        if (bonusNum == 1) {
            state.second = true;
        } else if (bonusNum == 2) {
            state.third = true;
        } else {
            addToRun(1);
        }
    }
    //  handle batter
    if (runnerOut) {
        state.outs ++;
    } else {
        if (noBatter) {
            return
        }
        if (forceBatterTo) {
            state[forceBatterTo] = true;
        } else if (num == 4) {
            //  home run
            addToRun(1);
        } else {
            //handle a normal advance to base
            const b = ['first', 'second', 'third'];
            state[b[num-1]] = true;
        }
    }
    
}

const updateStats = () => {
    //  what might we do?

    //  add x to outs
    //  ADVANCE BASES BY X (1,2,3,4)
    //  Remove from base
    //  Add X to runs
    //  clear all

    const result = messages.find(m => {
            const roll = [Math.min(state.x, state.y), Math.max(state.x, state.y)];
            const index = JSON.stringify(m.dice).indexOf(JSON.stringify(roll));
            return index != -1;
        })
    console.log(result);
    result.action();
}

const handleDoublePlay = () => {
    //  check if no one is on base
    if (!state.first && !state.second && !state.third) {
        //  just the batter is out
        state.outs ++;
    } else {
        //  there is atleast one person on base, so 2 outs
        state.outs = state.outs + 2;
        //  no eliminate people starting with most advanced runners
        let outs = 2;
        if (state.third) { 
            state.third = false;
            outs--;
        }
        if (state.second) {
            state.second = false;
            outs--;
        }
        if (state.first && outs > 0) {
            // there was not a runner on second or third, so eliminate first
            state.first = false;
            outs--;
        }
        if (outs <= 0) {
            //  we eliminated enough runners, the hitter can advance
            advanceBases(1);
        }
    }
}

const messages = [
    { dice: [[1,1],[2,6]], msg: "Single!", alert:	"success", action: () => advanceBases(1) },
    { dice: [[1,2]], msg: 'Double play!', alert:	'danger', action: () => handleDoublePlay() },
    { dice: [[1,3]], msg: 'Ground out plus!', alert: 'warning', action: () => advanceBases(1, true)},
    { dice: [[1,4]], msg: 'Ground out!', alert: 'danger', action: () => state.outs ++ },
    { dice: [[1,5]], msg: 'Fly out plus!', alert: 'warning', action: () => advanceBases(1, true)},
    { dice: [[1,6],[2,5]], msg: 'Pop out!', alert: 'danger', action: () => state.outs ++ },
    { dice: [[2,2], [5,5]], msg: 'Double!', alert: 'success', action: () => advanceBases(2)},
    { dice: [[2,3],[3,4],[4,5]], msg: 'Strikeout!', alert: 'danger', action: () => state.outs ++ },
    { dice: [[2,4],[3,5]], msg: 'Walk', alert: 'success', action: () => walkBatter()},
    { dice: [[3,3]], msg: 'Triple!', alert: 'success', action: () => advanceBases(3)},
    { dice: [[3,6],[5,6]], msg: 'Flyout!', alert: 'danger', action: () => state.outs ++ },
    { dice: [[4,4],[6,6]], msg: 'Home run!', alert: 'success', action: () => advanceBases(4)},
    { dice: [[4,6]], msg: 'Single plus!', alert: 'success', action: () => advanceBases(1, false, 'first')},
    ]

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

        #main {
          overflow: auto;
          /* padding-bottom: calc(50vh - 12rem); */
          /* must be same height as the footer */
        }
        @media (max-width: 576px) { 
            body {
                background: none;
            }
            main .card, main .card-head {
                border: 0;
                border-radius: 0;
            }
            footer#footer {
                margin-top: 1rem;
            }
        }
        .card-head {
            background: #084298;
            padding: .5rem 0 0;
            color: #fff;
            font-weight: bold;
            font-size: 1.5rem;
            border-radius: .33rem .33rem 0 0;
        }
        #titleInput {
            text-align: center;
            color: white;
            background: #084298;
            border: 0;
            font-weight: bold;
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

        footer#footer {
            position: relative;
            margin-top: 1rem;
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

        body:before {
          content: "";
          height: 100%;
          float: left;
          width: 0;
          margin-top: -32767px;
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
            box-shadow: 0 .125rem .25rem #757575;
            touch-action: manipulation;
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
        .modal .btn-light {
            color: #0e6dfd;
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
        @media (min-width: 576px) { 
            #wrap {
                min-height: 100%;
            }  
            .card {
                width: 12rem;
                margin: auto;
            }
            footer#footer {
                margin-top: -3.5rem;
            }
        }

        .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>