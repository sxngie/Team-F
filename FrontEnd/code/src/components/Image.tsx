import React from 'react';
import useDarkMode from 'use-dark-mode';

interface Props {
	className?: string;
	src?: string;
	srcDark?: string;
	srcSet?: string;
	srcSetDark?: string;
	alt?: string;
}

const Image: React.FC<Props> = ({
	className,
	src,
	srcDark,
	srcSet,
	srcSetDark,
	alt,
}) => {
	const darkMode = useDarkMode(false);

	return (
		<img
			className={className}
			srcSet={darkMode.value ? srcSetDark : srcSet}
			src={darkMode.value ? srcDark : src}
			alt={alt}
		/>
	);
};

export default Image;
