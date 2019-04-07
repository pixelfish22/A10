const llamaArray = [
	{
	"rank": 1,
	"name": "Oberg Mountain",
	"length": 2,
	"difficulty": "easy",
	},

	{
	"rank": 2,
	"name": "Levaux Mountain",
	"length": 4,
	"difficulty": "easy"
	},

	{
	"rank": 3,
	"name": "Pincushion Mountain",
	"length": 3,
	"difficulty": "moderate"
	},

	{
	"rank": 4,
	"name": "Middle Falls Trail",
	"length": 5,
	"difficulty": "difficult"
	},

	{
	"rank": 5,
	"name": "Lookout Mountain",
	"length": 7,
	"difficulty": "easy"
	},
];

var vm = new Vue ({

  el: "#myApp",
  data: {
    greeting: 'My Favorite North Shore Hiking Trails',
		llamas: llamaArray

  }
})
