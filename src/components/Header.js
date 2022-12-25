import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="container text-center" style={{margin: '3rem auto'}}>
          <h1 style={{fontSize : '4rem', color : '#0609C6'}}>ZerO&deg; Musc💪es Zone</h1>
          <p style={{color : '#040568', fontSize: "1.2rem", fontFamily: 'serif', fontWeight: '500', margin: "1.5rem auto"}}>Best gym in city with all facilities, latest equipments, Crossfit, Zumba, Weight training, Cardio & Personal training.</p>
          <a type='button' href='tel: 09386511681' className='btn btn-primary' style={{width: "10rem", padding: '2rem auto'}}>Call Me 9386511681</a>
        </div>
      </div>
    </div>
  )
}

export default Header