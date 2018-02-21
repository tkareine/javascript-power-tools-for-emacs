import React from "react"

const makeOption = ({value, description}) =>
  <option key={value} value={value}>{description}</option>

class SingleSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selected: props.selected}
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    const selected = event.target.value
    this.setState(prevState => {
      if (selected !== prevState.selected) {
        this.props.onSelection(selected)
      }
      return {selected}
    })
  }

  render() {
    const {
      className,
      selections
    } = this.props

    return (
      <select className={className}
              value={this.state.selected}
              onChange={this.onChange}>
        {selections.map(selection => makeOption(selection))}
      </select>
    )
  }
}

export default SingleSelect
