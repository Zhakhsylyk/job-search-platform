import React, { Fragment } from 'react'
import { Footer } from '../../footer/Footer'
import Header from '../../header/Header'
import { Navigation } from '../../navigation/Navigation';
import menu from '../../../images/menu.svg';
import { candidates } from '../../../constants/candidates';
import { CandidateCard, VacancyCard } from '../../card/Card';
import { Pagination } from '../../pagination/Pagination';
import RangeSlider from '../../slider/Slider';
import { vacancies } from '../../../constants/vacancies';
import './style.scss';


export const Jobs = () => {
  const JobsCatalog = () => {
    return (
      <div className='job__container'>
        <div className='job__content'>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: 16 }}>
            {
              vacancies.map(item => {
                return (
                  <VacancyCard data={item} />
                )
              })
            }
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 72, marginBottom: 110 }}>
            <Pagination />
          </div>
        </div>
        <div className='job__sidebar'>
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
    <Fragment>
      <Header />
      <Navigation>There are 1.999 Jobs
        Here For you! </Navigation>
      <JobsCatalog />
      <Footer />
    </Fragment>
  )
}
