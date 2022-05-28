import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link';

export default function Info(props) {

        // The back-to-top button is hidden at the beginning
        const [showButton, setShowButton] = useState(false);
      
        useEffect(() => {
          window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
              setShowButton(true);
            } else {
              setShowButton(false);
            }
          });
        }, []);
      
        // This function will scroll the window to the top 
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
          });
        };


  return (
    <div className='container mx-5'>

<nav id="navbar-example2" className={`navbar navbar-${props.mode} bg-${props.mode} px-3 my-5`}>
  <h1 className="navbar-brand " style={{fontSize:'20px'}} >Quick Access</h1>
  <ul className="nav nav-pills">
    <li className="nav-item mx-3 my-1">
    <HashLink smooth to="#headingOne" className="dropdown-item" >Body Type</HashLink>
    </li>
    <li className="nav-item mx-3 my-1">
    <HashLink smooth to="#headingTwo" className="dropdown-item" >Drivetrain</HashLink>
    </li>
    <li className="nav-item mx-3 my-1">
    <HashLink smooth to="#headingThree" className="dropdown-item" >Torque</HashLink>
    </li>
    <li className="nav-item dropdown mx-3">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
        More
      </button>
      <ul className={`dropdown-menu dropdown-menu-${props.mode}`} aria-labelledby="dropdownMenuButton2">
       
        <li><HashLink smooth to="#headingFour"className="dropdown-item" >Transmission</HashLink></li>
        <li><HashLink smooth to="#headingFive"className="dropdown-item" >Engine</HashLink></li>
        <li><HashLink smooth to="#headingSix"className="dropdown-item" >Displacement</HashLink></li>
        <li><HashLink smooth to="#headingSeven"className="dropdown-item" >Mileage</HashLink></li>
        <li><HashLink smooth to="#headingEight"className="dropdown-item" >Power</HashLink></li>
        <li><HashLink smooth to="#headingNine"className="dropdown-item" >ABS</HashLink></li>
      </ul>
    </li>
  </ul>
</nav>


<div className="card">
          <div className="card-body my-1" style={{backgroundColor : props.mode ==='dark'?'rgb(33 37 41)':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
          Today, automotive industry in India is growing at a flying speed as we are among top 10 in the world in this sector. India is considered as the next big center by auto manufacturers. Change in lifestyle, growth in income and easy finance options have made it more favorable for the industry to grow.
         <br></br><br></br>
          Owning a car is one of the top most life goals to achieve for us in India. Hence, journey of buying a car is a thrilling experience. Detailed research and well planned approach will make this journey even more enjoyable and pleasant. Once the thought of buying a car triggers, there are some basic things to keep in mind before going in for the purchase to take a rational decision. Let’s have a look at some basic specifications.


          </div>
       </div>
     
      <div className="accordion my-5" id="accordionPanelsStayOpenExample">
      <div className="accordion-item"  style={{backgroundColor : props.mode ==='dark'?'#212529':'rgb(235 235 235)',color : props.mode ==='light' ? 'black':'whitesmoke'}} >
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={{backgroundColor : props.mode ==='dark'?'#2B2D2F':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
            <h3>Body Type</h3>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"  >
          <div className="accordion-body">
          <div className="container">
              <div className="row row-cols-2">
              <div className="card my-5"  style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke',width : '28rem',height:'32rem'}}>
              <img src="body.jpg" className="card-img-top my-2" alt="body"/>
                <div className="card-body mx-5">
                <p className="card-text" style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>Different Body Types</p>
               </div>
           </div>
              <div className="col col-md-7 mx-4 my-5">
              Choosing a style of vehicle has become a difficult task considering the more diversified options available in the market.Especially in a country like India, making your purchase decision starts with understanding the type of car you want to drive and whether it will suit your needs. Your decision can be based on your budget, family size and the purpose that you use it for.We have compiled a list of some of the prevalent car body types in India that you can buy.
             <ul>
                <li><strong> Hatchbacks</strong></li> <section>Hatchbacks are one of the most popular car body types in terms of overall sales in India. A hatchback can be defined as a vehicle body type that comprises small cars with 4 doors along with an additional rear hatch that opens upward to access the boot space. Hatchbacks are generally designed with compact bodies, and are perfect for comfortably seating 4 passengers, despite a seating capacity of 5.</section>
                <li><strong> Sedan</strong></li> <section>Easily the largest selling body type in the world, it is a four door car, with three-box configuration. Be it a chauffeur driven or self driven, the car appeal to folks looking for more comfort and room inside the car, primarily because of a separate boot. The three-box design consists of an engine upfront, the cabin in the middle and a separate boot at the rear with its own door.</section> 
                <li><strong>MUVs and SUVs</strong> </li> <section>Finally, its MUVs and SUVs that complete this series of different segment of cars in India. These are multiutility and sports utility vehicles which provided an excellent driving experience to passengers. Although MUVs are less powerful, they are more fuel-efficient. 
                SUVs have striking body features like a more significant body and higher ground clearance, making them a perfect choice for every long drive trip. SUVs have a capacity of about2.8 litres and offer a higher driving position than MUVs.</section>
                 
             </ul>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item"  style={{backgroundColor : props.mode ==='dark'?'#212529':'rgb(235 235 235)',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={{backgroundColor : props.mode ==='dark'?'#2B2D2F':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
          <h3>Drivetrain</h3>
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <div className="container">
              <div className="row row-cols-2">
              <div className="card my-5"  style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke',width : '28rem',height:'32rem'}}>
              <img src="drivetrain.jpg" className="card-img-top my-2" alt="drivetrain"/>
                <div className="card-body mx-5">
                <p className="card-text" style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>Different Types of Drivetrain</p>
               </div>
           </div>
              <div className="col col-md-7 mx-4 my-5">
              The drivetrain is a mechanical system with-in a motor vehicle which connects the transmission to the drive axles. A typical drivetrain contains a series of parts, working together to transfer the rotational power produced by the car engine, all the way to your wheels moving the car.    
              Drivetrain refers to the drive wheels or the wheels that are driven by the engine and transmission. The most common drivetrains are; front-wheel-drive (FWD), rear-wheel-drive (RWD), all-wheel drive (AWD), and 4-wheel-drive (4WD).

              <ul>
                <li><strong> Front-Wheel-Drive (FWD)</strong></li> <section>FWD means that the power from the engine is delivered to the front wheels of your vehicle. With FWD, the front wheels are pulling the car and The rear wheels don’t receive any power on their own. The pros of a FWD vehicle are that they typically gets better fuel economy and emits less carbon dioxide.</section>
                <li><strong>Rear-Wheel-Drive (RWD)</strong> </li> <section>RWD means that the power from the engine is delivered to the rear wheels and the rear wheels push the car forward. The front wheels do not receive any power and are free to manoeuvre the vehicle. Due to the weight of a RWD vehicle being more evenly spread than a FWD vehicle, creates a better balance of weight. </section> 
                <li><strong> All-Wheel-Drive (AWD)</strong></li> <section>All-wheel drive: A drivetrain that employs a front, rear and center differential to provide power to all four wheels of a vehicle.</section>
                <li><strong> 4-Wheel-Drive (4WD)</strong></li> <section>4WD means the power from the engine is delivered to all 4 wheels all of the time 4X4 is engaged and has an option to operate in a RWD format to conserve fuel. The biggest advantage of a 4WD vehicle is that it provides the versatility and power to take on any terrain or weather condition. The con of a 4WD vehicle is that it operates in RWD format most of the time and has less traction then a AWD vehicle.</section>
             </ul> 

        </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item"  style={{backgroundColor : props.mode ==='dark'?'#212529':'rgb(235 235 235)',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={{backgroundColor : props.mode ==='dark'?'#2B2D2F':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
          <h3>Torque</h3>
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <div className="container">
              <div className="row row-cols-2">
              <div className="card my-5"  style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke',width : '28rem',height:'25rem'}}>
              <img src="torque.jpeg" className="card-img-top my-2" alt="..."/>
                <div className="card-body mx-5">
                <p className="card-text" style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>Torque</p>
               </div>
           </div>
              <div className="col col-md-7 mx-4 my-5">
                  
             Torque determines how hard your engine can “pull” or turn the gears that make the wheels turn. Engines with more torque at lower RPM are able to generate more pulling power with less revving of the engine. An engine with high horsepower and high torque can help a vehicle accelerate quickly, but only if transmission gearing is set up to do so. A great example is the difference between a road-going sports car and a farm tractor. They may both have 500hp and 500 lb.-ft. of torque, but the sports car is geared for acceleration while the tractor is geared to use that 500 lb.-ft. of torque at very slow speeds for hard pulling.
             <br></br><br></br>
             The more torque you have the more pulling power the engine has, this is the force you feel when accelerating. The torque measurement provides an indication of how fast the engine will be able to move the cars weight. The more torque there is the more acceleration there will be. This will provide a speedy acceleration from a standstill, more power when overtaking and the ability to tow or carry heavy objects, so if this is what you need from a vehicle again, the bigger the number the better.
            <br></br><br></br>
              Torque measures the twisting force, or strength, of an engine or motor. That sensation of being pushed back into your seat when you stomp on the accelerator? That's torque. Illustrated using a non-automotive example, when opening a jar, torque is the effort with which you loosen the lid while horsepower is the speed with which you spin it off.
              <br></br><br></br>
             Simply put, torque gets you going, while horsepower keeps you moving. And, depending on how you intend to use your vehicle, one will matter over the other. Torque also works differently based on the engine type and energy source.
             
             </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item"  style={{backgroundColor : props.mode ==='dark'?'#212529':'rgb(235 235 235)',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
        <h2 className="accordion-header" id="headingFour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"  style={{backgroundColor : props.mode ==='dark'?'#2B2D2F':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
          <h3> Transmission </h3>
          </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <div className="container">
              <div className="row row-cols-2">
              <div className="card my-5 "  style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke',width : '28rem',height:'25rem'}}>
              <img src="transmission.jpg" className="card-img-top my-2" alt="..."/>
                <div className="card-body mx-3">
                <p className="card-text" style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>Transmission</p>
               </div>
           </div>
              <div className="col col-md-7 mx-4 my-5">The transmission is a component that distributes engine power and torque to the drive wheels so the car can move. Nowadays, there are 4 major types of transmissions: manual, automatic—or torque converter, automated manual, dual-clutch transmission (DCT), and continuously variable transmission (CVT). Manual gives drivers full control of changing gears, while the automatic provides a more relaxed and convenient driving experience by doing away with the hands-on operation of the clutch and gear shifting. 
              <br></br><br></br>
              Automated manual transmissions feature the near-exact same layout as a traditional manual transmission, however, a computer is in place along with an electronic control mechanism to engage and disengage the clutch and manage the gear shifting of the vehicle. 
               <br></br><br></br>
               A DCT will act as a manual transmission, however, two clutches and a mechanical or electronic actuation allow for this type of transmission to row through gears and disengage the clutch. 
               <br></br><br></br>
              The CVT, on the other hand, is just like an automatic but it offers a smoother driving feel as it no longer has to change gears in order to increase or decrease speed. Think of it as having a single gear that can adjust itself to low, medium, or high speeds. The Ford Territory is a good example of a car that has this kind of transmission
              <br></br><br></br>
              The gearbox is responsible for efficient driving. By changing gears, you ensure that the RPM’s (Revolutions per Minute) are kept low so that the engine is not overloaded and that fuel consumption is lowered. The transmission is responsible for converting both speed and momentum into power that then gets the entire car moving and its main aim is to make the engine as efficient as possible by reducing the amount of fuel consumption whilst getting the best amount of power.

              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item"  style={{backgroundColor : props.mode ==='dark'?'#212529':'rgb(235 235 235)',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
        <h2 className="accordion-header" id="headingFive">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"  style={{backgroundColor : props.mode ==='dark'?'#2B2D2F':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
          <h3>Engine</h3>
          </button>
        </h2>
        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <div className="container">
              <div className="row row-cols-2">
              <div className="card my-5"  style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke',width : '28rem',height:'34rem'}}>
              <img src="engine.gif" className="card-img-top my-2" alt="..."/>
                <div className="card-body mx-3">
                <p className="card-text" style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>Working of Engine</p>
               </div>
           </div>
              <div className="col col-md-7 mx-4 my-5">
              Choosing between petrol and diesel is tricky for most of the car buyers. There are many things to consider while decision making which makes it even more complicated. Petrol engines are smoother compared to diesel. Diesel car comes with cheaper road tax and low fuel cost with more fuel efficiency. However, diesel cars are costlier than petrol cars and also they are high on maintenance. Hence, your decision should be made basis the average monthly/daily running. If you are more frequent on the road, diesel is the ideal option and vice versa. There are also hybrid cars available in the market.
              <br></br><br></br>
              In the simplest of terms, an engine layout refers to the arrangement and number of cylinders in an engine. There are many types of engine layouts, however, three kinds of car engine layouts are popularly used.
              <br></br><br></br>
              <ul>
                <li><strong>Straight or Inline Engine Layout</strong></li> <section>The most commonly used layout is the Straight or the Inline engine layout. As the name suggests, the cylinders are placed vertically in line, i.e. one behind the other. This kind of engine can be placed parallel or perpendicularly in the car depending on the number of cylinders. When placed parallel to the car, the engine layout is known as Straight and when placed perpendicular to the car, it is an Inline layout.</section>
                <li><strong>Flat Engine Layout</strong></li> <section>Unlike the straight engine, a Flat engine has its cylinders placed horizontally. It is also known as the Boxer engine due to the piston movement mimicking pugilists punching their gloves before a fight. The boxer engine is a balanced engine and by balance we mean low vibrations due to the force created by the movement of the pistons. </section> 
                <li><strong>V-Engine Layout</strong> </li> <section>The V-engine is a very popular engine layout and can be seen on almost all high performance vehicles. The cylinder banks, i.e. the chamber in which the pistons move, are arranged in such a way that they represent a V when the engine is viewed from the front..</section>
                
             </ul> 


             </div>
            </div>
            </div>
          </div>
        </div>
      </div>
   

      <div className="accordion-item"  style={{backgroundColor : props.mode ==='dark'?'#212529':'rgb(235 235 235)',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
        <h2 className="accordion-header" id="headingSix">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"  style={{backgroundColor : props.mode ==='dark'?'#2B2D2F':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
          <h3>Displacement</h3>
          </button>
        </h2>
        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <div className="container">
              <div className="row row-cols-2">
              <div className="card my-5"  style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke',width : '18rem'}}>
              <img src="displacement.gif" className="card-img-top my-2" alt="..."/>
                <div className="card-body mx-3">
                <p className="card-text" style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>Displacement</p>
               </div>
           </div>
              <div className="col col-md-7 mx-4 my-5">
              Engine displacement is a total cylinder volume of any engine which is displaced by all the piston in the combustion chambers. Displacement is used to define an engine’s size and power output.
              <br></br><br></br>

              Put simply, engine capacity is a measurement of engine displacement. When someone says they have a “two-litre” engine, that is the cylinder capacity (otherwise known as volume) in each cylinder inside the motor. These figures are then added together and displayed as a round figure.
              <br></br><br></br>
              So, a four-cylinder engine with cylinders displacing 500cc of volume each has an approximate capacity of 2.0 litres. However, a 12-cylinder engine with 500cc of cylinder capacity would have a total displacement of 6.0 litres, making it a far larger engine. In fact, large engines are often known by their capacity, like the 351 Ford GT (which has a displacement of 351 cubic-inches), or the Monaro GTS 350 (350 cubic-inches).
              <br></br><br></br>
              If you’re familiar with engine cycles, you know that engines displace air by means of a crankshaft-driven piston. It draws air in on the intake stroke and pushes it out on the exhaust stroke. The area of the pistons, how far they travel in the cylinder, and the number of cylinders all come together to tell us how much air the engine is capable of displacing.
                  
             </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="accordion-item"  style={{backgroundColor : props.mode ==='dark'?'#212529':'rgb(235 235 235)',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
        <h2 className="accordion-header" id="headingSeven">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven"  style={{backgroundColor : props.mode ==='dark'?'#2B2D2F':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
          <h3>Mileage</h3>
          </button>
        </h2>
        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <div className="container">
              <div className="row row-cols-2">
              <div className="card my-5"  style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke',width : '25rem',height:'29rem'}}>
              <img src="mileage.jpg" className="card-img-top my-2" alt="..."/>
                <div className="card-body mx-3">
                <p className="card-text" style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>Mileage Odometer</p>
               </div>
           </div>
              <div className="col col-md-7 mx-4 my-5">
              Mileage indicates the distance that a vehicle can travel with a specific amount of fuel. The car that can travel a good distance with just a small amount of fuel is stated as a vehicle with good mileage or high fuel efficiency, which also means that the owner of that car need not spend much money on expensive petrol or diesel. Especially in the last few years, car and bike mileage has become a focus of attention of drivers and manufacturers since petrol, diesel and other fuels have become quite expensive.
              <br></br><br></br>  
              The analysis of a vehicle's mileage is a very important one. To understand why some vehicles need more fuel to drive one kilometer of distance (the car's fuel efficiency), is a technical analysis.
              <br></br><br></br>
              Some reasons for bad mileage is weight of the car, the age of the car, the maintenance of the vehicle, the traffic conditions, the fuel type and quality and the driving style. In general we can say that the calm and controlled driver can get better mileage
              <br></br><br></br>
              Mileage is just one indicator of a vehicle condition. Theoretically, a vehicle that has covered more miles has more wear and tear, but  a car with 60,000 miles on the odometer can easily be in worse shape than one with 120,000 miles. Cars and trucks like to be driven. Parts that don’t get regular use can become brittle and break more easily. And a low-mileage car that hasn’t had regular maintenance can see more problems down the line. Overall, a high-mileage vehicle that is driven frequently and has been well-maintained will be a more reliable bet.
            </div>
            </div>
            </div>
          </div>
        </div>
      </div> 
      
     
      <div className="accordion-item"  style={{backgroundColor : props.mode ==='dark'?'#212529':'rgb(235 235 235)',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
        <h2 className="accordion-header" id="headingEight">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseSix"  style={{backgroundColor : props.mode ==='dark'?'#2B2D2F':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
          <h3>Power</h3>
          </button>
        </h2>
        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <div className="container">
              <div className="row row-cols-2">
              <div className="card my-5"  style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke',width : '28rem',height:'25rem'}}>
              <img src="horsepowere.jpg" className="card-img-top my-2" alt="..."/>
                <div className="card-body mx-3">
                <p className="card-text" style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>The 1341 horsepower (one megawatt) engine from the Koenigsegg One1 supercar.</p>
               </div>
           </div>
              <div className="col col-md-7 mx-4 my-5">
              Horsepower a figure used to measure the power of an engine and is often abbreviated as hp. In simple terms, it’s how much ‘work’ the engine is capable of.There’s more science behind a car’s speed than sheer power, but it does have one of the biggest impacts on the overall performance of a car — in particular, its ability to accelerate.
              <br></br><br></br>
              As a simple rule, the more horsepower a car has — the faster it can go in a straight line.
              <br></br><br></br>
              An easy way to imagine the impact of more power is to imagine you’re pushing a car yourself. Now, if a friend came to help you, there’s more force behind it and thus you can push it faster, easier and further.
              <br></br><br></br>
              It’s not quite as simple as that, granted. For example, upgrading a 100hp car to have 200hp won’t make it twice as fast. There are other factors to consider — with key ones being weight, grip levels and aerodynamics.
              <br></br><br></br>
              Horsepower has less of an effect the higher your speed is, with aerodynamic efficiency playing an ever-more key part as you get faster.
              <br></br><br></br>
              Horsepower is an important specification for buyers to consider, as it speaks directly to performance.  For a given vehicle, an engine with more horsepower and more torque will accelerate more quickly — important for drivers who frequently use freeway on-ramps — and offer greater towing reliability. For the same vehicle, a lower-horsepower engine will offer greater fuel economy in exchange for more leisurely acceleration.

              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item"  style={{backgroundColor : props.mode ==='dark'?'#212529':'rgb(235 235 235)',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
        <h2 className="accordion-header" id="headingNine">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseSix"  style={{backgroundColor : props.mode ==='dark'?'#2B2D2F':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
          <h3>ABS</h3>
          </button>
        </h2>
        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <div className="container">
              <div className="row row-cols-2">
              <div className="card my-5"  style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke',width : '29rem'}}>
              <img src="abs.jpg" className="card-img-top my-2" alt="..."/>
                <div className="card-body mx-3">
                <p className="card-text" style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>ABS Comparision</p>
               </div>
           </div>
              <div className="col col-md-7 mx-4 my-5">
              Commonly known as ABS, or sometimes anti-skid braking systems, anti-lock braking systems help prevent car and motorcycle wheels locking up and improve steering control whilst braking.
              <br></br><br></br>
              ABS works by releasing and then reapplying or 'pumping' the brakes to a motorcycle wheel or car wheels in heavy braking situations. Sensors on each wheel are used to detect 'locking' or when a wheel stops moving and starts to skid. Although not all ABS systems are the same, with some only preventing wheels on the rear axle from locking up. When a lock-up is detected, ABS pumps the brakes, 100's of times a second. This stops the wheel or wheels from skidding and helps keep the driver in control of the vehicle. 
              <br></br><br></br>
              e primary purpose of ABS is not actually to help cars stop faster. But to help drivers maintain control of their vehicles in heavy braking situations. In ideal conditions vehicles equipped with ABS generally experience shorter stopping distances than those without. Decreased stopping distance is not guaranteed by ABS and is a secondary effect.
              <br></br><br></br>
              ABS has been proven to reduce the risk of crashing when being used on typical road surfaces like bitumen and concrete. But the results are quite different on surfaces like snow, ice and gravel, where braking distances are actually increased. 
                  
             </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    {showButton && (
        <button onClick={scrollToTop} className="btn btn-danger btn-floating btn-lg" id="back-to-top">
          &#8679;
        </button>
      )}

    <hr></hr>

    

<div className="container my-5" style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}} >
  <div className="row">
    <div className="col-8 col-md-8">Credits for text and images goes to respective owners</div>
    
  </div>
</div>
    
  </div>
  )
}
