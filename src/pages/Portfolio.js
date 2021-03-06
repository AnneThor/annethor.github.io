import React from 'react';
import '../App.css';
import ProjectTile from '../components/ProjectTile.js';


export default function Portfolio() {
  return(
      <section id="projects">
        <div className="spacer"> </div>
        <div className="projects-grid">
          <ProjectTile
            altLink="https://ballardblog.herokuapp.com/"
            imageLocation="message-board.png"
            imageDescription="partial welcome page of message board showing nav bar, map and welcome text"
            title="Messae Board | CRUD" />
          <ProjectTile
            link="whack-a-mole/"
            imageLocation="whack-a-mole.png"
            imageDescription="portion of whack a mole field, showing mole icon"
            title="Whack a Mole | Vanilla JS" />
          <ProjectTile 
            altLink="https://omdb-moviefinder.herokuapp.com/"
            imageLocation="movie-finder.png"
            imageDescription="portion of movie finder results showing a Nightmare Alley poster"
            title="Movie Finder | omdbAPI" />
          <ProjectTile 
            link="treemap/"
            imageLocation="treemap.png"
            imageDescription="portion of treemap, with differently sized squares representing different portions of total sales"
            title="Video Game Sales | D3" />
          <ProjectTile 
            link="choropleth-map/"
            imageLocation="choropleth-map.png"
            imageDescription="portion of choropleth map showing tooltip"
            title="US Education | D3" />
          <ProjectTile 
            link="HeatMap/"
            imageLocation="heat-map.png"
            imageDescription="header and portion of interactive heat map"
            title="Heat Map | D3" />
          <ProjectTile 
            link="ScatterPlot/"
            imageLocation="scatter-plot.png"
            imageDescription="Portion of doping in professional cycling graph"
            title="Interactive Scatter Plot | D3" />
          <ProjectTile  
            link="BarChart/"
            imageLocation="bar-chart.png"
            imageDescription="Portion of interactive graph showing US GDP growth"
            title="US GDP | D3" />
          <ProjectTile 
            link="javascript-calculator/"
            imageLocation="javascript-calculator.png"
            imageDescription="picture of javascript calculator"
            title="Javascript Calculator | React" />
          <ProjectTile 
            link="drum-machine/"
            imageLocation="drum-machine.png"
            imageDescription="drum machine overview"
            title="Drum Machine | React" />
          <ProjectTile 
            link="markdown-previewer/"
            imageLocation="markdown-previewer.png"
            imageDescription="overview of markdown input-output layout"
            title="Markdown Previewer | React" />
          <ProjectTile 
            link="random-simpsons-quote/"
            imageLocation="random-quote.png"
            imageDescription="display of random quote with simpsons character"
            title="Simpsons Quote Generator" />
          <ProjectTile 
            link="tic-tac-toe/"
            imageLocation="tic-tac-toe.png"
            imageDescription="empty tic tac toe game layout"
            title="Tic Tac Toe" />
          <ProjectTile 
            link="TributePage/"
            imageLocation="tribute-page.png"
            imageDescription="Cover Page of Tribute Page, photo and captions of Ray Bradbury"
            title="Ray Bradbury Page" />
          <ProjectTile 
            link="survey-form/"
            imageLocation="survey-form.png"
            imageDescription="portion of a survey form with input fields"
            title="Demographic Survey" />
          <ProjectTile 
            link="product-page/"
            imageLocation="product-page.png"
            imageDescription="portion of a product page with bulleted information"
            title="Product Page" />
          <ProjectTile  
            link="tech-clone/"
            imageLocation="tech-clone.png"
            imageDescription="portion of a technical documentation page"
            title="Technical Documentation" />
        </div>
      </section>
  );
}
