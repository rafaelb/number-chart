import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'
import { fetchNumbers } from './actions'
import ResultsChart from './resultsChart'
import ResultsTicker from './resultsTicker'


class Results extends Component {
  constructor(props) {
    super(props)
    props.fetchNumbers()
  }
  render() {
    return (
      <div>
        <Panel header="Chart of last 100 numbers">
          <ResultsChart {...this.props} />
        </Panel>
        <Panel header="Last 20 numbers">
          <ResultsTicker {...this.props} />
        </Panel>
      </div>
    )
  }
}

Results.propTypes = {
  fetchNumbers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  chartDisplayedNumbers: state.getIn(['numbers', 'chartDisplayedNumbers']),
  tickerDisplayedNumbers: state.getIn(['numbers', 'tickerDisplayedNumbers']),
})

const mapDispatchToProps = dispatch => ({
  fetchNumbers() { dispatch(fetchNumbers()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)
