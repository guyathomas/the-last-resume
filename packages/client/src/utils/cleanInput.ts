import sanitize, { IOptions } from "sanitize-html";

const sanitizeOptions: IOptions = {
  allowedTags: ["li", "ol", "ul", "i", "b", "a", "code"],
  allowedAttributes: {
    a: ["href"],
  },
  allowedIframeHostnames: [],
};

const cleanInput = (input: string) => sanitize(input, sanitizeOptions);
export default cleanInput