import React, { Component } from 'react'
import Logo from './img/logo.png';

export default class About extends Component {
    render() {
        return (
            <div class="view">
                <h1>About us...</h1>
                <div class="about-section">
                     <img  src={Logo} class="CompanyLogo" alt="Company Logo..."/>
                    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nisi nibh, et pretium urna viverra id. Morbi sem nunc, varius in nulla congue, pulvinar volutpat nibh. In nunc ante, finibus sit amet dignissim sed, malesuada et turpis. Phasellus ac rutrum diam. Quisque a neque accumsan, pulvinar diam eget, pulvinar tortor. Sed blandit ligula sit amet nisl placerat, non commodo ex suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget tellus non nulla efficitur dictum fermentum in lectus. Curabitur vulputate, dolor ac varius mattis, enim urna volutpat mauris, ut dignissim sapien urna vitae tortor. Donec malesuada euismod efficitur.


                    </p>
                </div>        
            </div>
        )
    }
}
