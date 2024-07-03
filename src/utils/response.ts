import { Context } from "hono";

export const statusTexts = {
    200: "OK",
    201: "Created",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    501: "Not Implemented",
}

class Response {
    success: boolean;
    status: keyof typeof statusTexts;
    message: string;
    data?: unknown | object | null;
    
    constructor(status: keyof typeof statusTexts, data: unknown | object) {
        this.success = status >= 200 && status < 300;
        this.status = status;
        this.message = statusTexts[status];
        this.data = data;
    }
}

export default function response(context: Context, status: keyof typeof statusTexts, data?: unknown | object) {
    context.status(status);
    return context.json(new Response(status, data));
}