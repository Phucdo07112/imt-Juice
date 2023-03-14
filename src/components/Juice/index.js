import {HiOutlineArrowRight} from 'react-icons/hi'
import JuiceItem from '../JuiceItem/JuiceItem'
import { data, projectsNav } from '../../data/data'
import './Juice.scss'
import { useEffect, useState } from 'react'

const Juice = () => {
  const [item, setItem] = useState({type: 'Best Sale'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if(item.type === 'Best Sale') {
      setProjects(data.Juice);
    } else {
      const newProjects = data.Juice.filter((project) => {
        return project.type.find((pro) => {
          return pro.toLowerCase() === item.type;
        })
      });
      setProjects(newProjects)
    }
  },[item])

  const handleClick = (e, index) => {
    setItem({type: e.target.textContent.toLowerCase()})
    
    setActive(index)
    console.log(index);
  }

  return (
    <div className='container'>
        <div className='juice'>
          <div className='juice-header'>
            <h2 className='juice-header-title'>All Items</h2>
            <div className='juice-icon'>
              <HiOutlineArrowRight />
            </div>
          </div>
          <div className='juice-filter'>
            {
              projectsNav.map((item, index) => {
                return <h4 onClick={(e) => handleClick(e, index)} className={`${active === index  ? 'active' : ''}`} key={index}>{item.type}</h4>
              })
            }
          </div>
          <div className='juice-box'>
            {
              projects.map((item) => (
                <JuiceItem data={item} key={item.id}/>
              ))
            }
            
          </div>
        </div>
      </div>
  )
}

export default Juice