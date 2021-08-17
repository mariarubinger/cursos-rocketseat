import React from 'react';

import "./styles.css";

const Header = () =>
<header id="main-header">JSHunt</header>;

/* 

variável chamada Header que retorna uma função
criar componentes com apenas funções


isso 
const Header = () => <header id="main-header">JSHunt</header>;
é igual a isso:

class Header extends Component {
    redner() {
        return <h1>Hello</h1>
    }
}
 */

export default Header;