const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.parts.name}: {props.parts.exercises}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part parts={props.course.parts[0]} />
      <Part parts={props.course.parts[1]} />
      <Part parts={props.course.parts[2]} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Total exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App