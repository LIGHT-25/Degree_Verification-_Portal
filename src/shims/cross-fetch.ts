const crossFetch = globalThis.fetch.bind(globalThis);
export default crossFetch;
export const fetch = globalThis.fetch.bind(globalThis);
export const Headers = globalThis.Headers;
export const Request = globalThis.Request;
export const Response = globalThis.Response;
