// Query Selectors
const body = document.querySelector('body');
const newQuoteBtn = document.querySelector('.new-quote');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const tweetBtn = document.querySelector('.tweet');

// Colors Query Selectors
const colorsBtn = document.querySelectorAll('.color-btn');
// const champagneColorBtn = document.querySelector('.champagne');
// const charcoalColorBtn = document.querySelector('.charcoal');
// const burntSiennaBtn = document.querySelector('.burnt-sienna');
// const persianGreenBtn = document.querySelector('.persian-green');
// const orangeYellowBtn = document.querySelector('.orange-yellow');

// Background Colors Array
const bgColors = [
	'linear-gradient(to right, #fc5c7d, #6a82fb)',
	'linear-gradient(to right, #642b73, #c6426e)',
	'linear-gradient(to right, #606c88, #3f4c6b)',
];

// Quote Api
const api = 'https://type.fit/api/quotes';

// FUNCTIONS
// const newQuote = async () => {
// 	// const res = await fetch(api);
// 	// const quotes = await res.json();
// 	// const random = Math.floor(Math.random() * quotes.length);
// 	// const item = quotes[random];

// 	// const text = item.text;
// 	// const authorName = item.author;

// 	// if (authorName == null) {
// 	// 	author.innerText = '- Unknown';
// 	// } else {
// 	// 	author.innerText = `- ${authorName}`;
// 	// }

// 	// quote.innerText = text;

// };

function newQuote() {
	fetch(api)
		.then((res) => res.json())
		.then((data) => {
			const random = Math.floor(Math.random() * data.length);
			const item = data[random];

			const authorName = item.author;
			const text = item.text;

			if (authorName == null) {
				author.innerText = '- Unknown';
			} else {
				author.innerText = `- ${authorName}`;
			}

			quote.innerText = text;

			tweetBtn.href = `https://twitter.com/intent/tweet?text=${text} - ${authorName}`;
		});
}

function changeBackgroundColor() {
	const random = Math.floor(Math.random() * bgColors.length);
	const color = bgColors[random];

	body.style.backgroundImage = color;
	body.style.backgroundColor = color.slice(35, 42);
}

// EVENT LISTENER
newQuoteBtn.addEventListener('click', newQuote);
newQuoteBtn.addEventListener('click', changeBackgroundColor);
window.addEventListener('DOMContentLoaded', newQuote);

colorsBtn.forEach((colorBtn) => {
	colorBtn.addEventListener('click', (e) => {
		if (e.target.classList.contains('light-coral')) {
			body.style.background = 'lightcoral';
		}

		if (e.target.classList.contains('charcoal')) {
			body.style.background = '#264653';
		}

		if (e.target.classList.contains('burnt-sienna')) {
			body.style.background = '#E76F51';
		}

		if (e.target.classList.contains('persian-green')) {
			body.style.background = '#2A9D8F';
		}

		if (e.target.classList.contains('orange-yellow')) {
			body.style.background = '#E9C46A';
		}
	});
});
