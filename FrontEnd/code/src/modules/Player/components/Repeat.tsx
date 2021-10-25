import cn from 'classnames';
import Icon from 'common/components/Icon';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { trackPlayerAtom } from 'store/music';
import { WebPlaybackState } from 'utils/types/spotify';

import styles from '../Player.module.sass';

interface Props {
	mode?: WebPlaybackState["repeat_mode"];
}

const Repeat: React.FC<Props> = ({ mode = 0 }) => {
	const setPlayer = useSetRecoilState(trackPlayerAtom);
	return (
		<button
			className={styles.control}
			onClick={() =>
				setPlayer((s) => ({
					...s,
					repeat_mode: mode >= 2 ? 0 : mode + 1,
				}))
			}
		>
			<Icon
				name={mode > 1 ? "repeate-once" : "repeat"}
				className={cn(styles.icon, { [styles.active]: mode > 0 })}
			/>
		</button>
	);
};

export default Repeat;
