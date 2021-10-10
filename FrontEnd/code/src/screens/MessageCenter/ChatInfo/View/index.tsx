import cn from 'classnames';
import Icon from 'common/components/Icon';
import React from 'react';

import { BaseView, ViewType } from './util';
import styles from './View.module.sass';

interface Props extends BaseView {
	className?: string;
}

const View: React.FC<Props> = ({ view, setView, className }) => {
	return (
		<div className={cn(className, styles.container)}>
			<button
				className="button-circle-stroke"
				onClick={() => setView({ ...view, isOpen: false })}
			>
				<Icon name="arrow-prev" size="24" />
			</button>
			<Content view={view.type} />
		</div>
	);
};

export default View;

interface ContentProps {
	view: ViewType;
}

const Content: React.FC<ContentProps> = ({ view }) => {
	switch (view) {
		case ViewType.media:
			return <>Media</>;

		case ViewType.files:
			return <>Files</>;

		case ViewType.links:
			return <>Links</>;

		default:
			return <>Starred</>;
	}
};
