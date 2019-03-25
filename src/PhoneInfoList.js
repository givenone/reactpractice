import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    list: [],
    onRemove : () => console.warn(''),
    onUpdate : () => console.warn(''),
  }

  render() {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(
      info => (<PhoneInfo key={info.id} info={info} onRemove = {onRemove} onUpdate = {onUpdate}/>) //javascript map : each element in data === info
    ); // 모든 member에 대해 일종의 loop

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PhoneInfoList;