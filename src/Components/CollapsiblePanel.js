import React, { Component } from 'react';

class CollapsiblePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e) {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div>
                <div onClick={(e)=>this.togglePanel(e)} className='header'>{this.props.title}</div>
                {this.state.open ? (<div className='content'>{this.props.children}</div>):null}
            </div>
        );
    }
}

export default CollapsiblePanel;