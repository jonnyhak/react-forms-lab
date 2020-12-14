import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value 
    })
    // console.log(e.target.value)
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          onChange={this.handleChange}
          value={this.state.message}  
        />
        <h2>{charNumber}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
