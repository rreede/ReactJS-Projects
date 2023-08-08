import './App.css'

const skills = [
  {
    skill:"HTML+CSS",
    level:"advanced",
    color: "red",
  },
  {
    skill:"JavaScript",
    level:"advanced",
    color: "blue",
  },
  {
    skill:"Git and Github",
    level:"advanced",
    color: "blue",
  },
]


function App() {
  return (
    <>
     <div className="profile-container">
      <Avatar image='1644868160169.jpg'/>
      <h2>Rene Reede</h2>
      <p>Mostly a front-end webdeveloper from Estonia. </p>

      {skills.map((skill)=> (
<Skill skill={skill.skill} color={skill.color} key={skill.name} level={skill.level}/>
))}

      
     </div>
    </>
  )
}

function Avatar(props) {
  return <img className="avatar" src={props.image}></img>
}

function Intro() {
  return(
    <>
    </>
  )
}

function Skill({skill, color, level}) {
  return(
    <>
    <div className='skill-color' style={{}}>
    <span>{skill}</span>
    <span>{level}</span>
    </div>
      
    </>
  )
}

export default App;
