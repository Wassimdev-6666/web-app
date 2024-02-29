import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import data from "../data/data";
import { Link } from 'react-router-dom';

export default function Bodylistanime({ searchTerm }) {
    const [listanime, setListAnime] = useState([]);

    useEffect(() => {
        setListAnime(data);
    }, []);

    const filteredAnime = listanime.filter((anime) =>
        anime.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderStars = (rating) => {
        const stars = [];
        const starCount = Math.min(Math.max(Math.round(rating / 2), 1), 5);

        for (let i = 0; i < 5; i++) {
            if (i < starCount) {
                stars.push(<FaStar key={i} className="rating-icon" />);
            } else {
                stars.push(<FaStar key={i} className="rating-icon" style={{ color: '#e4e5e9' }} />);
            }
        }

        return stars;
    };

    return (
        <div className='container' id='newbody'>
            <div className='image-grid'>
                {filteredAnime.map((el, index) => (
                    <div key={index} className='image-container'>
                        <img src={el.image} alt={el.title} className='img-anim' />
                        <div className="overlay">
                            <h3>{el.title}</h3>
                            <h3>Rating: {renderStars(el.rating)}</h3>
                        </div>
                        <Link to={{ pathname: `/detail/${el.id}` }}>
                            <button type='button' className='detail-button'>Voir Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
