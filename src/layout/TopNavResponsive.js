import React, { Component } from "react";
import { Link } from 'react-router-dom';
import bars from '../img/bars.svg';
import xmenu from '../img/x.svg';
import brand from '../img/brand.png';
import './TopNav.css';
export default class TopNavReponsive extends Component {
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
                <div>
                    {this.props.brand ? <img className="menu-brand" src={brand} width="100" height="40" alt="logo-brand" /> : null}
                    <div style={{ background: this.props.bgColor }} className={`topnav  ${isExpanded ? 'is-expanded' : ''}`} >
                        <Link style={{ color: this.props.txtColor }}
                            onClick={this.clicking.bind(this, `${mn1 ? mn1 : 'Home'}`)}
                            className={this.isActive(`${mn1 ? mn1 : 'Home'}`)}
                            to={mnhref1 ? mnhref1 : '/'}>
                            {mn1 ? mn1 : 'Home'}
                        </Link>
                        <Link style={{ color: this.props.txtColor }}
                            onClick={this.clicking.bind(this, `${mn2 ? mn2 : 'About'}`)}
                            className={this.isActive(`${mn2 ? mn2 : 'About'}`)}
                            to={mnhref2 ? mnhref2 : "/about"}>
                            {mn2 ? mn2 : 'About'}
                        </Link>
                        <Link style={{ color: this.props.txtColor }}
                            onClick={this.clicking.bind(this, `${mn3 ? mn3 : 'Service'}`)}
                            className={this.isActive(`${mn3 ? mn3 : 'Service'}`)}
                            to={mnhref3 ? mnhref3 : "/service"}>
                            {mn3 ? mn3 : 'Service'}
                        </Link>
                        <a href="#" onClick={this.toggleMenu} className="icon"><img src={`${isExpanded ? xmenu : bars}`} width="30" height="20" alt="menu" /></a>
                    </div>
                </div>
            );
        } else {
            const { isExpanded } = this.state;
            const { mn1, mnhref1, mn2, mnhref2, mn3, mnhref3, mn4, mnhref4 } = this.props;
            return (
                <div>
                    {this.props.brand ? <img className="menu-brand" src={brand} width="100" height="40" alt="logo-brand" /> : null}
                    <div style={{ background: this.props.bgColor }} className={`topnav  ${isExpanded ? 'is-expanded' : ''}`} >
                        <Link style={{ color: this.props.txtColor }}
                            onClick={this.clicking.bind(this, `${mn1 ? mn1 : 'Home'}`)}
                            className={this.isActive(`${mn1 ? mn1 : 'Home'}`)}
                            to={mnhref1 ? mnhref1 : '/'}>
                            {mn1 ? mn1 : 'Home'}
                        </Link>
                        <Link style={{ color: this.props.txtColor }}
                            onClick={this.clicking.bind(this, `${mn2 ? mn2 : 'About'}`)}
                            className={this.isActive(`${mn2 ? mn2 : 'About'}`)}
                            to={mnhref2 ? mnhref2 : "/about"}>
                            {mn2 ? mn2 : 'About'}
                        </Link>
                        <Link style={{ color: this.props.txtColor }}
                            onClick={this.clicking.bind(this, `${mn3 ? mn3 : 'Service'}`)}
                            className={this.isActive(`${mn3 ? mn3 : 'Service'}`)}
                            to={mnhref3 ? mnhref3 : "/service"}>
                            {mn3 ? mn3 : 'Service'}
                        </Link>
                        <Link style={{ color: this.props.txtColor }}
                            onClick={this.clicking.bind(this, `${mn4 ? mn4 : 'Contact'}`)}
                            className={this.isActive(`${mn4 ? mn4 : 'Contact'}`)}
                            to={mnhref4 ? mnhref4 : "/contact"}>
                            {mn4 ? mn4 : 'Contact'}
                        </Link>
                        <a href="#" onClick={this.toggleMenu} className="icon"><img src={`${isExpanded ? xmenu : bars}`} width="30" height="20" alt="menu" /></a>
                    </div>
                </div>
            );
        }

    }
}
