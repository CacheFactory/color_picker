var ColorInputField = React.createClass({
  getInitialState: function(){
    return {lastValidColor: null};
  },
  handleSubmit: function(event){
    event.preventDefault()
  },
  handleChange: function(event){
    event.preventDefault()

    var beforeBackgroundState = document.body.style['background-color']
    var testElement = document.createElement('div')
    var beforeBackgroundState = testElement.style['background-color']
    testElement.style['background-color'] = event.target.value

    if(beforeBackgroundState != testElement.style['background-color']){
      this.setState({lastValidColor: event.target.value})
    }
    testElement.remove()
  },
 
  render: function() {

    return (
      <form className="form" onSubmit={this.handleSubmit} background>
        <If test={this.state.lastValidColor}>
          <div className="color" style={ {backgroundColor: this.state.lastValidColor} } >
            <div className="color-name">
              {this.state.lastValidColor}
            </div>
          </div>
        </If>
        <label>
          Color
        </label>
        <input type="text" placeholder="Enter a color or code" onChange={this.handleChange} />
      </form>
    );
  }
});