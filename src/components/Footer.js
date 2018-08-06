import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <div id='footer'>
        <div>
          <a href='mailto:mitali97@cs.washington.edu'>
            <i className='fa fa-envelope fa-3x footer-icons' aria-hidden='true' />
          </a>
          <a href="https://www.linkedin.com/in/mitalipalekar" target='_blank' rel="noopener noreferrer">
            <i className='fa fa-linkedin fa-3x footer-icons' aria-hidden='true' />
          </a>
          <a href="https://github.com/mitalipalekar" target='_blank' rel="noopener noreferrer">
            <i className='fa fa-github fa-3x footer-icons' aria-hidden='true' />
          </a>
          <a href="https://www.twitter.com/mitalipalekar" target='_blank' rel="noopener noreferrer">
            <i className='fa fa-twitter fa-3x footer-icons' aria-hidden='true' />
          </a>
        </div>
      </div>
    );
  }
}