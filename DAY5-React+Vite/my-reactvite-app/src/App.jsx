import './App.css'
import imgBg from './assets/img1.jpg'
import Info from './Components/Info'
import obj from './InfoData.json'
import Hero from './Components/Hero'


function App() {
  return (
    <>
      <div>
      <img src={imgBg} width={1700} height={1000}/>
      <h1>Hello World</h1>
      <Info table = <tr>
                       <th>Class</th>
                       <th>Actors</th>
                    </tr> />

      <Hero obj = {InfoData} /> 

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro itaque, voluptatum sed corrupti laboriosam eaque sapiente? Voluptatem molestias accusantium a, eveniet labore, similique expedita veritatis magni facere suscipit tempora. Quaerat!</p>
      </div> 
    </>
  )
}

export default App
