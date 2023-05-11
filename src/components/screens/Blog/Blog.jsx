import React, { Fragment } from 'react'
import { Footer } from '../../footer/Footer'
import Header from '../../header/Header'
import './styles/style.scss';

export const Blog = () => {
    const Hashtag = ({ children }) => {
        return (
            <div style={{ color: '#4943DA', border: '1px solid #4943DA', padding: 10, borderRadius: 20, width: 'min-content', height: 'max-content' }}><p style={{ fontSize: '1.125rem' }}>{children}</p></div>
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

    return (
        <Fragment>
            <Header />
            <BlogHeader />
        </Fragment>
    )
}
