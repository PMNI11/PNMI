import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Uni from "./components/Unilogin/LoginAsUniversity"
import Dashboard from "./components/Unilogin/Dashboard"
import AllUniversityData from './components/Unilogin/AllUniversityData'; // Import the new component


import UniversityTunis from "./components/Uni/UniversityTunis"
import UniversityZitouna from "./components/Uni/UniversityZitouna"
import UniversityMonastir from "./components/Uni/UniversityMonastir"
import UniversityCarthage from "./components/Uni/UniversityCarthage"
import UniversityManar from "./components/Uni/UniversityManar"
import UniversityGafsa from "./components/Uni/UniversityGafsa"
import UniversitySousse from "./components/Uni/UniversitySousse"
import UniversityTechno from "./components/Uni/UniversityTechno"
import UniversitySfax from "./components/Uni/UniversitySfax"
import UniversityJendouba from "./components/Uni/UniversityJendouba"
import UniversityManouba from "./components/Uni/UniversityManouba"
import UniversityKairouan from "./components/Uni/UniversityKairouan"
import UniversityGabes from "./components/Uni/UniversityGabes"
import profil from "./components/profil/profil"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/UniversityTunis" component={UniversityTunis} />
          <Route exact path="/UniversityZitouna" component={UniversityZitouna} />
          <Route exact path="/UniversityMonastir" component={UniversityMonastir} />
          <Route exact path="/UniversityCarthage" component={UniversityCarthage} />
          <Route exact path="/UniversityManar" component={UniversityManar} />
          <Route exact path="/UniversityGafsa" component={UniversityGafsa} />
          <Route exact path="/UniversitySousse" component={UniversitySousse} />
          <Route exact path="/UniversityTechno" component={UniversityTechno} />
          <Route exact path="/UniversitySfax" component={UniversitySfax} />
          <Route exact path="/UniversityJendouba" component={UniversityJendouba} />
          <Route exact path="/UniversityManouba" component={UniversityManouba} />
          <Route exact path="/UniversityKairouan" component={UniversityKairouan} />
          <Route exact path="/UniversityGabes" component={UniversityGabes} />
          <Route exact path='/profil' component={profil} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/Uni' component={Uni} />
          <Route exact path='/Dashboard' component={Dashboard} />

          <Route exact path="/" component={Uni} />
        <Route path="/Dashboard/:id" component={Dashboard} />
        <Route path="/AllUniversityData" component={AllUniversityData} /> {/* Add the route for AllUniversityData */}
      
        </Switch>
        <Footer />
      </Router>
    </> 
  )
}
export default App
