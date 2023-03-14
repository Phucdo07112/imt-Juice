import './Fluit.scss'
import { data } from '../../data/data'

const Fluit = () => {
  return (
    <div className='container'>
        <div className='category'>
          {
            data.Fluit.map((item) => (
              <div className='fluit' key={item.id}>
                <div className={`fluit-img `} style={{backgroundColor: `${item.color}`}}>
                  <img src={item.image} alt='fluit'/>
                </div>
                <h4 className='fluit-name'>
                  {item.name}
                </h4>
              </div>
            ))
          }
          
        </div>
      </div>
  )
}

export default Fluit