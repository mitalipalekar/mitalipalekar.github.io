import React from 'react'

export default class Work extends React.Component {
  constructor() {
    super()
    this.state = {
      positions: [
        {
          photo: './photos/facebook.jpg',
          photoAlt: 'Intern at Facebook',
          title: 'Software Engineering Intern',
          company: 'Facebook, App Monetization',
          description: 'Designed and implemented an internal tool to pause & unpause Facebook ads at scale which doubled the capacity of ads that could be successfully paused & unpaused in a single job and improved performance by over 700%.',
          technologies: 'Hack, XHP, JavaScript, Hive, Presto, Facebook Distributed Job Scheduler'
        },
        {
          photo: './photos/linkedin.jpg',
          photoAlt: 'Intern at LinkedIn',
          title: 'Software Engineering Intern',
          company: 'LinkedIn Learning',
          description: 'Architected and implemented a data-driven approach to access control for LinkedIn Learning, improving access control accuracy, observability, and scalability.',
          technologies: 'Java, Parseq, Pegasus Data Schemas, Rest.Li, XACML Access Control'
        },
        {
          photo: './photos/stripe.jpg',
          photoAlt: 'Intern at Stripe',
          title: 'Software Engineering Intern',
          company: 'Stripe, Search and Sigma',
          description: 'Developed pipeline to automate creation of elastic search indices for large merchants, enabling searches for large merchants that would previously time out due to un-optimized data stores.',
          technologies: 'Ruby, ElasticSearch'
        },
        {
          photo: './photos/uber.jpeg',
          photoAlt: 'Intern at Uber',
          title: 'Software Engineering Intern',
          company: 'Uber, Platform Infrastructure',
          description: 'Architected and implemented in-production rack distribution analysis support allowing a rack aware distribution of service instances and preventing services from violating their service-level agreements, improving service reliability.',
          technologies: 'Golang, Mesos, Aurora, Uber’s Internal Tooling (service store, infrastructure store, indexing service)'
        },
        {
          photo: './photos/seclab.png',
          photoAlt: 'Research Assistant at UW CSE Security & Privacy Lab',
          title: 'Undergraduate Research Assistant',
          company: 'UW CSE Security and Privacy Lab',
          description: 'Broadly researched ways to improve and build tools to address end-user security & privacy needs',
          technologies: 'JavaScript, React, Flux, Node.js'
        },
        {
          photo: './photos/NASA.jpg',
          photoAlt: 'Intern at NASA',
          title: 'Software Engineering Intern',
          company: 'NASA Ames, Human Systems Lab',
          description: 'Designed and developed a path-finding tool and in-procedure execution guide using the Microsoft HoloLens for safety procedures and experiment conduction on the International Space Station, possibly replacing the current manual procedure execution process',
          technologies: 'Unity, C#, HoloToolkit, Node.js'
        },
        {
          photo: './photos/daily.jpg',
          photoAlt: 'Web Editor at Daily',
          title: 'Web Editor',
          company: 'The Daily - UW Newspaper',
          description: 'Responsible for managing the online presence of the UW student newspaper',
          technologies: 'HTML, CSS, JavaScript, OpenCMS'
        },
      ]
    };
  }

  render() {
    var positionsHTML = this.state.positions.map(function(position, i) {
      return (
        <div id='position' key={i}>
          <img src={require(`${position.photo}`)} alt={position.photoAlt}/>
          <div id='position-title'><b>{position.title}</b></div>
          <div><em>{position.company}</em></div>
          <p id='position-description'>{position.description}</p>
          <p><b><em>Technologies: {position.technologies}</em></b></p>
        </div>
      );
    });

      return (
        <div>
          <div id='title'>
            <span><b>WORK EXPERIENCE</b></span>
          </div>
          {positionsHTML}
        </div>
      );
  }
}