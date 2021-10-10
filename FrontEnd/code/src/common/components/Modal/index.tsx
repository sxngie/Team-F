// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import cn from 'classnames';
import React, { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { animated, config, useTransition } from 'react-spring';

import Icon from '../Icon';
import styles from './Modal.module.sass';

interface Props {
	outerClassName?: string;
	visible?: boolean;
	onClose: () => void;
}

/**
 * Creates a modal with a centered panel.
 */
const Modal: React.FC<Props> = ({
	outerClassName,
	visible,
	onClose,
	children,
}) => {
	const scrollRef = useRef<any>();
	const transitions = useTransition(visible, {
		from: { opacity: 0, transform: "scale(0.8)" },
		enter: { opacity: 1, transform: "scale(1)" },
		leave: { opacity: 0, transform: "scale(0.8)" },
		config: {
			...config.gentle,
			duration: 200,
		},
	});

	const escFunction = useCallback(
		(e) => {
			if (e.keyCode === 27) {
				onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		document.addEventListener("keydown", escFunction, false);
		return () => {
			document.removeEventListener("keydown", escFunction, false);
		};
	}, [escFunction]);

	/*
	Waiting on merge of https://github.com/willmcpo/body-scroll-lock/pull/229
	To enable again
	
	useEffect(() => {
		if (scrollRef) {
			visible
				? disableBodyScroll(scrollRef as any)
				: enableBodyScroll(scrollRef as any);
		}
	}, [visible]);
	*/

	return createPortal(
		transitions(
			(style, item) =>
				item && (
					<animated.div
						className={styles.modal}
						ref={scrollRef}
						style={{ opacity: style.opacity }}
					>
						<animated.div
							className={cn(styles.outer, outerClassName)}
							style={style}
						>
							<OutsideClickHandler onOutsideClick={onClose}>
								{children}
								<button
									className={styles.close}
									onClick={onClose}
								>
									<Icon name="close" size="24" />
								</button>
								<span className={styles.notch}></span>
							</OutsideClickHandler>
						</animated.div>
					</animated.div>
				)
		),
		document.body
	);
};

/**
 * Displays content in the center panel.
 */
const AnimationWrapper: React.FC<Props> = (props) => {
	return <Modal {...props} />;
};

export default AnimationWrapper;
