class Button1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Value'
    }
  }
  render() {
    return (
      <button class>{this.state.value}</button>
    )
  }
}