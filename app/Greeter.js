import React, {Component} from 'react'
import testText from './jsontext.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {testText.testText}
      </div>
    );
  }
}

export default Greeter