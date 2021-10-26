import cn from 'classnames';
import React from 'react';

import styles from './ProfileCard.module.sass';
import useGetUser, { getMutualStr } from './util';

// Component properties
interface Props {
    username:string;
}


const ProfileCard: React.FC<Props> = ({username}) => {

    const data = useGetUser(username)

    return (    
        <div className={styles.container}>
            <div className={styles.top}>
                <img className={styles.banner}  src={data.banner}/>
                <button className={cn(styles.button,{[styles.followed]:data.isAdded})}>
                    {data.isAdded ? 'Following' :'Follow'}
                </button>
                <img className={styles.avatar} src={data.avatar}/>
             
            </div>
            <div className={styles.bottom}> 
                <p className={styles.name}>{data.name}</p>
                <p className={styles.username}>{`@${username}`}</p>
                <p className={styles.description}>{data.description}</p>
                
                <span className={styles.items}>
                    <p id={styles.numbers}>{data.following}</p>
                    <p className={styles.text}>Following</p>
                    <p id={styles.numbers}>{data.followers}</p>
                    <p className={styles.text}> Followers</p>
                </span>
                <p className={styles.username}>{getMutualStr(data.mutuals)}</p> 
            </div>
            
        </div>
                    
    );
};

export default ProfileCard;