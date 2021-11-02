import {Mycontext} from '../App'
const Child = () => {
  return (
    <div>子组件的子组件
      <Mycontext.Consumer>
        {value => <div>value: {value}</div>}
      </Mycontext.Consumer>
    </div>
  )
}

export default Child