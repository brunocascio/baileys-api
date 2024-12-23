import type { EventsType } from "@/types/websocket";
import type { SocketServer } from "../server/websocket-server";
import env from "@/config/env";
import axios from "axios";
import { logger } from "./logger";

let socketServer: SocketServer | null = null;
export function initializeSocketEmitter(server: SocketServer) {
	socketServer = server;
}

export function emitEvent(
	event: EventsType,
	sessionId: string,
	data?: unknown,
	status: "success" | "error" = "success",
	message?: string,
) {
	if (env.ENABLE_WEBHOOK) {
		sendWebhook(event, sessionId, data, status, message);
	}

	if (!socketServer) {
		logger.error("Socket server not initialized. Call initializeSocketEmitter first.");
		return;
	}
	socketServer.emitEvent(event, sessionId, { status, message, data });
}

export async function sendWebhook(
	event: EventsType,
	sessionId: string,
	data?: unknown,
	status: "success" | "error" = "success",
	message?: string,
) {
	try {
		await axios.post(env.URL_WEBHOOK, {
			sessionId,
			event,
			data,
			status,
			message,
		});
	} catch (e) {
		logger.error("Error sending webhook", e);
	}
}
