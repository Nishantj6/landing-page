import React from 'react';
import './services.css'

class Services extends React.Component{
    render(){
        return(
            <div className="servicemenu">
                <h3> Services</h3>
                <h2>We offer currently</h2>
                <div className="row">
                <div>
                    <span>
                        <i class ="fas fa-mobile-alt"></i>
                    </span>
                    <h4>Mobile Platform</h4>
                    <p>Mobile platforms like IOS and Android</p>
                </div>
                <div>
                    <span>
                        <i class = "fas fa-pen"></i>
                    </span>
                    <h4>Redesigned</h4>
                    <p>Completly Redesigned for IOS 12</p>
                </div>
                <div>
                    <span>
                    <i class = "far fa-thumbs-up"></i>
                    </span>
                    <h4 ><a href="https://www.facebook.com">Like Us</a></h4>
                    <p>Like Us on facebook</p>
                </div>
                <div>
                    <span>
                    <i class = "fab fa-app-store"></i>
                    </span>
                    <h4>IOS and Android Platform</h4>
                    <p>Currently compatible for IOS 12</p>
                </div>

                </div>

            </div>

        )
    }
}



export default Services;