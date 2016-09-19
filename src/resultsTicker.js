import React, { Component, PropTypes } from 'react'
import { TransitionMotion, spring, presets } from 'react-motion'
import { Row, Col } from 'react-bootstrap'

class ResultsTicker extends Component {
  constructor(props) {
    super(props)
    this.getStyles = this.getStyles.bind(this)
  }
  getStyles() {
    return this.props.tickerDisplayedNumbers.toJS().map(item => ({
      data: {
        number: item.number,
        encodedNumber: item.encoded_number,
      },
      key: item.timestamp,
      style: {
        // height: spring(20, presets.gentle),
        opacity: spring(1, presets.gentle),
      },
    }))
  }
  willEnter() {
    return {
      // height: 1,
      opacity: 0,
    }
  }

  render() {
    return (
      <TransitionMotion
        styles={this.getStyles()}
        willEnter={this.willEnter}
      >
        {styles =>
          <div>
            <Row>
              <Col sm="6"><b>Number</b></Col>
              <Col sm="6"><b>Encoded Number</b></Col>
            </Row>
            {styles.map(({ key, style, data: { number, encodedNumber } }) =>
              <Row key={key} style={style}>
                <Col sm="6">{number}</Col>
                <Col sm="6">{encodedNumber}</Col>
              </Row>
            )}
          </div>
        }
      </TransitionMotion>
    )
  }
}

ResultsTicker.propTypes = {
  tickerDisplayedNumbers: PropTypes.object.isRequired,
}

export default ResultsTicker
