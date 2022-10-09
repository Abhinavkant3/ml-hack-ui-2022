import { Link } from 'react-router-dom';

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            Please find below the services offered by CREATIVE-ITY
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <Link to="/dynamic-creatives">
                    {' '}
                    <i className={d.icon}></i>
                    <div className='service-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </Link>  
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
