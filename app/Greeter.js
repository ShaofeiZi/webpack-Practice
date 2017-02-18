import React, {Component} from 'react'
import testText from './jsontext.json';
import styles from './Greeter.css' // 引入css

class Greeter extends Component{
  render() {
    return (
      <div className={styles.mod}>   //使用
        {testText.testText}
      </div>
    );
  }
}

export default Greeter