import React, { Component } from "react";
import bars from './img/bars.svg';
import xmenu from './img/x.svg';
export default class TopNav2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "",
            isExpanded: false
        }
    }

    clicking = (filter) => {
        this.setState({ selected: filter })
    }

    toggleMenu = (e) => {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
        console.log(this.state.isExpanded);
    }

    isActive = (value) => { return (value === this.state.selected) ? 'active' : 'default' }

    render() {

        if (this.props.totalmenu === '3') {
            const { isExpanded } = this.state;
            const { mn1, mnhref1, mn2, mnhref2, mn3, mnhref3 } = this.props;
            return (
                <div style={{ background: this.props.bgColor }} className={`topnav  ${isExpanded ? 'is-expanded' : ''}`} >
                    <a style={{ color: this.props.txtColor }}
                        onClick={this.clicking.bind(this, `${mn1 ? mn1 : 'Home'}`)}
                        className={this.isActive(`${mn1 ? mn1 : 'Home'}`)}
                        href={mnhref1 ? mnhref1 : '#home'}>
                        {mn1 ? mn1 : 'Home'}
                    </a>
                    <a style={{ color: this.props.txtColor }}
                        onClick={this.clicking.bind(this, `${mn2 ? mn2 : 'About'}`)}
                        className={this.isActive(`${mn2 ? mn2 : 'About'}`)}
                        href={mnhref2 ? mnhref2 : "#about"}>
                        {mn2 ? mn2 : 'About'}
                    </a>
                    <a style={{ color: this.props.txtColor }}
                        onClick={this.clicking.bind(this, `${mn3 ? mn3 : 'Service'}`)}
                        className={this.isActive(`${mn3 ? mn3 : 'Service'}`)}
                        href={mnhref3 ? mnhref3 : "#service"}>
                        {mn3 ? mn3 : 'Service'}
                    </a>
                    <a href="#" onClick={this.toggleMenu} className="icon"><img src={`${isExpanded ? xmenu : bars}`} width="30" height="20" /></a>
                </div>
            );
        } else {
            const { mn1, mnhref1, mn2, mnhref2, mn3, mnhref3, mn4, mnhref4 } = this.props;
            return (
                <div style={{ background: this.props.bgColor }} className="topnav" >
                    <a style={{ color: this.props.txtColor }}
                        onClick={this.clicking.bind(this, `${mn1 ? mn1 : 'Home'}`)}
                        className={this.isActive(`${mn1 ? mn1 : 'Home'}`)}
                        href={mnhref1 ? mnhref1 : '#home'}>
                        {mn1 ? mn1 : 'Home'}
                    </a>
                    <a style={{ color: this.props.txtColor }}
                        onClick={this.clicking.bind(this, `${mn2 ? mn2 : 'About'}`)}
                        className={this.isActive(`${mn2 ? mn2 : 'About'}`)}
                        href={mnhref2 ? mnhref2 : "#about"}>
                        {mn2 ? mn2 : 'About'}
                    </a>
                    <a style={{ color: this.props.txtColor }}
                        onClick={this.clicking.bind(this, `${mn3 ? mn3 : 'Service'}`)}
                        className={this.isActive(`${mn3 ? mn3 : 'Service'}`)}
                        href={mnhref3 ? mnhref3 : "#service"}>
                        {mn3 ? mn3 : 'Service'}
                    </a>
                    <a style={{ color: this.props.txtColor }}
                        onClick={this.clicking.bind(this, `${mn4 ? mn4 : 'Contact'}`)}
                        className={this.isActive(`${mn4 ? mn4 : 'Contact'}`)}
                        href={mnhref4 ? mnhref4 : "#contact"}>
                        {mn4 ? mn4 : 'Contact'}
                    </a>
                </div>
            );
        }
    }
}
