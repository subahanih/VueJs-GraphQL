<template>
    <div>
        <div class="search-panel">
            <button class="reset-button" v-on:click="reset">
                <img src="../assets/refresh.png" width="20" height="20"/>Reset</button>
            <button class="search-button" v-on:click="search">
                <img src="../assets/search.png" width="20" height="20"/>Search</button>
            <input type="text" class="text-field"
                v-model.number="pageNumber" :maxlength=2 @keypress="onlyNumber">
            <label class="text-field-label">Page Number:</label>
        </div>
        <div class="tbl-panel">
            <table class="tbl-people">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rotation Period</th>
                        <th>Orbital Period</th>
                        <th>Diameter</th>
                        <th>Climate</th>
                        <th>Gravity</th>
                        <th>Terrain</th>
                        <th>Surface Water</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(planet, index) in planets.results" :key="index">
                        <td>{{planet.name}}</td>
                        <td>{{planet.rotation_period}}</td>
                        <td>{{planet.orbital_period}}</td>
                        <td>{{planet.diameter}}</td>
                        <td>{{planet.climate}}</td>
                        <td>{{planet.gravity}}</td>
                        <td>{{planet.terrain}}</td>
                        <td>{{planet.surface_water}}</td>
                        <td>{{planet.population}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
    data() {
        return {
            pageNumber: "",
            planets: []
        }
    },
    apollo: {
        planets: {
            query: gql`query planets($pageNumber: Int!) {
                planets(pageNumber: $pageNumber) {
                    results {
                       name
                       rotation_period
                       orbital_period
                       diameter 
                       climate
                       gravity
                       terrain
                       surface_water
                       population
                    }
                }
            }`,
            variables: {
                pageNumber: 1,
            },
        },
    },
    methods: {
        reset() {
            this.pageNumber = ""
        },
        search() {
            console.log('Mahab: ' + this.pageNumber);
            if(this.pageNumber != "") {
                this.$apollo.queries.planets.refetch({
                    pageNumber: this.pageNumber
                })
            } else {
                alert('Please enter a page number to search')
            }
        },
        onlyNumber($event) {
            let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
                $event.preventDefault();
            }
        }
    }
}
</script>

<style scoped>
    .search-panel {
        width: calc(100% - 18px);
        height: 60px;
        background-color: #d1d1d1;
        margin: 8px 8px 6px 8px;
        border-radius: 5px;
        border: 1px solid #afafaf;
        box-shadow: 0px 0px 4px 2px rgba(76, 74, 74, 0.3);
        -moz-box-shadow: 0px 0px 4px 2px rgba(76, 74, 74, 0.3);
        -webkit-box-shadow: 0px 0px 4px 2px rgba(76, 74, 74, 0.3);
    }

    .tbl-panel {
        width: calc(100% - 14px);
        height: 100%;
        padding: 0px 7px 12px 7px;
    }

    .tbl-people {
        text-align: center;
        font: normal 13px arial, sans-serif;
        border-collapse: collapse;
        border: 3px solid #dddddd;
        width: 100%;
    }

    .tbl-people td, #people th {
        border: 1px solid #dddddd;
        padding: 8px;
        cursor: pointer;
    }

    .tbl-people tr:nth-child(even) {
        background-color: #f2f4f6;
    }

    .tbl-people tr:hover {
        background-color: #dddddd;
    }

    .tbl-people tr:active {
        background-color: #cecece;
    }

    .tbl-people th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #c9005e;
        color: white;
        font-weight: 200;
        font-size: 13px;
    }

    .search-button {
        font-size: 12px;
        color: #f2f4f6;
        width: 50px;
        height: calc(100% - 8px);
        background-color: #c9005e;
        margin: 4px 2px 4px 4px;
        outline: 0;
        border-width: 0px;
        cursor: pointer;
        border-radius: 4px;
        float: right;
    }

    .search-button:hover {
        background-color: #e7006c;
    }

    .search-button:active {
        background-color: #8f0043;
        color: #e7e7e7;
    }

    .reset-button {
        font-size: 12px;
        color: #f2f4f6;
        width: 50px;
        height: calc(100% - 8px);
        background-color: #c9005e;
        margin: 4px 4px 4px 4px;
        outline: 0;
        border-width: 0px;
        cursor: pointer;
        border-radius: 4px;
        float: right;
    }

    .reset-button:hover {
        background-color: #e7006c;
    }

    .reset-button:active {
        background-color: #8f0043;
        color: #e7e7e7;
    }

    .text-field {
        width: 100px;
        height: 25px;
        text-indent: 10px;
        font-size: 15px;
        border-radius: 4px;
        color: #e7006c;
        background-color: hsl(0, 0%, 90%);
        border-color:rgba(63,94,251,1);
        margin: 0 0 20px 0;
        float: right;
        margin: 15px 15px 15px 10px;
    }

    .text-field:focus {
        outline: none;
    }

    .text-field-label {
        font-size: 14px;
        float: right;
        margin: 20px 0px 20px 10px;
    }
</style>