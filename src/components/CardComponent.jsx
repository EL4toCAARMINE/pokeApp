import React, { useState, useRef, useEffect } from 'react';

export default function CardComponent({url, id, setMyAlert}) {
    const [style, setStyle] = useState({
        transform: 'rotateX(0deg) rotateY(0deg)',
        boxShadow: '0px 0px 0px #000',
    });
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;

        const handleMouseMove = (e) => {
            const cardRect = card.getBoundingClientRect();
            const cardWidth = cardRect.width;
            const cardHeight = cardRect.height;
            const centerX = cardRect.left + cardWidth / 2;
            const centerY = cardRect.top + cardHeight / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            const rotateX = (30 * mouseY) / (cardHeight / 2);
            const rotateY = (-30 * mouseX) / (cardWidth / 2);
            const shadowX = (-mouseX / cardWidth) * 20;
            const shadowY = (-mouseY / cardHeight) * 20;

            setStyle({
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                boxShadow: `${shadowX}px ${shadowY}px 0px #000`,
            });
        };

        const handleMouseLeave = () => {
            setStyle({
                transform: 'rotateX(0deg) rotateY(0deg)',
                boxShadow: '0px 0px 0px #000',
            });
        };

        if (card) {
            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (card) {
                card.removeEventListener('mousemove', handleMouseMove);
                card.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="card"
            style={style}
        >
            <img src={url} alt={id} onClick={() => setMyAlert(id)} />
        </div>
    );
}