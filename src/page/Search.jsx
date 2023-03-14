import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/data';
import JuiceItem from '../components/JuiceItem/JuiceItem';
const Search = () => {
    const { slug } = useParams();
    const [juices, setJuices] = useState([])
    const Juice = data.Juice;

    useEffect(() => {
      const SearchJuice = (Juice, slug) => {
        return Juice.filter((item) => {
          return item.name.toLowerCase().includes(slug.toLowerCase())
        })
      }

      setJuices(SearchJuice(Juice, slug))

    }, [slug,Juice])
  return (
    <section>
        <div className='container section'>
            { juices.length  ? 
            (
              <div className='juice-box juice-search'>
                 {juices.map((item) => (
                  <JuiceItem  data={item} key={item.id}/>
                  ))
                }
              </div>
            ) : (
              <h2 className='Empty'>Your search failed !</h2>
            )}
        </div>
    </section>
  )
}

export default Search