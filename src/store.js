import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
        nama: null,
		show: true,
		questionIndex: 0,
		totalCorrect: 0,
        questions: [
            {
                question: "5 + 5 =",
                choices: [
                    { text: '10', value: 'A' },
                    { text: '11', value: 'B' },
                    { text: '12', value: 'C' },
                    { text: '13', value: 'D' }
                ],
                correct: 'A'
            },
            {
                question: "300 + 100?",
                choices: [
                    { text: '200', value: 'A' },
                    { text: '300', value: 'B' },
                    { text: '400', value: 'C' },
                    { text: '500', value: 'D' }
                ],
                correct: 'C'
            },
            {
                question: "500 - 200?",
                choices: [
                    { text: '200', value: 'A' },
                    { text: '300', value: 'B' },
                    { text: '400', value: 'C' },
                    { text: '500', value: 'D' }
                ],
                correct: 'B'
            },
            {
                question: "257 - 136?",
                choices: [
                    { text: '122', value: 'A' },
                    { text: '153', value: 'B' },
                    { text: '103', value: 'C' },
                    { text: '121', value: 'D' }
                ],
                correct: 'D'
            },
            {
                question: "2 X 2?",
                choices: [
                    { text: '5', value: 'A' },
                    { text: '4', value: 'B' },
                    { text: '9', value: 'C' },
                    { text: '2', value: 'D' }
                ],
                correct: 'B'
            }
        ]
	},
	getters: {
        checkName: state => {
			return (state.nama != null) ? true : false;
		},
		score: state => {
			return (100 / state.questions.length) * state.totalCorrect;
		}
	},
	mutations: {
        fillName(state, name) {
			state.nama = name;
		},
		check(state, payload) {
			if (payload.correct === payload.picked) state.totalCorrect++;
			state.questionIndex++;
		}
	}	
});