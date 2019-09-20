import React from 'react';

const Navigation = () => {
    return (
        <div className='nav-wrapper'>
            <div className='container'>
                <div className='row'>
                  <div className='col s12'>
                      <div>
                        <a href='#' className='brand-logo left'><i className='fas fa-cloud-meatball fa-lg' /> What the Weather?</a>
                      </div>
                    <ul className='right'>
                        <li><a className='nav-link' href='#'>Home</a></li>
                        <li><a className='nav-link' href='#'>About</a></li>
                        <li><a className='nav-link' href='#'>Contact</a></li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;