import SecondComponent from "./Second"

function FirstComponent() {
  return (
    <div>
      <p>This is the first component</p>
      <SecondComponent />
      <SecondComponent />
      <SecondComponent />
    </div>
  )
}

export default FirstComponent
