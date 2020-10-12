// Chart.defaults.global.responsive = true
// Chart.defaults.global.defaultFontColor = "rgba(38, 52, 73, 1)"
// Chart.defaults.global.defaultFontFamily = "Domus"
// Chart.defaults.global.defaultFontSize = 16
// Chart.defaults.global.defaultFontStyle = "bold"
// Chart.defaults.global.tooltips.enabled = false
// Chart.defaults.scale.gridLines.display = false

// var beansData = {
// 	labels: [
// 		"3+ times/week",
// 		"1-2 times/week",
// 		"Every 2-3 Weeks",
// 		"Once a month",
// 		"Every 2-3 months",
// 		"Less often than every 3 months",
// 		"Never",
// 	],
// 	datasets: [
// 		{
// 			label: "RDNs",
// 			data: [33, 49, 12, 4, 1, 1, 0],
// 			backgroundColor: "rgba(172, 204, 2, 1)",
// 			barPercentage: 0.8,
// 			categoryPercentage: 1.0,
// 			minBarLength: 1,
// 		},
// 		{
// 			label: "Consumers",
// 			data: [18, 34, 24, 13, 5, 4, 2],
// 			backgroundColor: "rgba(241, 131, 69, 1)",
// 			barPercentage: 0.8,
// 			categoryPercentage: 1.0,
// 			minBarLength: 1,
// 		},
// 	],
// }
// var usageData = {
// 	labels: ["CANNED", "DRY BAGGED", "FROZEN"],
// 	datasets: [
// 		{
// 			label: "RDNs",
// 			data: [79, 35, 10],
// 			backgroundColor: "rgba(172, 204, 2, 1)",
// 			barPercentage: 0.8,
// 			categoryPercentage: 1.0,
// 			barThickness: 23,
// 			maxBarThickness: 23,
// 			minBarLength: 10,
// 		},
// 		{
// 			label: "Consumers",
// 			data: [66, 46, 30],
// 			backgroundColor: "rgba(241, 131, 69, 1)",
// 			barPercentage: 0.8,
// 			categoryPercentage: 1.0,
// 			barThickness: 23,
// 			maxBarThickness: 23,
// 			minBarLength: 10,
// 		},
// 	],
// }
// var beansCtx = document.getElementById("frequencyEatingBeans").getContext("2d")
// var frequencyEatingBeans = new Chart(beansCtx, {
// 	showTooltips: false,
// 	type: "horizontalBar",
// 	data: beansData,
// 	options: {
// 		responsive: true,
// 		legend: {
// 			display: false,
// 		},
// 		events: [],
// 		scales: {
// 			xAxes: [
// 				{
// 					display: false,
// 				},
// 			],
// 			gridLines: {
// 				display: false,
// 			},
// 		},
// 		animation: {
// 			duration: 1,
// 			onComplete: function () {
// 				var chartInstance = this.chart,
// 					ctx = chartInstance.ctx

// 				ctx.font = Chart.helpers.fontString(
// 					Chart.defaults.global.defaultFontSize,
// 					Chart.defaults.global.defaultFontStyle,
// 					Chart.defaults.global.defaultFontFamily
// 				)
// 				ctx.textAlign = "center"
// 				ctx.textBaseline = "bottom"

// 				this.data.datasets.forEach(function (dataset, i) {
// 					var meta = chartInstance.controller.getDatasetMeta(i)
// 					meta.data.forEach(function (bar, index) {
// 						var data = dataset.data[index]
// 						ctx.fillText(data + "%", bar._model.x, bar._model.y - 5)
// 					})
// 				})
// 			},
// 		},
// 	},
// })
// var usageCtx = document.getElementById("beansUsage").getContext("2d")
// var frequencyEatingBeans = new Chart(usageCtx, {
// 	showTooltips: false,
// 	type: "bar",
// 	data: usageData,
// 	options: {
// 		responsive: true,
// 		legend: {
// 			display: false,
// 		},
// 		events: [],
// 		scales: {
// 			xAxes: [
// 				{
// 					display: false,
// 				},
// 			],
// 			yAxes: [
// 				{
// 					display: false,
// 				},
// 			],
// 			gridLines: {
// 				display: false,
// 			},
// 		},
// 		animation: {
// 			duration: 1,
// 			onComplete: function () {
// 				var chartInstance = this.chart,
// 					ctx = chartInstance.ctx

// 				ctx.font = Chart.helpers.fontString(
// 					Chart.defaults.global.defaultFontSize,
// 					Chart.defaults.global.defaultFontStyle,
// 					Chart.defaults.global.defaultFontFamily
// 				)
// 				ctx.textAlign = "center"
// 				ctx.textBaseline = "bottom"

// 				this.data.datasets.forEach(function (dataset, i) {
// 					var meta = chartInstance.controller.getDatasetMeta(i)
// 					meta.data.forEach(function (bar, index) {
// 						var data = dataset.data[index]
// 						ctx.fillText(data + "%", bar._model.x, bar._model.y - 5)
// 					})
// 				})
// 			},
// 		},
// 	},
// })

// var ctx = document.getElementById("frequencyEatingBeans").getContext("2d")
// var img = new Image()
// img.onload = function () {
// 	ctx.drawImage(img, 0, 0)
// }
// img.src = "../images/frequency-beans.svg"
