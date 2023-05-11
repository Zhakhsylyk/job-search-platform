import React from 'react'
import Header from '../../header/Header'
import './styles/style.scss';
import menu from '../../../images/menu.svg';
import { CandidateCard } from '../../card/Card';
import { candidates } from '../../../constants/candidates';
import { Footer } from '../../footer/Footer';
import { Pagination } from '../../pagination/Pagination';
import RangeSlider from '../../slider/Slider';
import { Navigation } from '../../navigation/Navigation';

export const Candidates = () => {

    const CandidatesCatalog = () => {
        return (
            <div className='candidate__container'>
                <div className='candidate__content'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Showing  1-20 of 522 candidates </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <p>Sort by:</p>
                            <select>
                                <option>Newest</option>
                                <option>Oldest</option>
                                <option>Random</option>
                            </select>
                            <img src={menu} alt='menu' />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 75, marginTop: 16 }}>
                        {
                            candidates.map(item => {
                                return (
                                    <CandidateCard id={item.id} name={item.name} desc={item.desc} skills={item.skills} />
                                )
                            })
                        }
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 72, marginBottom: 110 }}>
                        <Pagination />
                    </div>
                </div>
                <div className='candidate__sidebar'>
                    <p>
                        Location
                    </p>
                    <i></i>
                    <input type='text' placeholder='Astana' style={{
                        border: '1px solid #DDDDDD', height: 48, borderRadius: 10, width: '100%'
                    }} />

                    <p>
                        Category</p>
                    <input type='text' placeholder='Backend' style={{
                        border: '1px solid #DDDDDD', height: 48, borderRadius: 10, width: '100%'
                    }} />
                    <p>
                        Experience</p>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex' }}>
                            <input type="checkbox" id="base" name="base" style={{ width: '10%' }} />
                            <label for="scales">0-2 years</label>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <input type="checkbox" id="medium" name="medium" style={{ width: '10%' }} />
                            <label for="medium">10-12 years</label>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <input type="checkbox" id="advanced" name="advanced" style={{ width: '10%' }} />
                            <label for="advanced">16-20 years</label>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <input type="checkbox" id="pro" name="pro" style={{ width: '10%' }} />
                            <label for="pro">20-25 years</label>
                        </div>
                    </div>
                    <p>Experience Level</p>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex' }}>
                            <input type="checkbox" id="expert" name="expert" style={{ width: '10%' }} />
                            <label for="expert">Expert</label>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <input type="checkbox" id="senior" name="senior" style={{ width: '10%' }} />
                            <label for="senior">Senior</label>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <input type="checkbox" id="junior" name="junior" style={{ width: '10%' }} />
                            <label for="junior">Junior</label>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <input type="checkbox" id="middle" name="middle" style={{ width: '10%' }} />
                            <label for="middle">Middle</label>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <input type="checkbox" id="internship" name="internship" style={{ width: '10%' }} />
                            <label for="internship">Internship</label>
                        </div>
                    </div>
                    <p>Salary range</p>
                    <RangeSlider />
                    <div style={{ display: 'flex', marginTop: 32 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <span className='range__title'>From</span>
                            <input type='text' placeholder='1600' style={{ border: '1px solid #DDDDDD', height: 33, borderRadius: 10, width: '60%' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <span className='range__title'>To</span>
                            <input type='text' placeholder='1600' style={{ border: '1px solid #DDDDDD', height: 33, borderRadius: 10, width: '60%' }} />
                        </div>
                    </div>
                    <div style={{ position: 'absolute', bottom: 16 }}>
                        <button>Apply Filter</button>
                        <button>Reset Filter</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <React.Fragment>
            <Header />
            <Navigation>There are 10.999 Candidates
                Here For you! </Navigation>
            <CandidatesCatalog />
            <Footer />
        </React.Fragment>
    )
}
