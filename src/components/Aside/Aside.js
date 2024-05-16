import React from 'react';
import '../Styles/Style.css';

function Aside({ formData, handleInputChange, handleSubmit, archivedPosts }) {
    return (
        <aside>
            <h2>Создать запись</h2>
            <form onSubmit={handleSubmit}>
                <ol className="spisok">
                    <li>Автор</li>
                    <li>
                        <input
                            type="text"
                            id="author"
                            className="author-category-input"
                            placeholder="Введите имя"
                            value={formData.author}
                            onChange={handleInputChange}
                        />
                    </li>
                    <li>Заголовок</li>
                    <li>
                        <input
                            type="text"
                            id="title"
                            className="zagolovok-input"
                            placeholder="Напишите заголовок"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </li>
                    <li>Категория</li>
                    <li>
                        <input
                            type="text"
                            id="category"
                            className="author-category-input"
                            placeholder="Введите категорию"
                            value={formData.category}
                            onChange={handleInputChange}
                        />
                    </li>
                    <li>Содержание</li>
                    <li>
                        <input
                            type="text"
                            id="content"
                            className="soderzhaniye-input"
                            placeholder="Напишите содержание"
                            value={formData.content}
                            onChange={handleInputChange}
                        />
                    </li>
                    <li>
                        <button type="submit" id="create-button" className="create-button">
                            Создать
                        </button>
                    </li>
                </ol>
            </form>
            <h2>Архив</h2>
            <ol className="archive-ol" id="archive-list">
                {archivedPosts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </ol>
        </aside>
    );
}

export default Aside;
