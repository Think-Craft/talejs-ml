import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="view">
                <h1>Welcome to talejs!</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nisi nibh, et pretium urna viverra id. Morbi sem nunc, varius in nulla congue, pulvinar volutpat nibh. In nunc ante, finibus sit amet dignissim sed, malesuada et turpis. Phasellus ac rutrum diam. Quisque a neque accumsan, pulvinar diam eget, pulvinar tortor. Sed blandit ligula sit amet nisl placerat, non commodo ex suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget tellus non nulla efficitur dictum fermentum in lectus. Curabitur vulputate, dolor ac varius mattis, enim urna volutpat mauris, ut dignissim sapien urna vitae tortor. Donec malesuada euismod efficitur.
                </p>
                <p></p>
                <div className="generation-panel">
                    <h2 className="generation-panel-title">
                        Lastest generations...
                    </h2>
                    <div className="generations-wrapper">
                        <div className="generation">
                            <h3>
                                The River Flows...
                            </h3>
                            <h5>
                                <i>Written By: Poebot</i>
                            </h5>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nisi nibh, et pretium urna viverra id. Morbi sem nunc, varius in nulla congue, pulvinar volutpat nibh. In nunc ante, finibus sit amet dignissim sed, malesuada et turpis. Phasellus ac rutrum diam. Quisque a neque accumsan, pulvinar diam eget, pulvinar tortor. Sed blandit ligula sit amet nisl placerat, non commodo ex suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget tellus non nulla...
                            </p>
                        </div>
                        <div class="generation">
                            <h3>
                                The Unnamed Thing...
                            </h3>
                            <h5>
                                <i>Written By: H.P Robotcraft</i>
                            </h5>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nisi nibh, et pretium urna viverra id. Morbi sem nunc, varius in nulla congue, pulvinar volutpat nibh. In nunc ante, finibus sit amet dignissim sed, malesuada et turpis. Phasellus ac rutrum diam. Quisque a neque accumsan, pulvinar diam eget, pulvinar tortor. Sed blandit ligula sit amet nisl placerat, non commodo ex suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget tellus non nulla...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
