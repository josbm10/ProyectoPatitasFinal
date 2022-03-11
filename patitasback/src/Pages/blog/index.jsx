import './blog.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PageBlog() {

    const [blog, setBlog] = useState([]);

    function getBlog() {
        axios
            .get(`http://localhost:8000/blog`)
            .then((response) => {
                console.log(response.data);
                setBlog(response.data)})
            .catch((e) => {});
    }

    useEffect(() => {
        getBlog();
    }, []);

    return (
    <main className="blog__container">
        {blog.map((value) => {
            return (
                <div className="blog__card" key={value.blog_id}>
                    <img src={value.blog_img} alt={value.blog_title} />
                    <div className="blog__info">
                        <h2>{value.blog_title}</h2>
                        <span className="by">By Patitas / {value.blog_fech}</span>
                        <p className="parrafo">{value.blog_hty}</p>
                    </div>
                </div>)
        })}
    </main>)
}

export default PageBlog;