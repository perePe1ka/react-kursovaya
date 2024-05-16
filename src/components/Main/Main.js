import React from 'react';
import '../Styles/Style.css';

function Main({ posts, onDelete, onArchive }) {
    const handleDelete = (index) => {
        onDelete(index);
    };

    const handleArchive = (index) => {
        onArchive(index);
    };

    return (
        <main>
            <h2>Записи</h2>
            <div id="posts-container">
                {posts.map((post, index) => (
                    <article key={index} className="post">
                        <h1>{post.title}</h1>
                        <p>Категория: <strong>{post.category}</strong></p>
                        <p>Автор: <strong>{post.author}</strong></p>
                        <p>Содержание: {post.content}</p>
                        <div className="buttons-container">
                            <button onClick={() => handleDelete(index)} className="delete-btn">Удалить</button>
                            <button onClick={() => handleArchive(index)} className="archive-btn">Архив</button>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}

export default Main;
