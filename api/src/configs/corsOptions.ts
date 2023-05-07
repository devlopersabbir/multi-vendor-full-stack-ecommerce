import { CorsOptions } from "cors";
import { allowedOrigin } from "./allowedOrigin";

const corsOption: CorsOptions = {
  origin(requestOrigin, cb) {
    if (!requestOrigin) return cb(null, true);
    if (allowedOrigin.indexOf(requestOrigin) !== -1) {
      console.log(true);
      cb(null, true);
    } else {
      cb(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
export default corsOption;
