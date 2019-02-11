<template>
	<div class="Quiz">
		<div v-if="checkName == false">
			<b-form-input class=" mx-auto col-md-4 col-sm-12" v-model="names" type="text" placeholder="Masukkan Nama"></b-form-input>
			<b-button variant="success" class="mt-3" v-on:click="fillName(names)">
				<span>Mulai Kuis</span>
			</b-button>
		</div>

		<div v-else v-for="(question, index) in questions" v-bind:key="question.id">
			<div v-show="index === questionIndex">
				<h4 class="mb-3">{{ question.question }}</h4>
				<b-form-radio-group v-model="picked" :options="question.choices" v-bind:name="index"></b-form-radio-group>
				<b-button variant="success" class="mt-3" v-on:click="check(question.correct, picked)">
					<span v-if="questionIndex == questions.length - 1">Selesai</span>
					<span v-else>Selanjutnya</span>
				</b-button>
			</div>
		</div>
		
		<div v-show="questionIndex == questions.length">
			<h2>Selamat, {{nama}} !</h2>
			<p>Anda Mendapatkan Nilai</p><h3>{{ score }}</h3><p>Dengan {{ totalCorrect }} Jawaban Benar</p>
		</div>
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'es6-promise/auto'
export default {
	name: 'Quiz',
	computed: {
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
	methods: {
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