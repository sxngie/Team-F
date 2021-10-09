export interface BaseView {
	view: Control;
	setView: React.Dispatch<React.SetStateAction<Control>>;
}

export enum ViewType {
	starred,
	media,
	files,
	links,
}

export interface Control {
	isOpen: boolean;
	type: ViewType;
}
