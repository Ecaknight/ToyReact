// 架子验证页面
import { ToyReact, Component } from './ToyReact'

class MyComponent extends Component {
  render () {
    return (
      <div>
        <div>aaa</div>
        {this.children}
      </div>
    )
  }
}

let a = <MyComponent name="a"><span>xxxx</span></MyComponent>

// document.body.appendChild(a) 
// render方法
ToyReact.render(
  a,
  document.body,
)