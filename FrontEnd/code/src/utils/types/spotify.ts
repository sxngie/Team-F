import { Id } from './auth';

/*
	# Web Playback SDK Reference

	The Spotify Web Playback SDK is a public JavaScript SDK that allows you to 
	implement local streaming playback of Spotify content in their web 
	applications.

	Reference:
	`https://developer.spotify.com/documentation/web-playback-sdk/reference/#object-web-playback-state`
*/

/**
 * This is an object that is provided in the [ready](https://developer.spotify.com/documentation/web-playback-sdk/reference/#event-ready)
 * event as an argument. WebPlaybackPlayer objects contain information related
 * to the current player instance of the Web Playback SDK.
 */
export interface WebPlaybackPlayer {
	device_id: Id;
}

/**
 * This is an object that is provided every time [Spotify.Player#getCurrentState](https://developer.spotify.com/documentation/web-playback-sdk/reference/#api-spotify-player-getcurrentstate)
 * is called. It contains information on context, permissions, playback state,
 * the user’s session, and more.
 */
export interface WebPlaybackState {
	context: {
		/**
		 * The URI of the context
		 */
		uri: string | null;
		/**
		 * Additional metadata for the context
		 */
		metadata: object | null;
	};
	/**
	 *  A simplified set of restriction controls for The current track. By
	 *  default, these fields will either be set to false or undefined,
	 *  which indicates that the particular operation is allowed. When the
	 *  field is set to `true`, this means that the operation is not
	 *  permitted.
	 *
	 *  For example, `skipping_next`, `skipping_prev` and `seeking` will be set
	 *  to `true` when playing an ad track.
	 */
	disallows: {
		pausing: boolean;
		peeking_next: boolean;
		peeking_prev: boolean;
		resuming: boolean;
		seeking: boolean;
		skipping_next: boolean;
		skipping_prev: boolean;
	};
	/**
	 * Whether the current track is paused.
	 */
	paused: boolean;
	/**
	 * The position_ms of the current track.
	 */
	position: number;
	/**
	 * The repeat mode.
	 * - No repeat mode is `0`
	 * - repeat context is `1`
	 * - repeat track is `2`
	 */
	repeat_mode: 0 | 1 | 2;
	/**
	 * True if shuffled, false otherwise.
	 */
	shuffle: boolean;
	track_window: {
		/**
		 * The track currently on local playback
		 */
		current_track: WebPlaybackTrack;
		/**
		 * Previously played tracks. Number can vary.
		 */
		previous_tracks: WebPlaybackTrack[];
		/**
		 * Tracks queued next. Number can vary.
		 */
		next_tracks: WebPlaybackTrack[];
	};
}

/**
 * This is an object that is provided inside `track_window` from the
 * [WebPlaybackState Object](https://developer.spotify.com/documentation/web-playback-sdk/reference/#object-web-playback-state).
 * Track objects are [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
 * compatible objects containing metadata on Spotify content.
 */
export interface WebPlaybackTrack {
	/**
	 * Spotify URI
	 * Ex) "spotify:track:xxxx"
	 */
	uri: string;
	/**
	 * Spotify ID from URI
	 */
	id: Id | null;
	/**
	 * Content type: can be "track", "episode" or "ad"
	 */
	type: "track" | "episode" | "ad";
	/**
	 * Type of file: can be "audio" or "video"
	 */
	media_type: "audio" | "video";
	/**
	 * Name of content
	 */
	name: string;
	/**
	 * Flag indicating whether it can be played
	 */
	is_playable: true;
	album: {
		/**
		 * Spotify Album URI
		 * Ex) "spotify:album:xxxx"
		 */
		uri: string;
		name: string;
		/**
		 * Ex) "https://image/xxxx"
		 */
		images: { url: string }[];
	};
	artists: {
		/**
		 * Ex) "spotify:artist:xxxx"
		 */
		uri: string;
		name: string;
	}[];
}

/**
 * This is an object that is provided in all error handlers from the Web
 * Playback SDK. It is referred to as e and looks like this:
 */
export interface WebPlaybackError {
	/**
	 * "This will contain a message explaining the error."
	 */
	message: string;
}
