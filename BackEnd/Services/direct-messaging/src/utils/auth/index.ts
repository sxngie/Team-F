import { Authorization, Token } from 'api/utils/types';
import express from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const APP_SECRET = "SuperSecretPassword"; // This will be an ENV in the future.

export const getTokenPayload = (token: Token) => jwt.verify(token, APP_SECRET);

export const getUserId = (req: express.Request, authToken?: Authorization) => {
	if (req) {
		const authHeader = req.headers.authorization;
		if (authHeader) {
			const token = authHeader.replace("Bearer ", "") as Token;
			if (!token) {
				throw new Error("No token found");
			}
			const { userId } = getTokenPayload(token) as JwtPayload;
			return userId;
		}
	} else if (authToken) {
		const { userId } = getTokenPayload(authToken) as JwtPayload;
		return userId;
	}

	throw new Error("Not authenticated");
};
