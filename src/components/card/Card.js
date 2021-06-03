import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import '../card/Card.css'


class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        <button id="hamburger" onClick={this.showMenu}>
          <h2 id="ham-icon"><GiHamburgerMenu/></h2>
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu"
              ref={(element) => {
                this.dropdownMenu = element;
              }}>
                <Link to='/'><h3 className="cardText">Home</h3></Link>
                <Link to='/auth'><h3 className="cardText">Login</h3></Link>
                <Link to='/packages'><h3 className="cardText">Packages</h3></Link>
                <Link to='/cart'><h3 className="cardText">Cart</h3></Link>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Card