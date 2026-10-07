import React from 'react'
import { brand ,navLinks, socials, hero , about, skillGroups, projects, services, testimonials, contact} from './data/portofolio'
import {Navbar,Hero ,About ,Skills ,Projects, Services, Testimonials, Contact,Footer} from './Components'



function App() {
  return (
    <div className='min-h-screen bg-base-100 text-base-content'>
        <Navbar brand={brand} links={navLinks}/>
      <main>
        <Hero {...hero}socials={socials}/>
        <About {...about}/>
        <Skills groups={skillGroups}/>
        <Projects projects={projects}/>
        <Services services={services}/>
        <Testimonials items={testimonials}/>
        <Contact contact={contact} socials={socials} onSubmit={(FormData) => 
          console.log('contact form:', FormData)}/>
      </main>
      <Footer brand={brand.name} builwith="React,Figma,Css,Java Scrip"/>
    </div>
  )
}


export default App
