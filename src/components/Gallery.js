import React, { useState } from 'react';


const Gallery = () => {
    const [hoveredImage, setHoveredImage] = useState(-1);
    
    return (
        <div >
            <div >
                <img
                    style={{transform: hoveredImage === 0 ? 'scale(1.1)' : 'scale(1)'}}
                    onMouseOver={() => setHoveredImage(0)}
                    onMouseOut={() => setHoveredImage(-1)}
                    src="./Naturaleza.jpg"
                />
                <img
                    style={{transform: hoveredImage === 1 ? 'scale(1.1)' : 'scale(1)'}}
                    onMouseOver={() => setHoveredImage(1)}
                    onMouseOut={() => setHoveredImage(-1)}
                    src="./arquitectura.jpg"
                />
                <img
                    style={{transform: hoveredImage === 2 ? 'scale(1.1)' : 'scale(1)',backgroundImage:"contain"}}
                    onMouseOver={() => setHoveredImage(2)}
                    onMouseOut={() => setHoveredImage(-1)}
                    src="deportiva.jpg"
                />
                <img
                    style={{transform: hoveredImage === 3 ? 'scale(1.1)' : 'scale(1)',backgroundImage:"contain"}}
                    onMouseOver={() => setHoveredImage(3)}
                    onMouseOut={() => setHoveredImage(-1)}
                    src="./documental.jpg"
                />
                                <img
                    style={{transform: hoveredImage === 3 ? 'scale(1.1)' : 'scale(1)',backgroundImage:"contain"}}
                    onMouseOver={() => setHoveredImage(3)}
                    onMouseOut={() => setHoveredImage(-1)}
                    src="./aerea.jpg"
                />
            </div>
        </div>
    );
}

export default Gallery;




