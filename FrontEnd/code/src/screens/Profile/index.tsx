import ProfileCard from 'common/components/ProfileCard';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

interface Props {}

const Profile: React.FC<Props> = () => {
	const { user, location } = useParams<any>();
	const history = useHistory();

	return (
		<main>
			<p>Current Path: {history.location.pathname}</p>
			<h1>{user}'s Profile</h1>
			<button
				onClick={() => history.push(`/user/${user}/followers`)}
				className="button"
			>
				To /user/{user}/followers
			</button>

			{location === "followers" && (
				<ProfileCard username={user} visible />
			)}
		</main>
	);
};

export default Profile;
