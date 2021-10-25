import { atom } from 'recoil';
import { WebPlaybackState } from 'utils/types/spotify';

//TODO: Create the global state for the music player.

export {};

export const trackPlayerAtom = atom<WebPlaybackState>({
	key: "trackPlayerAtom",
	default: {
		context: { metadata: null, uri: null },
		disallows: {},
		paused: true,
		position: 0,
		duration: 183450,
		shuffle: false,
		repeat_mode: 0,
		track_window: {
			current_track: {
				type: "track",
				album: { images: [], name: "", uri: "" },
				artists: [{ name: "Billie Holiday", uri: "" }],
				id: null,
				is_playable: true,
				media_type: "audio",
				name: "Crazy He Calls Me",
				uri: "",
			},
			next_tracks: [],
			previous_tracks: [],
		},
	},
});
