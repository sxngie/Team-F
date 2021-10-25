import cn from 'classnames';
import TrackInfo from 'common/components/TrackInfo';
import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { trackPlayerAtom } from 'store/music';
import { WebPlaybackState } from 'utils/types/spotify';

import Icon from '../../common/components/Icon';
import Play from '../../common/components/Play';
import TrackProgress from '../../common/components/TrackProgress';
import Volume from '../../common/components/Volume';
import styles from './Player.module.sass';

interface Props {}

const Player: React.FC<Props> = () => {
	const [player, setPlayer] = useRecoilState(trackPlayerAtom);
	return (
		<div className={styles.player}>
			<div className={styles.controls}>
				<div className={styles.btns}>
					<button className={styles.btn}>
						<Icon name="stop" className={styles.icon} />
					</button>
					<button className={styles.btn}>
						<Icon name="heart" className={styles.icon} />
					</button>
					<button className={styles.btn}>
						<Icon name="more" className={styles.icon} />
					</button>
				</div>
				<div className={styles.play}>
					<Repeat mode={player.repeat_mode} />
					<Play
						isPaused={player.paused}
						setPaused={(p) =>
							setPlayer((s) => ({ ...s, paused: p }))
						}
						className={cn(styles.playBtn, {
							[styles.playing]: !player.paused,
						})}
					/>
					<button className={styles.control}>
						<Icon name="shuffle" className={styles.icon} />
					</button>
				</div>
				<Volume className={styles.volume} />
			</div>
			<TrackInfo
				className={styles.info}
				title={player.track_window.current_track?.name}
				author={player.track_window.current_track?.artists
					.map(({ name }) => name)
					.join(", ")}
			/>
			<TrackProgress
				className={styles.progress}
				showRemaining
				duration={player.duration}
				position={player.position}
				setPosition={(pos) =>
					setPlayer((s) => ({ ...s, position: pos }))
				}
			/>
		</div>
	);
};

export default Player;

interface RepeatProps {
	mode?: WebPlaybackState["repeat_mode"];
}

const Repeat: React.FC<RepeatProps> = ({ mode = 0 }) => {
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
