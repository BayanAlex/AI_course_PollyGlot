export interface Payload {
	message: string;
	language: string;
}

export type OpenedAIResponse = {
	translation: string;
} | {
	error: string;
}