import React, { Component, PropTypes } from 'react'
import ChartistGraph from 'react-chartist'
import map from 'lodash.map'
import property from 'lodash.property'

const chartOptions = {
  high: 9999999999,
  low: 1,
  height: 300,
  axisX: {
    labelInterpolationFnc: (value, index) => { return index % 10 === 0 ? value : null },
  },
}

class ResultsChart extends Component {
  constructor(props) {
    super(props)
    this.processData = this.processData.bind(this)
  }
  processData() {
    const numbers = this.props.chartDisplayedNumbers.toJS()
    const labels = map(numbers, (property('timestamp')))
    const series = [map(numbers, property('number'))]
    return { labels, series }
  }
  render() {
    return (
      <ChartistGraph type="Line" data={this.processData()} options={chartOptions} />
    )
  }
}

ResultsChart.propTypes = {
  chartDisplayedNumbers: PropTypes.object.isRequired,
}

export default ResultsChart
