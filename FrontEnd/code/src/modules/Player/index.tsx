import cn from 'classnames';
import TrackInfo from 'common/components/TrackInfo';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { trackPlayerAtom } from 'store/music';

import Icon from '../../common/components/Icon';
import Play from '../../common/components/Play';
import TrackProgress from '../../common/components/TrackProgress';
import Volume from '../../common/components/Volume';
import Repeat from './components/Repeat';
import styles from './Player.module.sass';
import { useController } from './util';

interface Props {}

const Player: React.FC<Props> = () => {
	const [player, setPlayer] = useRecoilState(trackPlayerAtom);
	const controller = useController(
		player.position,
		player.duration,
		player.paused
	);

	useEffect(() => {
		if (controller.position >= player.duration)
			setPlayer((s) => ({ ...s, paused: true }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [controller.position]);

	useEffect(() => {
		controller.setPosition(player.position);
		controller.setDuration(player.duration);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [player.position, player.duration]);

	const onPressed = (press: boolean) => {
		!press && !player.paused ? controller.start() : controller.stop();

		if (!press)
			setPlayer((s) => ({
				...s,
				position: controller.position,
			}));
	};

	return (
		<div className={styles.player}>
			<div className={styles.controls}>
				<div className={styles.btns}>
					<button className={styles.btn}>
						<Icon name="stop" className={styles.icon} />
					</button>
					<button className={styles.btn}>
						<Icon
							name="heart"
							className={cn(styles.icon, {
								[styles.liked]: false,
							})}
						/>
					</button>
					<button className={styles.btn}>
						<Icon name="more" className={styles.icon} />
					</button>
				</div>
				<div className={styles.play}>
					<Repeat mode={player.repeat_mode} />
					<Play
						isPaused={player.paused}
						setPaused={(p) => {
							if (controller.position < player.duration) {
								setPlayer((s) => ({ ...s, paused: p }));
								p ? controller.stop() : controller.start();
							}
						}}
						className={cn(styles.playBtn, {
							[styles.playing]: !player.paused,
						})}
					/>
					<button
						className={styles.control}
						onClick={() =>
							setPlayer((s) => ({ ...s, shuffle: !s.shuffle }))
						}
					>
						<Icon
							name="shuffle"
							className={cn(styles.icon, {
								[styles.active]: player.shuffle,
							})}
						/>
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
				duration={player.duration}
				position={controller.position}
				setPosition={(pos) => controller.setPosition(pos)}
				isPressed={onPressed}
			/>
		</div>
	);
};

export default Player;
