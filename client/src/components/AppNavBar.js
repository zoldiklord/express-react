import { useState } from 'react';
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';

const AppNavBar = () => {
    const [open,setOpen] = useState(false)
    const toggle = () =>{
        setOpen(!open)
    }
    return (  
        <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      ShoppingList
    </NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen = {open} navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="http://www.google.com">
            Google
          </NavLink>
        </NavItem>
        
       
      </Nav>
    </Collapse>
  </Navbar>
</div>
    );
}
 
export default AppNavBar;