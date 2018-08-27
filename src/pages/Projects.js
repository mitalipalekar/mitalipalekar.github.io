import React from 'react'

export default class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [
        /*{
          photo: './photos/placeholder.jpg',
          photoAlt: 'XXX',
          title: 'XXX',
          summary: 'XXX',
          description: 'XXX',
          technologies: 'Technologies: XXX'
        },*/
        {
          photo: './photos/chessbot.jpg',
          title: 'ChessIt',
          summary: 'Chess Bot',
          description: 'Implemented searching algorithms such as Minimax, Alpha-Beta Pruning and Jamboree along with heuristics to improve move generation time such as iterative deepening and killer move ordering.',
          technologies: 'Technologies: Java'
        },
        {
          photo: './photos/instacap.jpg',
          title: 'InstaCap!',
          summary: 'Image captioning Web App',
          description: 'Developed a caption generating web app to generate suitable captions, quotes, emoticons and hashtags based on the image uploaded and mood desired using the Clarifai API, to make captioning social media images (Facebook, Instagram etc.) easier.',
          technologies: 'Technologies: Clarifai API, JavaScript, Node.JS, HTML, CSS'
        },
        {
          photo: './photos/messagepredict.jpg',
          photoAlt: 'XXX',
          title: 'MessagePredict',
          summary: 'Message Predictor',
          description: 'Developed a message predictor based on frequency of words used in previous conversations as well as words that would make grammatical sense; implemented a variety of data structures such as TrieMaps, AVL Trees, Chaining HashTables as well as different sorting algorithms (Quick Sort, Heap Sort etc.).',
          technologies: 'Technologies: Java'
        },
        {
          photo: './photos/spam.png',
          photoAlt: 'XXX',
          title: 'Spam|Ham',
          summary: 'Spam email classification system',
          description: 'Created a Java application to determine whether an email is a spam email or not using the Naïve Bayes classifier with Laplace smoothing, achieving over 95% accuracy.',
          technologies: 'Technologies: Java'
        },
        {
          photo: './photos/placeholder.jpg',
          photoAlt: 'XXX',
          title: 'FindIt',
          summary: 'Multithreaded web server',
          description: 'Developed a multi-threaded web server through implementing linked lists and hash tables in C, crawling directory files and indexing words for a query processor, writing an in-memory inverted index to disk and implementing the front end of the server in C++.',
          technologies: 'Technologies: C, C++'
        },
        {
          photo: './photos/campusmaps.png',
          photoAlt: 'XXX',
          title: 'CampusMaps',
          summary: 'Shortest Distance Campus Map Finder',
          description: 'Created a Java Applet to determine the shortest path between two buildings on the University of Washington campus using BFS/Dijkstra’s algorithm on directed labelled multi-graphs as well as front-end GUI for user interaction using Swing.',
          technologies: 'Technologies: Java, Swing'
        },
        {
          photo: './photos/htmlcss.jpg',
          photoAlt: 'XXX',
          title: '(In)valid',
          summary: 'HTML/CSS Chrome Extension Validator',
          description: 'Created a chrome extension to determine whether the XHTML and CSS code of websites are valid according to the W3School standards',
          technologies: 'Technologies: Chrome extensions API, JavaScript, HTML, CSS'
        },
      ]
    };
  }

  render() {
    var projectsHTML = this.state.projects.map(function(project, i) {
      return (
        <div id='project' key={i}>
          <img src={require(`${project.photo}`)} alt={project.title}/>
          <div id='project-title'>{project.title}</div>
          <div><b>{project.summary}</b></div>
          <p id='project-description'>{project.description}</p>
          <p><em>{project.technologies}</em></p>
        </div>
      );
    });

      return (
        <div>
          <div id='title'>
            <span>PROJECTS</span>
          </div>
          {projectsHTML}
        </div>
      );
  }
}