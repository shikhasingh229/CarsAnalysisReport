import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Home(props) {
  return (
    <>
<div className="jumbotron" style={{backgroundColor : props.mode ==='dark'?'rgb(111 116 120)':'rgb(228 230 232)',color : props.mode ==='light' ? 'black':'whitesmoke'}}>


<div className="container">
            <div className="row row-cols-2">
            <div className="col col-md-7 mx-4 my-5">
            <span className='mx-4'> Welcome to</span>
            <div className='container'><h1 className="display-4"><span className='head'>C</span>ars  <span className='head'>A</span>nalysis  <span className='head'>R</span>eport</h1></div>
            <p className="lead mx-4">This Web App shows the Visualization of analyzed data provided by Microsoft Engage Team on Cars. Apart from that this app also includes information regarding some important car features which buyers keep in mind before purchasing a car. 
             </p>
            <br className="my-4"/>
            <p className='my-2 mx-4'>To move to the viualisation of analysed data click on the button below.</p>
            <HashLink className="btn btn-dark btn-lg mx-3 my-5" id='btn' to="#dash" role="button">Go to Report</HashLink>
            </div>
            <div className="card my-4 mx-1 border-0"  style={{backgroundColor :'rgba(0, 0, 0, 0) ',width : '25rem',height:'30rem'}}>
              <img src="dA.png" className="card-img-top my-2 mx-5" alt="body"/>
           </div>
            </div>
            </div>
</div>

       <div className="card mx-5 my-5">
          <div className="card-body my-1 mx-1" style={{backgroundColor : props.mode ==='dark'?'rgb(33 37 41)':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
          At present, automotive companies are capable of collecting and analyzing an enormous amount of raw data. Advancements in data analytics and its fusion with the automotive industry has led to smarter, more connected vehicles, and drastic improvements in sales and marketing.
              <br></br> <br></br> 
              IHS Automotive has estimated that an average car produces approximately 30 terabytes of data daily. The onus is then on manufacturers to effectively use the data for competitive advantage. Since so much data is produced, the automotive industry today has turned into a data-driven industry. Thus, automobile manufacturers can use data analytics software to glean new insights into their business and make better decisions, which can then be used to maintain and expand market position and profits.
              <br></br> <br></br>
              Data science is now being used extensively by manufacturers to improve many aspects of their business processes. For example, once the proper sensors are installed in a vehicle, predictive analytics can easily be used by engineers to view and predict potential issues before they become problems. Therefore, they can advise the customer to go for an early service.
              
              <br></br> <br></br> <br></br>
              Like any scientific discipline, data analysis follows a rigorous step-by-step process. Each stage requlres different skills and know-how. To get meaningful insights, though, it’s important to understand the process as a whole. An underlying framework is invaluable for producing results that stand up to scrutiny.The steps of Data Analysis are:-
              <br></br> <br></br> 
              <ul>
              <li className='liHead'>Defining the question</li><section>The first step in any data analysis process is to define your objective. In data analytics jargon, this is sometimes called the ‘problem statement’.
                <br></br> A data analyst’s job is to understand the business and its goals in enough depth that they can frame the problem the right way. In our case the problem statement was to demonstrate how the Automotive Industry could harness data which can help them to understand customer behaviour and to take informed decisions.
              </section>
              <li className='liHead'>Collecting the data</li><section>Once you’ve established your objective, you’ll need to create a strategy for collecting and aggregating the appropriate data. A key part of this is determining which data you need. This might be quantitative (numeric) data, e.g. sales figures, or qualitative (descriptive) data, such as customer reviews.
                <br></br> In this case the data set was provided by Microsoft Engage Team which included a variety of features of cars which are manufactured by various makers.
              </section>

              </ul>
              <div className="container">
              <div className="row row-cols-2">
              <div className="card my-4"  style={{backgroundColor : props.mode ==='dark'?'rgb(43 45 47)':'white',color : props.mode ==='light' ? 'black':'whitesmoke',width : '35rem',height:'29rem'}}>
              <img src="data.png" className="card-img-top my-3" alt="..."/>
           </div>
              <div className="col col-md-6 mx-2 my-2">
              <ul>
              <li className='liHead'>Cleaning the data</li><section>Once you’ve collected your data, the next step is to get it ready for analysis. This means cleaning, or ‘scrubbing’ it, and is crucial in making sure that you’re working with high-quality data. Key data cleaning tasks include:
                <br></br>
                <ul>
                  <li><strong>Removing major errors, duplicates, and outliers</strong></li><section>all of which are inevitable problems when aggregating data from numerous sources.</section>
                  <li><strong>Removing unwanted data points</strong></li><section>extracting irrelevant observations that have no bearing on your intended analysis.</section>
                  <li><strong>Bringing structure to your data</strong></li><section>general ‘housekeeping’, i.e. fixing typos or layout issues, which will help you map and manipulate your data more easily.</section>
                  <li><strong>Filling in major gaps</strong></li><section>as you’re tidying up, you might notice that important data are missing. Once you’ve identified gaps, you can go about filling them.</section>
                </ul>
                A good data analyst will spend around 70-90% of their time cleaning their data. This might sound excessive. But focusing on the wrong data points (or analyzing erroneous data) will severely impact your results.In this case I have used python libraries for data cleaning. Along with python libraries I have also used Power BI for Data Cleaning and Visualization.
              </section>

              </ul>
              
              </div>
            </div>
            </div>
             
            <ul>
              <li className='liHead'>Analyzing the data</li><section>You now have a wealth of data. You’ve spent time cleaning it up. It’s as organized as it’ll ever be. Now you’re ready for the fun stuff.
                <br></br> In this step, you’ll begin to slice and dice your data to extract meaningful insights from it. Using the techniques and methods of data analysis, you’ll look for hidden patterns and relationships, and find insights and predictions.<br></br>
                For Data Analysis I have used Python Libraries and Power BI.
              </section>
              <li className='liHead'>Sharing your results</li><section>You’ve finished carrying out your analyses. You have your insights. The final step of the data analytics process is to share these insights with the wider world.For this reason, data analysts commonly use reports, dashboards, and interactive visualizations to support their findings.
                <br></br> For reports and interactive Visualization I have used Power BI, which is embedded below.
              </section>

              </ul>


          </div>
       </div>

                     <div className="videoWrapper mx-5 my-5">
                          <iframe title="dash - Dashboard" id='dash' src="https://app.powerbi.com/view?r=eyJrIjoiMmY0NzYxMTYtNjhhMi00OTRlLTg5NzUtZTg5OTU2NGVmZjQ3IiwidCI6ImNjYmZhZjVhLThmMzItNDQzYS1iYmZlLTVmOTAxYzVmZTQ0MCJ9" allowFullScreen></iframe>
                     </div>

       <div className="card mx-5 my-5">
         <div className="card-body" style={{backgroundColor : props.mode ==='dark'?'rgb(33 37 41)':'white',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
           The above report is prepared from the data propvided by Microsoft Engage Team using Microsoft Power BI. The report shows relationships between many features and points out at many important aspects which a consumer generally looks for while buying a automobile such as Mileage (Average Mileage is calculated to show the mileage which is most frequenty available in the vehicles as a result of customers' demand). Similarly, Most Frequent Torque and Power are also mentioned. Moreover relationship between no. of models manufactured by various makers is also shown. On drill through the no. of variants of that model are shown on further drill through the detailed info of all particular variant of that model are shown. <br></br> The average price of car is also mentioned. There is also a slicer based on price which can be used to filter the cars. A distribution of all the fuel tank capacity by count is given which shows the most commonly used fuel tank capacity. Even there is distribution for various features by variant which includes features like no. of cylinder, Valves per cylinder, etc. Even we have a comparision betwwen Drivetrains which clearly indicates the most used drivetrain is FWD.The information provided can be crucial for automotive industry as it shows what are the most frequently used features and thus can use and improve those features.
         </div>
      </div>
             
<footer className="page-footer font-small special-color-dark  pt-4 "  style={{backgroundColor : props.mode ==='dark'?'#212529':'rgb(235 235 235)',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
  <div className="container-fluld text-center text-md-left">
    <div className="row">
      <div className="col-md-4 mt-md-0 mt-3">
        <div className="col-1"><img src="logo.png" alt="" width="250" height="250" className="d-inline-block align-text-top mx-5"/></div>
      </div>
      <hr className="clearfix w-100 d-md-none pb-3"/>
      <div className="col-md-3 mb-md-0 mb-3">
      <div className='box1 my-1' >
       <img src='microsoft.png' alt='light' style={{height:'40px',width:'40px'}} ></img>
        <div className='content1 mx-2' ><h5>MICROSOFT</h5></div>
       </div>
      
            <ul className="list-unstyled">
              <li>ENGAGE</li>
              <li>PROJECT</li>
              <li>DATA ANALYSIS</li>
            </ul>
      </div>
      <div className="col-md-4 mb-md-0 mb-3">
      <h4>CONTACT</h4>
       <div className='box1 my-3' >
       <img src='email.png' alt='light' style={{height:'40px',width:'40px'}} ></img>
        <div className='content1 mx-2' >shikhas.ug20.cse@nitp.ac.in  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
       </div>
       <div className='box1 my-3' >
       <img src='gitHub.png' alt='light' style={{height:'40px',width:'40px'}} ></img>
        <div className='content1 mx-2'>https://github.com/shikhasingh229 &nbsp; &nbsp;</div>
       </div>

      <div className='box1 my-3' >
         <img src='college.png' alt='light'  style={{height:'40px',width:'40px'}} ></img>
              <div className='content1 mx-2' >National Institute of Technology,Patna <section className="mx-5"><strong>Bihar, India</strong></section></div>
       </div> 

      </div>

    </div>
  </div>
  
  <div className="footer-copyright text-center py-1" style={{backgroundColor : props.mode ==='dark'?'#111417':'#a6a6a6',color : props.mode ==='light' ? 'black':'whitesmoke'}}>
  <p className="col-sm">
        &nbsp;&nbsp;    &copy;{new Date().getFullYear()} <span>C</span>ars  <span>A</span>nalysis  <span>R</span>eport 
  </p>
  </div>
  
</footer>

    </>
  )
}
