import { useEffect } from 'react';
import Son from './Son'
import {Mycontext} from '../App'
const Child = () => {
  useEffect(() => {
  }, [])
  return (
    <div>
      子组件
      <Mycontext.Consumer>
         {value => {
           console.log('0000000');
           return <div>context: {value}</div>
         }}
      </Mycontext.Consumer>
      <Son></Son>
    </div>
  )
}

export default Child
