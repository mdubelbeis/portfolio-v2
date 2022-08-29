import Header from "./Header"

const INFO = {
  firstName: "Mason",
  middleName: "Jeffrey",
  lastName: "Dubelbeis",
  email: "Mason.Dubelbeis@gmail.com",
  projectURLS: ['','','',''],

}

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      {/* ABOUT */}
      {/* CTA/RESUME */}
      {/* PROJECTS */}
      {/* FOOTER */}
    </div>
  )
}

export default App
