import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import data from "../data/data";
import Footer from './Footer';

export default function AnimeDetail() {
    const { id } = useParams();
    const anime = data.find((anime) => anime.id === Number(id));

    if (!anime) {
        return <div>Anime not found.</div>;
    }

    return (
        <div className="anime-detail">
            <div className="table-container">
                <table className="anime-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Episodes</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={anime.image} alt={anime.title} className="table-image" /></td>
                            <td>{anime.title}</td>
                            <td>{anime.description}</td>
                            <td>{anime.category}</td>
                            <td>{anime.episodes}</td>
                            <td>{anime.rating} <FaStar className="rating-icon" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link to='/'><button className='button-detail'>GO TO Home</button></Link>
            <Footer/>
        </div>
    );
}
