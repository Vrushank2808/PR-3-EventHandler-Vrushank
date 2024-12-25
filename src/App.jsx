import ConditionalRenderingExample from "./components/ConditionalRenderingExample"
import EventHandlingExample from "./components/EventHandlingExample"
import KeyExample from "./components/KeyExample"
import ListExample from "./components/ListExample"
import PassArgumentsExample from "./components/PassArgumentsExample"
import RefExample from "./components/RefExample"

function App() {
  return (
    <>
      <EventHandlingExample />
      <PassArgumentsExample />
      <ConditionalRenderingExample />
      <ListExample />
      <KeyExample />
      <RefExample />
    </>
  )
}

export default App
