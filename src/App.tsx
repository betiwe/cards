import './App.css'
import { Card } from './components/Card'

function App() {
  const props = {
    img: 'https://images.unsplash.com/photo-1599575654473-4d9a1b766975?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Card title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    buttonName: 'Click here!',
    link: "#"
  };
  const secondProps = {
    title: 'Card title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    buttonName: 'Click here!',
    link: "#"
  };
  
  return (
    <>
      <Card {...props} />
      <Card {...secondProps} />
    </>
  )
}

export default App
