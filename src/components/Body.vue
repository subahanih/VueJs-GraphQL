<template>
    <div class="body-panel">
        <div class="menu-panel">
            <div class="menu-item-div" @click="loadComponent('People')"
                :disabled="currentComp === 'People'"
                v-bind:class="[isPeopleActive ? 'menu-item-active' : 'menu-item-div']">
                <img class="menu-item" src="../assets/people.png" />
                <h4 class="menu-txt">People</h4>
            </div>
            <div class="menu-item-div" @click="loadComponent('Planets')"
                :disabled="currentComp === 'Planets'"
                v-bind:class="[isPlanetsActive ? 'menu-item-active' : 'menu-item-div']">
                <img class="menu-item" src="../assets/planet.png" />
                <h4 class="menu-txt">Planets</h4>
            </div>
        </div>
        <div class="content-panel">
            <component :is="currentComp"></component>
        </div>
    </div>
</template>

<script>
import People from './People'
import Planets from './Planets'
import { myVue } from '../main.js';

export default {
    components: {
        People,
        Planets
    },
    methods: {
        loadComponent(comp) {
            myVue.$emit('loadComp', comp);
            if(comp === 'People') {
                this.isPeopleActive = true
                this.isPlanetsActive = false
            } else {
                this.isPeopleActive = false
                this.isPlanetsActive = true
            }
        }
    },
    data() {
        return {
            currentComp: People,
            isPeopleActive: true,
            isPlanetsActive: false
        };
    },
    created() {
        myVue.$on('loadComp', comp => {
            this.currentComp = comp
        })
    }   

}
</script>

<style scoped>
    .body-panel {
        position:absolute;
        width:100%;
        height: calc(100% - 115px);
        top: 85px;
        left: 0;
        right: 0;
        background-size: 100% 100%;
        background-color: rgb(235, 235, 235);
    }

    .content-panel {
        position:absolute;
        height: 100%;
        width: calc(100% - 100px);
        left: 100px;
        overflow: scroll;
    }

    .menu-panel {
        width: 100px;
        height: calc(100% - 115px);
        background-color: #222222;
        left: 0;
        top: 85px;
        position: fixed;
    }

    .menu-item-div {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #222222;
        background-clip: content-box;
        display: table;
        cursor: pointer;
    }
    
    .menu-item-active {
        background-color: #333333;
    }

    .menu-item-div:hover {
        background-color: #505050;
    }

    .menu-item-div:active {
        background-color: #222222;
    }

    .menu-item {
        width: 60px;
        height: 60px;
        cursor: pointer;
        padding: 10px 0 0 20px;
    }

    .menu-txt {
        color: #e6e6e6;
        font: normal 13px arial, sans-serif;
        padding: 4px 0 0 25px;
        cursor: pointer;
    }
</style>