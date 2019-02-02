<template>
	<div class="quiz">
		<div v-show="checkName() == false">
			<b-form-input class=" mx-auto col-md-4 col-sm-12" v-model="names" type="text" placeholder="Masukkan Nama"></b-form-input>
			<b-button variant="success" class="mt-3" v-on:click="fillName(names)">
				<span>Mulai Kuis</span>
			</b-button>
		</div>

		<div v-show="checkName() == true" v-for="(question, index) in quiz.questions" v-bind:key="question.id">
			<div v-show="index === questionIndex">
				<h4 class="mb-3">{{ question.question }}</h4>
				<b-form-radio-group v-model="picked" :options="question.choices" v-bind:name="index"></b-form-radio-group>
				<b-button variant="success" class="mt-3" v-on:click="check(question.correct, picked)">
					<span v-if="questionIndex == quiz.questions.length - 1">Selesai</span>
					<span v-else>Selanjutnya</span>
				</b-button>
			</div>
		</div>
		
		<div v-show="questionIndex == quiz.questions.length">
			<h2>Selamat, {{nama}} !</h2>
			<p>Anda Mendapatkan Nilai</p><h3>{{ score() }}</h3><p>Dengan {{ totalCorrect }} Jawaban Benar</p>
		</div>
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

var quiz = {
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
		}
	]
};

export default {
	name: 'Quiz',
	data: function() {
		return {
			nama: null,
			picked: '',
			show: true,
			quiz: quiz,
			questionIndex: 0,
			totalCorrect: 0,
			userResponses: Array(quiz.questions.length).fill(false)
		}
	},
	methods: {
		fillName(names) {
			this.nama = names;
		},
		checkName: function() {
			return (this.nama != null) ? true : false;
		},
		check(correct, picked) {
			if (correct === picked) this.totalCorrect++;
			this.questionIndex++;
		},
		score: function() {
			return (100 / quiz.questions.length) * this.totalCorrect;
		}
	}
}
</script>