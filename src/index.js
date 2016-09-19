import $ from 'jquery'
import ReactDOM from 'react-dom'
import resultsApp from './resultsApp'

$('#emit-form').submit((event) => {
  $.post('startEmitter', { freq: $('#frequency').val() })
  event.preventDefault()
})


ReactDOM.render(
  resultsApp,
  document.getElementById('results')
)
