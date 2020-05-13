import React from 'react'
import './Sign.scss'

import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

const Sign = () => (
	<div className='sign'>
		<SignIn />
		<SignUp />
	</div>
)

export default Sign
