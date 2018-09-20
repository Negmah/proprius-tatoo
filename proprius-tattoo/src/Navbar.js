import React, { Component } from 'react';



class Navbar extends Component {


    render() {

        return (
            <div className="container-fluid">
            <div>
            <hr></hr>
            </div>
                <nav className="navbar navbar-expand-sm navbar-toggler gradient-red">
                    
                    {/* NAV ITEMS */ }
                    <div id="mainNavbar" style={{color:"white"}}>
                        <ul className="nav navbar-nav mr-auto">

                            {/* LOGO */ }
                            <div className="navbar-logo">
                                <a href="#" className="navbar-brand storeName align-middle mx-auto">
                                    <span>PROPRIUS</span>
                                    <br />
                                    <span>TATTOOS</span>
                                </a>
                            </div>

                            {/* MENU ITEMS */ }
                            <a className="nav-link navlinks" href="#">
                                Serviços
                                </a>

                            <li className="nav-item">
                                
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navlinks" href="#">
                                Sobre
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navlinks" href="#">
                                Artistas
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navlinks" href="#">
                                Eventos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navlinks" href="#">
                                Contactos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navlinks" href="#">
                                Marcações
                                </a>
                            </li>
                        </ul>
                    </div>
                    

                </nav>
            </div>
        );
    }
}

export default Navbar;


//TODO
// onclick method: when clicking on a tab, remove className "active" from all elements and add className "active" to clicked element








    
/*<div id="navbar-container" style={{height: "100px"}}>
<hr style={{backgroundColor: "#fd5e53", height: "3px", margin: "0px"}}></hr>

<div className="socialmedia">
    <i class="fab fa-facebook-square" style={{backgroundColor: "#fd5e53", fontSize: "36px", float: "left"}}></i>
    <i class="fab fa-instagram" style={{backgroundColor: "#fd5e53", fontSize: "36px", float: "left"}}></i><br />
    <i class="fas fa-mobile-alt" style={{backgroundColor: "#fd5e53", fontSize: "36px", float: "left"}}></i>
    <i class="fas fa-envelope" style={{backgroundColor: "#fd5e53", fontSize: "36px", float: "left"}}></i>
</div>

<h1 style={{color: "white"}}>
    <span className="storeName" style={{fontSize: "18px"}}>
        PROPRIUS TATTOOS
    </span>
</h1>
<hr style={{backgroundColor: "#fd5e53", height: "3px", margin: "0px"}}></hr>
</div>*/


/*<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item">
        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
    </li>
</ul>
<div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>
</div>

<nav className="navbar fixed-bottom navbar-dark bg-attention">
<ul>
    <li>

    </li>
</ul> 
</nav>*/

/*<div class="pos-f-t">
<div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
        <h5 class="text-white h4">Collapsed content</h5>
        <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
</div>
<nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
</nav>
</div>*/