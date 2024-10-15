import React from 'react'
import "../css/About-style.css";

export default function AboutusPage() {
  return (
    <>
       <div class="image-container">
                <img src="https://altius-phi.vercel.app/_next/image?url=%2Fimages%2Ftechnician_working_on_antenna.webp&w=3840&q=75" alt="Description of image"></img>
                <div class="Aboutus-text">About Us</div>
            </div>

        <section className='AUsecA'>

              <div className='part1'>

                <div className='p1Text'>
                Committed to developing and managing the highest quality Telecom infrastructure that fuels progress and innovation.
                </div>

                <div className='p1Img'>
                    {/* <img src='https://altius-phi.vercel.app/_next/image?url=%2Fimages%2Fskyscraper_buildings.webp&w=1200&q=75'></img> */}
                </div>

              </div>
              <div>
                  <img className='waveAni' src='https://altius-phi.vercel.app/_next/static/media/WaveAnimated.cfb0e1fb.gif'></img>
              </div>

        </section>    


        <section className='AUsecB'>

            <img className='CSicon' src='https://altius-phi.vercel.app/_next/static/media/HierarchyIcon.a5acfbf8.svg'></img>
            <div className='CStext'>
                Company Structure
            </div>
        </section>

        <section className='AUsecC'>

            <p>We are an Infrastructure Investment Trust (InvIT) set up with the objective of undertaking investment activities as an InvIT under the SEBI InvIT Regulations and are managed by our Investment Manager, Data Link Investment Manager Private Limited, a Brookfield owned company. Altius Telecom Infrastructure is the bedrock of our operations, providing the foundation upon which we build and maintain our extensive infrastructure network.</p>
            <img src='https://altius-phi.vercel.app/images/company_hierarchy_001.svg'></img>
            <div className='AUnoteDiv'>
            <div className='AUsecCNote'>
            Note 1 Co-Sponsors:
            </div>
            <li>Reliance Industrial Investments and Holdings Limited is a Sponsor to Data Infrastructure Trust by being sponsor at the inception stage. It is not holding any units of the Trust</li>
            </div>
        </section>

        <section className='AUsecD'>

        <img className='Licon' src='https://altius-phi.vercel.app/_next/static/media/FigureHoldingFlagIcon.50378ff4.svg'></img>
        <div className='Ltext'>
            Leadership
        </div>
        </section>

        <section className='AUsecE'>

            <div className='namebox1'>
                <div className='BOD'>
                        Board Of Directors
                </div>
                <ul className='BDNames'>
                    <li>Arpit Agrawal</li>
                    <li>2</li>
                </ul>
            </div>

                <div className='BDImg'>

                        <img className='BD1' src='https://altius-phi.vercel.app/_next/image?url=%2Fimages%2Fmembers%2F01-arpit-agrawal.webp&w=1920&q=75'></img>

                </div>


            <div className='namebox2'>
                <div className='BDInfo'>
                <div className='BDAbout'>Arpit Agrawal</div>
                <div className='BDPos'>Managing Partner, Infrastructure</div>
                <p>Arpit Agrawal is a Managing Partner and Head of India and the Middle East for Brookfield’s Infrastructure Group. In this role, Mr. Agrawal is responsible for all infrastructure investment and portfolio management activity in the region. Before joining Brookfield in 2016, Mr. Agrawal was a vice president for an infrastructure asset manager. Mr. Agrawal holds a Master of Business Administration from the Indian Institute of Management Bangalore and a Bachelor of Technology from the National Institute of Technology Allahabad.</p>
                </div>
            </div>


              <div className='namebox3'>
              
              </div>
              <div className='namebox4'>
              
              </div>

        </section>
   
    </>
   
  )
}
