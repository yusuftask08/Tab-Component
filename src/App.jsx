import './App.scss'
import Tab from './Components/Tab'

function App() {
  const tabOneRender = () => {
    return (
      <div>
        Tab One Render
      </div>
    )
  }

  const tabTwoRender = () => {
    return (
      <div>
        Tab Two Render
      </div>
    )
  }

  const tabThreeRender = () => {
    return (
      <div>
        Tab Three Render
      </div>
    )
  }
  const tabItems = [
    {
      index: 0, name: "Tab 1", selected: false, disabled: true, Component: tabOneRender
    },
    {
      index: 1, name: "Tab 2", selected: true, disabled: false, Component: tabTwoRender
    },
    {
      index: 2, name: "Tab 3", selected: false, disabled: false, Component: tabThreeRender
    },
  ]

  return (
    <div className="App">
      <Tab tabs={tabItems} />
    </div>
  )
}

export default App
