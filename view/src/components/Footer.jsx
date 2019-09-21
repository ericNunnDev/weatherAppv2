import React from 'react';

const Footer = () => {
    return (
        <div className='footer-wrapper center'>
            <div className='container'>
                <div className='row'>
                    <div className='col s12'>
                     <ul>
                       <li><a className='grey-text text-lighten-3' href='#'><i className='fab fa-github-alt fa-2x' /></a></li>
                       <li><a className='grey-text text-lighten-3' href='#'><i className='fab fa-react fa-2x' /></a></li>
                       <li><a className='grey-text text-lighten-3' href='#'><i className='fab fa-sass fa-2x' /></a></li>
                     </ul>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <div className='container'>
                © Copyright 2019 Eric Nunn
                </div>
            </div>
         </div>
    )
}

export default Footer;