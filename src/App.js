import React, { useState } from 'react';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Aside from './components/Aside/Aside.js';
import Footer from './components/Footer/Footer.js';

function App() {
    const [formData, setFormData] = useState({
        author: '',
        title: '',
        category: '',
        content: ''
    });

    const [posts, setPosts] = useState([]);
    const [archivedPosts, setArchivedPosts] = useState([]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { author, title, category, content } = formData;
        if (author && title && category && content) {
            const newPost = {
                author,
                title,
                category,
                content
            };
            setPosts([...posts, newPost]);
            setFormData({
                author: '',
                title: '',
                category: '',
                content: ''
            });
        } else {
            alert("Please fill out all fields.");
        }
    };

    const handleDelete = (index) => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);
    };

    const handleArchive = (index) => {
        const postToArchive = posts[index];
        const updatedPosts = posts.filter((post, i) => i !== index);
        setPosts(updatedPosts);
        setArchivedPosts([...archivedPosts, postToArchive]);
    };

    return (
        <div>
            <Header />
            <Main
                posts={posts}
                onDelete={handleDelete}
                onArchive={handleArchive}
            />
            <Aside
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                archivedPosts={archivedPosts}
            />
            <Footer />
        </div>
    );
}

export default App;
