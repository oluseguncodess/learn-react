import PropTypes from 'prop-types'

function Header(props) {
    return(
        <header>
            <h1>My website</h1>
            <nav>
                <ul>
                   <li><a href="#">Home</a> {props.name}</li>
                   <li><a href="#">About</a></li>
                   <li><a href="#">Services</a></li>
                   <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}
Header.propTypes = {
     name: PropTypes.string
}

export default Header;