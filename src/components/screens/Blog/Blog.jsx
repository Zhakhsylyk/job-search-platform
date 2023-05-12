import React, { Fragment } from 'react'
import { articles } from '../../../constants/articles';
import { Footer } from '../../footer/Footer'
import Header from '../../header/Header'
import { Pagination } from '../../pagination/Pagination';
import { Box } from './box/Box';
import './styles/style.scss';
import searchIcon from '../../../images/search-icon.svg';
import popular from '../../../images/popular.png';
import closeIcon from '../../../images/close-icon.svg';

export const Blog = () => {
    const Hashtag = ({ children }) => {
        return (
            <div style={{ color: '#4943DA', border: '2px solid #4943DA', padding: '10px 20px', borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p style={{ fontSize: '1.125rem', margin: 0 }}>{children}</p></div>
        )
    }
    const BlogHeader = () => {
        return (
            <div className='blog__header'>
                <p>Relevant <span>News</span> And More For You</p>
                <div className='blog__header_keywords'>
                    <Hashtag>Recruitment</Hashtag>
                    <Hashtag>IT</Hashtag>
                    <Hashtag>Job Tips</Hashtag>
                </div>
            </div>
        )
    }
    const Main = () => {
        return (
            <div className='blog__container'>
                <div className='blog__content'>
                    <div className='blog__content_articles'>
                        {articles.map(item => {
                            return (
                                <Box data={item} />
                            )
                        })}
                    </div>
                    <Pagination />
                </div>
                <div className='blog__panel'>
                    <div className='blog__panel_search'>
                        <img src={searchIcon} alt="search" width={35} height={35} />
                        <input type="text" placeholder='Search your recipes...' />
                    </div>
                    <div className='blog__panel_post-popular'>
                        <p className='blog__panel_post-popular_title'>POPULAR POST</p>
                        <div className='blog__panel_post-popular_list'>
                            <div className='blog__panel_post-popular_list__item'><img src={popular} alt='index' />
                                <div><p className='blog__panel_post-popular_list__title'>Design Process</p>
                                    <p className='blog__panel_post-popular_list__short'>Our 15 favorite IT positions from August </p></div>
                            </div>
                            <div className='blog__panel_post-popular_list__item'><img src={popular} alt='index' />
                                <div><p className='blog__panel_post-popular_list__title'>Design Process</p>
                                    <p className='blog__panel_post-popular_list__short--selected'>Our 15 favorite IT positions from August </p></div>
                            </div>
                            <div className='blog__panel_post-popular_list__item'><img src={popular} alt='index' />
                                <div><p className='blog__panel_post-popular_list__title'>Design Process</p>
                                    <p className='blog__panel_post-popular_list__short'>Our 15 favorite IT positions from August </p></div>
                            </div>
                        </div>
                    </div>
                    <div className='blog__panel_post-recent'>
                        <p className='blog__panel_post-recent_title'>RECENT POST</p>
                        <div className='blog__panel_post-recent_list'>
                            <div className='blog__panel_post-recent_list__item'><p className='blog__panel_post-recent_list__title'>Design Process</p>
                                <p className='blog__panel_post-recent_list__short'>Our 15 favorite IT positions from August </p></div>
                            <div className='blog__panel_post-recent_list__item'><p className='blog__panel_post-recent_list__title'>Design Process</p>
                                <p className='blog__panel_post-recent_list__short--selected'>Our 15 favorite IT positions from August </p></div>
                            <div className='blog__panel_post-recent_list__item'><p className='blog__panel_post-recent_list__title'>Design Process</p>
                                <p className='blog__panel_post-recent_list__short'>Our 15 favorite IT positions from August </p></div>
                            <div className='blog__panel_post-recent_list__item'><p className='blog__panel_post-recent_list__title'>Design Process</p>
                                <p className='blog__panel_post-recent_list__short'>Our 15 favorite IT positions from August </p></div>
                        </div>
                    </div>
                    <div className='blog__panel_keywords'>
                        <BlogKeyword>Revenue</BlogKeyword>
                        <BlogKeyword>Shipment</BlogKeyword>
                        <BlogKeyword>Shipment</BlogKeyword>
                        <BlogKeyword>Shipment</BlogKeyword>
                        <BlogKeyword>Shipment</BlogKeyword>
                        <BlogKeyword>Shipment</BlogKeyword>
                        <BlogKeyword>Shipment</BlogKeyword>
                        <BlogKeyword>Sale</BlogKeyword>
                        <BlogKeyword>Sale</BlogKeyword>
                        <BlogKeyword>Sale</BlogKeyword>
                        <BlogKeyword>Sale</BlogKeyword>
                        <BlogKeyword>Sale</BlogKeyword>
                        <BlogKeyword>Sale</BlogKeyword>
                    </div>
                </div>
            </div>
        )
    }

    const BlogKeyword = ({ children }) => {
        return (
            <div className='blog__keyword'>
                {children}
                <img src={closeIcon} alt='close' />
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
