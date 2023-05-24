import React from 'react';
import searchIcon from '../../../../images/search-icon.svg';
import popular from '../../../../images/popular.png';
import closeIcon from '../../../../images/close-icon.svg';

export const SideBar = () => {
    const BlogKeyword = ({ children }) => {
        return (
            <div className='blog__keyword'>
                {children}
                <img src={closeIcon} alt='close' />
            </div>
        )
    }
    return (<div className='blog__panel'>
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
    </div>)
}