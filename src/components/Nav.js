import React from 'react';

const Nav = () => {
    return (
        <nav style={{ backgroundColor: 'rgb(50, 59, 64)', width: '100%' }}>
            <ul
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'end',
                    alignContent: 'center',
                }}
            >
                <a
                    style={{
                        maxHeight: '100%',
                        textDecoration: 'none',
                        alignContent: 'center',
                        padding: '10px 15px 10px 30px',
                    }}
                    href="#"
                >
                    <li
                        style={{
                            listStyleType: 'none',
                            fontSize: '20px',
                            color: '#ffffff',
                        }}
                    >
                        Home
                    </li>
                </a>
                <a
                    style={{
                        maxHeight: '100%',
                        textDecoration: 'none',
                        alignContent: 'center',
                        padding: '10px 15px 10px 30px',
                    }}
                    href="#"
                >
                    <li
                        style={{
                            listStyleType: 'none',
                            fontSize: '20px',
                            color: '#ffffff',
                        }}
                    >
                        Galeria
                    </li>
                </a>
                <a
                    style={{
                        maxHeight: '100%',
                        textDecoration: 'none',
                        alignContent: 'center',
                        padding: '10px 15px 10px 30px',
                    }}
                    href="#"
                >
                    <li
                        style={{
                            listStyleType: 'none',
                            fontSize: '20px',
                            color: '#ffffff',
                        }}
                    >
                        Sobre mi
                    </li>
                </a>
            </ul>
        </nav>
    );
};
export default Nav;