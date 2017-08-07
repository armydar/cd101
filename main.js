var question = "i'm a question", option = "i'm an option"

function questionGenerator(question, options) {

	return `
		<section>
	  	<p>${question}</p>
	  	<hr>
	  		${optionsGenerator(options)}
	  	<div>
	  	  <a href="question1.html"> <button>Back</button></a>
	  	  <a href="question3.html"><button>Next</button></a>
	  	</div>
	  </section>
`
}

function optionsGenerator(options) {
	var answers = `<ul>`

	options.forEach(function(option){
		answers+=`<li>${option}</li>`
	})

	answers+=`</ul>`

	return answers
}

const ajaxResponse = {
	"status": "OK",
	"data": [
		{
			"question": "one",
			"options": [
				"option 1",
				"option 2"
			]
		},
		{
			"question": "two",
			"options": [
				"option 1",
				"option 2"
			]
		},
		{
			"question": "three",
			"options": [
				"option 1",
				"option 2"
			]
		}
	]
}

window.addEventListener("load", function(event) {
	var body = document.getElementsByTagName('body')[0]
	console.log(body)

	ajaxResponse.data.forEach(function(q){
		var newQ = questionGenerator(q.question, q.options)

		body.insertAdjacentHTML('beforeend', newQ)
	})
})