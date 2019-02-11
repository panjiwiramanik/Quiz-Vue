# Vue Quiz

Tugas Pemrograman Web Dinamis Berbasis Vue JS, Menggunakan :
* Bootstrap Vue
* Vue Router
* VUEX

## Getting Started

Bacalah Intruksi Dibawah Ini Agar Projek Dapat Dijalankan Dengan Lancar.

### Prerequisites

Yang Dibutuhkan

```
NPM
```

### Installing

Pertama
```
git clone https://github.com/panjiwiramanik/Quiz-Vue.git
```

Kedua
```
cd Quiz-Vue
```

Ketiga
```
npm install
```

Keempat
```
npm run serve

```

## Explaining

1. ![image main.js](https://gitlab.com/Panjiwiramanik/vuequiz/blob/master/image/1.png "image main.js")

Dalam file main.js, import file *router* dan *store* lalu masukan ke instance *Vue*

2. ![image router.js](https://gitlab.com/Panjiwiramanik/vuequiz/blob/master/image/2.png "image router.js")

Dalam file router.js, import *vue-router* dari plugin, import views *home* dan *quiz*.
```
Vue.use(Router) // mengatakan pada vue untuk menggunakan router

export default new Router({ // data yang di export ke main.js
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz
    }
  ]
})
```

3. ![image store.js](https://gitlab.com/Panjiwiramanik/vuequiz/blob/master/image/3.png "image store.js")

Dalam file store.js, import *Vuex* dari plugin,
```
Vue.use(Vuex); // mengatakan pada vue untuk menggunakan Vuex

export const store = new Vuex.Store({ // data yang di export ke main.js
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
            ...
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
```

4. ![view script Quiz.vue](https://gitlab.com/Panjiwiramanik/vuequiz/blob/master/image/5.png "view script Quiz.vue")

```
<script>
export default {
	name: 'Quiz',
	computed: { // get computed value from state and getters from store.js bisa menggunakan $store karena sudah di instance dalam main.js
		nama() {
			return this.$store.state.nama
		},
		show() {
			return this.$store.state.show
		},
		questions() {
			return this.$store.state.questions
		},
		questionIndex() {
			return this.$store.state.questionIndex
		},
		totalCorrect() {
			return this.$store.state.totalCorrect
		},
		checkName() {
			return this.$store.getters.checkName
		},
		score() {
			return this.$store.getters.score
		}
	},
	methods: { // function for commit to mutations in store.js
		fillName(names) {
			this.$store.commit('fillName', names);
		},
		check(correct, picked) {
			this.$store.commit('check', {
				correct,
				picked
			})
		},
	}
}
</script>
```

## Authors

* **M. Panji Wiramanik** - (https://github.com/panjiwiramanik)