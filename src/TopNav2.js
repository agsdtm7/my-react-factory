import React, { Component } from "react";

import "./TopNav.css";

export default class TopNav2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ""
        }
    }

    clicking = (filter) => {
        console.log(filter);
        this.setState({ selected: filter })
    }

    isActive = (value) => { return (value === this.state.selected) ? 'active' : 'default' }

    render() {
        const { firstmenu, firstlink } = this.props;
        return (
            <div style={{ background: this.props.bgColor }} className="topnav" >
                <a style={{ color: this.props.txtColor }}
                    onClick={this.clicking.bind(this, `${firstmenu ? firstmenu : 'Home'}`)}
                    className={this.isActive(`${firstmenu ? firstmenu : 'Home'}`)}
                    href={firstlink ? firstlink : '#home'}>
                    {firstmenu ? firstmenu : 'Home'}
                </a>
                <a style={{ color: this.props.txtColor }}
                    onClick={this.clicking.bind(this, 'about')}
                    className={this.isActive('about')}
                    href="#about">
                    About
                </a>
                <a style={{ color: this.props.txtColor }}
                    onClick={this.clicking.bind(this, 'service')}
                    className={this.isActive('service')}
                    href="#service">
                    Service
                </a>
                <a style={{ color: this.props.txtColor }}
                    onClick={this.clicking.bind(this, 'contact')}
                    className={this.isActive('contact')}
                    href="#contact">
                    Contact
                </a>
            </div>
        );
    }
}
