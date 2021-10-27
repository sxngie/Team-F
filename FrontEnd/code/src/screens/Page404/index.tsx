import React from 'react';
import { Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authAtom } from 'store/auth';

interface Props {}

const Page404: React.FC<Props> = () => {
	const auth = useRecoilValue(authAtom);
	return <Redirect to={auth.isAuth ? "/home" : "/"} />;
};

export default Page404;
