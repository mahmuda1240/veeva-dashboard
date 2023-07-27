$(function() {
	'use strict';
	
	var newCust = [
		[0, 2],
		[1, 3],
		[2, 6],
		[3, 5],
		[4, 7],
		[5, 8],
		[6, 10]
	];
	var retCust = [
		[0, 1],
		[1, 2],
		[2, 5],
		[3, 3],
		[4, 5],
		[5, 6],
		[6, 9]
	];

	var plot = $.plot($('#flotArea2'), [{
		data: newCust,
		label: 'Webinar Invitee',
		color: '#00cccc'
	}, {
		data: retCust,
		label: 'HCP Portal Account',
		color: '#560bd0'
	}], {
		series: {
			lines: {
				show: true,
				lineWidth: 1,
				fill: true,
				fillColor: {
					colors: [{
						opacity: 0
					}, {
						opacity: 0.3
					}]
				}
			},
			shadowSize: 0
		},
		points: {
			show: true,
		},
		legend: {
			noColumns: 1,
			position: 'nw'
		},
		grid: {
			borderWidth: 1,
			borderColor: 'rgba(171, 167, 167,0.2)',
			hoverable: true
		},
		yaxis: {
			min: 0,
			max: 10,
			color: '#eee',
			tickColor: 'rgba(171, 167, 167,0.2)',
			font: {
				size: 10,
				color: '#999'
			}
		},
		xaxis: {
			color: '#eee',
			ticks: [[0, "7W"],[1, "6W"],[2, "5W"],[3, "4W"],[4, "3W"],[5, "2W"],[6, "1W"],],
			tickColor: 'rgba(171, 167, 167,0.2)',
			font: {
				size: 10,
				color: '#999'
			}
		}
	});
	/**************** PIE CHART *******************/
	var piedata = [{
		label: 'Morning',
		data: [
			[1, 20]
		],
		color: '#6610f2'
	}, {
		label: 'Evening',
		data: [
			[1, 30]
		],
		color: '#007bff'
	}, {
		label: 'Afternoon',
		data: [
			[1, 70]
		],
		color: '#00cccc'
	}, {
		label: 'Night',
		data: [
			[1, 60]
		],
		color: '#494c57'
	}];
	$.plot('#flotPie2', piedata, {
		series: {
			pie: {
				show: true,
				radius: 1,
				innerRadius: 0.5,
				label: {
					show: true,
					radius: 2 / 3,
					formatter: labelFormatter,
					threshold: 0.1
				}
			}
		},
		grid: {
			borderWidth: 1,
			borderColor: 'rgba(171, 167, 167,0.2)',
			hoverable: true
		},
	});

	function labelFormatter(label, series) {
		return '<div style="font-size:8pt; text-align:center; padding:2px; color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
	}
});