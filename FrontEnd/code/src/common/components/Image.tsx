import React from 'react';
import useDarkMode from 'use-dark-mode';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	src?: string;
	srcDark?: string;
	srcSet?: string;
	srcSetDark?: string;
	alt?: string;
}

const Image: React.FC<Props> = (props) => {
	const darkMode = useDarkMode(false);

	const { className, src, srcDark, srcSet, srcSetDark, alt } = props;

	return (
		<img
			{...props}
			className={className}
			srcSet={darkMode.value ? srcSetDark : srcSet}
			src={darkMode.value ? srcDark : src}
			alt={alt}
		/>
	);
};

export default Image;
