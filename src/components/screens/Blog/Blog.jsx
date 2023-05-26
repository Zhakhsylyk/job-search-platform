import React, { Fragment } from 'react'
import { articles } from '../../../constants/articles';
import { Footer } from '../../footer/Footer'
import Header from '../../header/Header'
import { Pagination } from '../../pagination/Pagination';
import { Box } from './box/Box';
import './styles/style.scss';
import { SideBar } from './panel/SideBar';
import { useTranslation } from 'react-i18next';

export const Blog = () => {
    const { t } = useTranslation();
    const Hashtag = ({ children }) => {
        return (
            <div style={{ color: '#4943DA', border: '2px solid #4943DA', padding: '10px 20px', borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p style={{ fontSize: '1.125rem', margin: 0 }}>{children}</p></div>
        )
    }
    const BlogHeader = () => {
        return (
            <div className='blog__header'>
                <p>{t('blog.title')} <span>{t('blog.primary')}</span> {t('blog.subtitle')}</p>
                <div className='blog__header_keywords'>
                    <Hashtag>Recruitment</Hashtag>
                    <Hashtag>IT</Hashtag>
                    <Hashtag>Job Tips</Hashtag>
                </div>
            </div>
        )
    }


    const Main = () => {
        const totalPages = articles.length;
        console.log(articles.length);
        let page = 1;
        const articlesPage = articles.slice(0, 3);
        return (
            <div className='blog__container'>
                <div className='blog__content'>
                    <div className='blog__content_articles'>
                        {articlesPage.map(item => {
                            return (
                                <Box data={item} />
                            )
                        })}
                    </div>
                    <Pagination totalPages={totalPages} page={page} />
                </div>
                <SideBar />
            </div>
        )
    }

    return (
        <Fragment>
            <Header />
            <BlogHeader />
            <Main />
            <Footer />
        </Fragment>
    )
}
