import cn from 'classnames';
import Icon from 'common/components/Icon';
import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { formatEmailHide, formatPhoneNumber } from 'utils/functions/formatter';

import { Mode, Navigate } from '../util';
import styles from './Secure.module.sass';

interface Props extends Navigate {}

const securitySize = 6;

//TODO: Add authentication functionalities
const Secure: React.FC<Props> = ({ setType, info, setInfo }) => {
	const ref = useRef<HTMLInputElement[]>([]);
	const submitRef = useRef<HTMLButtonElement>(null);
	const [code, setCode] = useState<string[]>(
		Array.from({ length: securitySize }, () => "")
	);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const getCode = () => code.join("").trim(); // Will be used to get the code.

	const handleChange = (i: number, e: ChangeEvent<HTMLInputElement>) => {
		const str = e.target.value;

		if (str === " ") return;

		if (str) {
			setCode((c) => {
				const list = [...c];
				list[i] = str;
				return list;
			});
			if (i !== ref.current.length - 1 && str) {
				ref.current[i + 1].focus();
				ref.current[i + 1].select();
			} else if (i === ref.current.length - 1 && str) {
				submitRef.current?.focus();
			}
		} else {
			setCode((c) => {
				const list = [...c];
				list[i] = "";
				return list;
			});
		}
	};

	const handleKeyDown = (i: number, e: KeyboardEvent<HTMLInputElement>) => {
		if (
			i !== ref.current.length - 1 &&
			e.key === "Spacebar" &&
			e.currentTarget.value
		) {
			e.preventDefault();
			ref.current[i + 1].focus();
			ref.current[i + 1].select();
		} else if (i !== 0 && e.key === "Backspace" && !e.currentTarget.value) {
			e.preventDefault();
			ref.current[i - 1].focus();
			ref.current[i - 1].select();
		}
	};

	return (
		<div className={styles.item}>
			<button
				className={cn(
					"button-circle-stroke",
					styles.button,
					styles.back
				)}
				onClick={() => setType(Mode.forgot)}
			>
				<Icon name="arrow-prev" size="16" />
			</button>
			<div className={cn("h3", styles.title)}>
				Enter your security code
			</div>
			<div className={styles.info}>
				{`We ${info.confirmPhone ? "texted" : "emailed"} your code to ${
					info.confirmPhone
						? formatPhoneNumber(info.phone ?? "")
						: formatEmailHide(info.email ?? "")
				}`}
			</div>
			<form className={styles.form}>
				<div className={styles.code}>
					{Array.from({ length: securitySize }, (_, i) => (
						<div className={styles.number} key={i}>
							<input
								required
								autoFocus={i === 0}
								type="tel"
								value={code[i]}
								maxLength={1}
								ref={(r) => (r ? (ref.current[i] = r) : null)}
								onChange={(e) => handleChange(i, e)}
								onKeyDown={(e) => handleKeyDown(i, e)}
							/>
						</div>
					))}
				</div>
				<button ref={submitRef} className={cn("button", styles.button)}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Secure;
