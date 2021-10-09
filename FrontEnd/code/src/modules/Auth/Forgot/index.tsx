import cn from 'classnames';
import Icon from 'common/components/Icon';
import Radio from 'common/components/Radio';
import React from 'react';
import { formatEmailHide, formatPhoneNumber } from 'utils/functions/formatter';

import { Mode, Navigate } from '../util';
import styles from './Forgot.module.sass';

interface Props extends Navigate {}

//TODO: Add authentication functionalities
const Forgot: React.FC<Props> = ({ setType, setInfo, info }) => {
	return (
		<div className={styles.item}>
			<button
				className={cn(
					"button-circle-stroke",
					styles.button,
					styles.back
				)}
				onClick={() => setType(Mode.login)}
			>
				<Icon name="arrow-prev" size="16" />
			</button>
			<div className={cn("h3", styles.title)}>
				Let’s confirm it’s really you
			</div>
			<div className={styles.info}>
				Help us secure your account. Please complete the verifications
				below
			</div>
			<form className={styles.form}>
				<div className={styles.variants}>
					<Radio
						className={styles.radio}
						name="confirm"
						value={!info.confirmPhone}
						onChange={() =>
							setInfo((v) => ({ ...v, confirmPhone: false }))
						}
						content={`Get the code by email at ${formatEmailHide(
							info.email ?? ""
						)}`}
					/>
					{info.phone && (
						<Radio
							className={styles.radio}
							name="confirm"
							value={info.confirmPhone}
							onChange={() =>
								setInfo((v) => ({ ...v, confirmPhone: true }))
							}
							content={`Get the code by text message (SM) at ${formatPhoneNumber(
								info.phone
							)}`}
						/>
					)}
				</div>
				<button
					className={cn("button", styles.button)}
					onClick={() => setType(Mode.secure)}
				>
					Continue
				</button>
			</form>
		</div>
	);
};

export default Forgot;
