import { auth } from "@/auth";
import { cache } from "react";

// Deduplicating auth requests to be reused in certain components(navbar, setting page, admin page) withous recalling auth
// Note we dont use it in our server action, as auth is not called there on page load but when a button is clicked.
export default cache(auth);