var ctx = document.getElementById("frequencyEatingBeans")
Chart.defaults.global.defaultFontColor = "rgba(38, 52, 73, 1)"
Chart.defaults.global.defaultFontFamily = "Domus"
Chart.defaults.global.defaultFontSize = 16
Chart.defaults.global.defaultFontStyle = "bold"
Chart.defaults.global.tooltips.enabled = false
Chart.defaults.scale.gridLines.display = false
var frequencyEatingBeans = new Chart(ctx, {
	showTooltips: false,
	type: "horizontalBar",
	data: {
		labels: [
			"3+ times/week",
			"1-2 times/week",
			"Every 2-3 Weeks",
			"Once a month",
			"Every 2-3 months",
			"Less often than every 3 months",
			"Never",
		],
		datasets: [
			{
				label: "RDNs",
				data: [33, 49, 12, 4, 1, 1, 0],
				backgroundColor: "rgba(172, 204, 2, 1)",
				barPercentage: 0.8,
				categoryPercentage: 1.0,
				// barThickness: 23,
				// maxBarThickness: 23,
				minBarLength: 1,
			},
			{
				label: "Consumers",
				data: [18, 34, 24, 13, 5, 4, 2],
				backgroundColor: "rgba(241, 131, 69, 1)",
				barPercentage: 0.8,
				categoryPercentage: 1.0,
				// barThickness: 23,
				// maxBarThickness: 23,
				minBarLength: 1,
			},
		],
	},
	options: {
		responsive: true,
		legend: {
			display: false,
		},
		events: [],
		scales: {
			xAxes: [
				{
					display: false,
				},
			],
			gridLines: {
				display: false,
			},
		},
		animation: {
			duration: 1,
			onComplete: function () {
				var chartInstance = this.chart,
					ctx = chartInstance.ctx

				ctx.font = Chart.helpers.fontString(
					Chart.defaults.global.defaultFontSize,
					Chart.defaults.global.defaultFontStyle,
					Chart.defaults.global.defaultFontFamily
				)
				ctx.textAlign = "center"
				ctx.textBaseline = "bottom"

				this.data.datasets.forEach(function (dataset, i) {
					var meta = chartInstance.controller.getDatasetMeta(i)
					meta.data.forEach(function (bar, index) {
						var data = dataset.data[index]
						ctx.fillText(data + "%", bar._model.x, bar._model.y - 5)
					})
				})
			},
		},
	},
})
window.document.onload(function () {
	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, "") ==
					this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash)
				target = target.length
					? target
					: $("[name=" + this.hash.slice(1) + "]")
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault()
					$("html, body").animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							// Callback after animation
							// Must change focus!
							var $target = $(target)
							$target.focus()
							if ($target.is(":focus")) {
								// Checking if the target was focused
								return false
							} else {
								$target.attr("tabindex", "-1") // Adding tabindex for elements not focusable
								$target.focus() // Set focus again
							}
						}
					)
				}
			}
		})
})
