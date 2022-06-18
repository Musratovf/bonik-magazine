import React from 'react'
import "./header.scss"

const Head = () => {
  return (
		<>
			<section className='head'>
				<div className='container d_flex'>
					<div className='left row'>
						<i className='fa fa-phone'></i>
						<label>+998 97 223 21 48</label>
						<i className='fa fa_envelope'></i>
						<label>musratovf@gmail.com</label>
					</div>
					<div className='right row RText'>
						<label>Theme FAQ's</label>
						<label>Need</label>
						<span>💻󠁧󠁢󠁳󠁣</span>
                        <label>EN</label>
						<span>💻</span>
                        <label>USD</label>
					</div>
				</div>
			</section>
		</>
  );
}

export default Head