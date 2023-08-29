import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FaLocationDot} from 'react-icons/fa6'
import {BsGithub} from 'react-icons/bs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-white d-flex justify-content-center my-4 mx-10' id='header'>
        <div className="row w-100 d-flex justify-content-center">
          <div className="col-12 col-lg-3 d-flex justify-content-center align-items-center p-4">
            <div className="bg-danger rounded-circle" id='img-perfil' style={
              {
                backgroundImage: "url('https://elcomercio.pe/resizer/QXIl8wJco9Raor4qtn7-vgHEsIA=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/J5TZJL65YBB2JN5TCPZBJVNJTQ.webp')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            
              }
            }>
            </div>
          </div>
          <div className="col-12 col-lg-9 d-flex flex-column p-4 justify-content-between">
            <div className="col-12  d-flex flex-column">
            <span className='h1'>Israel David Trujillo Domínguez</span>
            <hr className='border-primary'/>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam quod laudantium ullam sunt dolorum ducimus. Rerum eius, hic quo excepturi vitae nisi sapiente non et voluptate doloremque molestias adipisci.</span>
            </div>
            <div className="col-12 p-4 d-flex justify-content-start align-items-center flex-column flex-lg-row" style={{height: "auto"}}>
              <div className='text-center d-flex align-items-center'>
                <i><FaLocationDot className='me-3 text-primary2' size={25}/></i>
                  <span className='fw-bold fs-6'>Barranquilla, Colombia</span>
                </div>
                <a className='mx-5 mt-2 d-flex align-items-center' href="https://github.com/Isradeveloper" target='_blank'><BsGithub size={25} className='text-primary2'/></a>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white d-flex justify-content-center my-4 mx-10 flex-column' id='skills'>
        <div className="w-100 d-flex justify-content-start flex-column p-4">
          <span className='fs-2 my-3'>Skills</span>
          <hr className='border-primary'/>
          <span className='fs-4 mb-3 text-secondary'>Tech Stack</span>
          <div className="row d-flex wrap gx-1">
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"/>
              <span className='fs-6 fw-normal'>JAVASCRIPT</span>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"/>
              <span className='fs-6 fw-normal'>TYPESCRIPT</span>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://d1wrxu8gicsgam.cloudfront.net/wp-content/files/django-logo-big.jpg"/>
              <span className='fs-6 fw-normal'>DJANGO</span>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
              <span className='fs-6 fw-normal'>REACT</span>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"/>
              <span className='fs-6 fw-normal'>HTML</span>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"/>
              <span className='fs-6 fw-normal'>PYTHON</span>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"/>
              <span className='fs-6 fw-normal'>CSS</span>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"/>
              <span className='fs-6 fw-normal'>BOOTSTRAP 5</span>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"/>
              <span className='fs-6 fw-normal'>NODE JS</span>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://www.django-rest-framework.org/img/logo.png"/>
              <span className='fs-6 fw-normal'>DJANGO REST</span>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://sg.com.mx/sites/default/files/styles/570x500/public/images/angular-logo.png?itok=_4hR0cNu"/>
              <span className='fs-6 fw-normal'>ANGULAR</span>
            </div>
          </div>
        </div>

        <div className="w-100 d-flex justify-content-start flex-column p-4">
          <span className='fs-4 mb-3 text-secondary'>Tools</span>
          <div className="row d-flex wrap gx-1">
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ywjqppks5ffcnbfjuttq"/>
              <span className='fs-6 fw-normal'>DOCKER</span>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png"/>
              <span className='fs-6 fw-normal'>PHOTOSHOP</span>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "50px"}} src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"/>
              <span className='fs-6 fw-normal'>FIGMA</span>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-lg-2 card d-flex flex-row align-items-center gap-4">
              <img style={{width: "50px", height: "auto"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"/>
              <span className='fs-6 fw-normal'>POSTGRESQL</span>
            </div>
          </div>
        </div>
        
      </div>

      <div className='bg-white d-flex justify-content-center my-4 mx-10 flex-column' id='skills'>
        <div className="w-100 d-flex justify-content-start flex-column p-4">
          <span className='fs-2 my-3'>Work Experience</span>
          <hr className='border-primary'/>
          <div className="col-12 d-flex flex-column flex-lg-row">
            <div className="col-3 p-4 d-flex flex-column justify-content-center align-items-center logos">
              <img src="https://cccreativas.com/wp-content/uploads/2019/08/Tecnoglass-logo-e1566120862496.png" style={{height: "90px", width: "90%"}}/>
              <span className='mt-3 fs-4 text-muted'>TECNOGLASS</span>
              <span className='fs-5 text-primary text-center'>INGENIERO DE DESARROLLO JR</span>
              <span className='fs-6 text-secondary'>Feb 2023 - Present</span>
            </div>
            <div className="col-9 p-4 logos text-center">
              <span className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates mollitia recusandae hic laborum error quae reiciendis debitis id, reprehenderit voluptatem, expedita earum enim est ipsum perspiciatis ea deleniti? Atque, soluta? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, dolores porro, minima inventore consectetur rem soluta a dicta, numquam beatae vitae. Odit doloribus eveniet consectetur, laboriosam eligendi reiciendis voluptas fuga.</span>
            </div>
          </div>

          <div className="col-12 d-flex flex-column flex-lg-row">
            <div className="col-3 p-4 d-flex flex-column justify-content-center align-items-center logos">
              <img src="https://yt3.googleusercontent.com/xFj-mrMbRqjJsCryWhKPdwmns8zF3kfVlku6SfNP_bkaliMSO-4AjA-11QLIpWlDd3QHgTyWyg=s900-c-k-c0x00ffffff-no-rj" style={{height: "110px", width: "50%"}}/>
              <span className='mt-3 fs-4 text-muted'>INGENIERÍA DE BIOSERVICIOS</span>
              <span className='fs-5 text-primary text-center'>DESARROLLADOR FULLSTACK</span>
              <span className='fs-6 text-secondary'>Aug 2022 - Feb 2023</span>
            </div>
            <div className="col-9 p-4 logos text-center">
              <span className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates mollitia recusandae hic laborum error quae reiciendis debitis id, reprehenderit voluptatem, expedita earum enim est ipsum perspiciatis ea deleniti? Atque, soluta?</span>
            </div>
          </div>
        </div>

      </div>

      <div className='bg-white d-flex justify-content-center my-4 mx-10 flex-column' id='education'>
        <div className="w-100 d-flex justify-content-start flex-column p-4">
          <span className='fs-2 my-3'>Education</span>
          <hr className='border-primary'/>
          <div className="col-12 d-flex flex-column flex-lg-row">
            <div className="col-3 p-4 d-flex flex-column justify-content-center align-items-center logos">
              <img src="https://ceadigilaw.org/wp-content/uploads/2020/03/Universidad-de-la-costa.png" style={{height: "150px", width: "50%"}}/>
              <span className='mt-3 fs-4 text-muted text-center'>UNIVERSIDAD DE LA COSTA CUC</span>
              <span className='fs-5 text-primary'>INGENIERÍA DE SISTEMAS</span>
              <span className='fs-6 text-secondary'>2020 - Present</span>
            </div>
            <div className="col-9 p-4 logos text-center">
              <span className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates mollitia recusandae hic laborum error quae reiciendis debitis id, reprehenderit voluptatem, expedita earum enim est ipsum perspiciatis ea deleniti? Atque, soluta? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, dolores porro, minima inventore consectetur rem soluta a dicta, numquam beatae vitae. Odit doloribus eveniet consectetur, laboriosam eligendi reiciendis voluptas fuga.</span>
            </div>
          </div>

        </div>

      </div>

      <div className='bg-white d-flex justify-content-center' id='footer'>
        <div className="row w-100 d-flex justify-content-center p-5  bg-primary2">
          <div className="col-12 col-lg-6">
            <span className='fs-4 my-3 text-white'>General Skills</span>
            <hr className='border-white'/>
            <ul>
              <li className='fs-5 text-white'>Front-End Web Development</li>
              <li className='fs-5 text-white'>Graphic Design</li>
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <span className='fs-4 my-3 text-white'>Language</span>
            <hr className='border-white'/>
            <ul>
              <li className='fs-5 text-white'>English - Intermediate</li>
              <li className='fs-5 text-white'> Portuguese - Basic</li>
              <li className='fs-5 text-white'> Spanish - Native</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-dark d-flex justify-content-center" id='footer2'>
        <span className='text-white'>&copy; Isradeveloper | Copyright 2023, All Rights Reserved.</span>
      </div>
    </>
  )
}

export default App
