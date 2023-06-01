import React from 'react';
import searchIcon from '../../../../images/search-icon.svg';
import popular from '../../../../images/popular.png';
import closeIcon from '../../../../images/close-icon.svg';
import { useTranslation } from 'react-i18next';
import { articles } from '../../../../constants/articles';
import { Link } from 'react-router-dom';


export const SideBar = () => {
    const { t } = useTranslation();
    const BlogKeyword = ({ children }) => {
        return (
            <div className='blog__keyword'>
                {children}
                <img src={closeIcon} alt='close' />
            </div>
        )
    }
    const newArticles = articles;
    const topArticles = newArticles.sort((a, b) => b.likes - a.likes).slice(0, 3);

    return (<div className='blog__panel'>
        <div className='blog__panel_search'>
            <img src={searchIcon} alt="search" width={35} height={35} />
            <input type="text" placeholder={t('blog.search')} />
        </div>
        <div className='blog__panel_post-popular'>
            <p className='blog__panel_post-popular_title'>{t('blog.popular')}</p>
            <div className='blog__panel_post-popular_list'>
                {
                    topArticles.map(article => {
                        return (<Link to={`/articles/${article.id}`}><div className='blog__panel_post-popular_list__item'><img src={article.image} alt='index' width={90} height={70} style={{ borderRadius: 10 }} />
                            <div><p className='blog__panel_post-popular_list__title'>{article.category}</p>
                                <p className='blog__panel_post-popular_list__short'>{article.title}</p></div>
                        </div></Link>
                        )
                    })
                }
            </div>
        </div>

        <div className='blog__panel_keywords'>
            <BlogKeyword>Recruitment</BlogKeyword>
            <BlogKeyword>IT</BlogKeyword>
            <BlogKeyword>Job Tips</BlogKeyword>
        </div>
    </div >)
}

// <div className='blog__panel_post-recent'>
// <p className='blog__panel_post-recent_title'>{t('blog.recent')}</p>
// <div className='blog__panel_post-recent_list'>
//     <div className='blog__panel_post-recent_list__item'><p className='blog__panel_post-recent_list__title'>Design Process</p>
//         <p className='blog__panel_post-recent_list__short'>Our 15 favorite IT positions from August </p></div>
//     <div className='blog__panel_post-recent_list__item'><p className='blog__panel_post-recent_list__title'>Design Process</p>
//         <p className='blog__panel_post-recent_list__short'>Our 15 favorite IT positions from August </p></div>
//     <div className='blog__panel_post-recent_list__item'><p className='blog__panel_post-recent_list__title'>Design Process</p>
//         <p className='blog__panel_post-recent_list__short'>Our 15 favorite IT positions from August </p></div>
//     <div className='blog__panel_post-recent_list__item'><p className='blog__panel_post-recent_list__title'>Design Process</p>
//         <p className='blog__panel_post-recent_list__short'>Our 15 favorite IT positions from August </p></div>
// </div>
// </div>