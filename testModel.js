import { A1 } from "./components/A1"
import { A2 } from "./components/A2"
import { A3 } from "./components/A3"
import { A4 } from "./components/A4"
import { B1 } from "./components/B1"
import { B2 } from "./components/B2"
import { B3 } from "./components/B3"
import { B4 } from "./components/B4"

import { Practise } from "./components/Practise"


export const model = {

    currentTest: {
        name: "hej",
        word: "hhh",
        component: null
    },

    userStats: [],

    startTime: 0,

    endTime: 0,

    testsDone: 0,

    nextTest: false,

    allTests: [
        {name: "Practise", word: "REDAN", component:Practise},
        {name: "B1", word: "PRATAR", component:B1},
        {name: "B2", word: "VERKAR", component:B2},
        {name: "B3", word: "SOLIG", component:B3},
        {name: "B4", word: "LIKSOM", component:B4},
        {name: "A1", word: "SPARKA", component:A1},
        {name: "A2", word: "UNDER", component:A2},
        {name: "A3", word: "FATTAS", component:A3},
        {name: "A4", word: "VIKTER", component:A4},
    ],

    startTimer(){ 
        this.startTime = Date.now();
    },

    stopTimer(){
        this.endTime = Date.now()
        const stats = {name: this.currentTest.name, time: (this.endTime - this.startTime) / 1000}
        this.userStats.push(stats)
        console.log(stats)
    }, 

    getCurrentTest(){
        this.startTime = 0;
        this.endTime = 0;
        this.currentTest = this.allTests[this.testsDone];
        this.nextTest = false;
    },

    finishTest(){
        this.testsDone += 1;
        this.nextTest = true;
    },

    restart(){
        this.currentTest = {};
        this.userStats = [];
        this.startTime = 0;
        this.endTime = 0;
        this.testsDone = 0;
    }
}