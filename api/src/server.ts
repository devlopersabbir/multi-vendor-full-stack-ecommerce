import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import {
  authRoutes,
  userRoutes,
  categoryRoutes,
  productRoutes,
  cartRoutes,
  reviewRoutes,
  wishListRoutes,
} from "./routes";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import { IUser } from "./utils/interface/interface";
import { User } from "./entity/users/User";
import { SeedAdmin } from "./utils/_data";
import corsOption from "./configs/corsOptions";
import { hash } from "bcrypt";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
dotenv.config();
declare module "express-serve-static-core" {
  interface Request {
    user?: IUser;
  }
}

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(fileUpload());
app.use(cors(corsOption));
app.use(morgan("dev"));

// all routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/categorys", categoryRoutes);
app.use("/api/v1/carts", cartRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/wish-list", wishListRoutes);

const PORT = process.env.PORT || 4000;
AppDataSource.initialize()
  .then(async () => {
    console.log("DB connected!");
  })
  .then(() => {
    // seed admin
    const seed = true;
    if (seed) {
      app.get("/seed", async (_, res) => {
        const isAdmin = await User.findOneBy({
          email: SeedAdmin.email,
        });

        if (isAdmin)
          return res
            .status(400)
            .json({ message: "Admin already seeded!", isAdmin });

        try {
          const admin = User.create({
            name: SeedAdmin.name,
            email: SeedAdmin.email,
            password: await hash(SeedAdmin.password, 11),
            role: SeedAdmin.role,
          });
          await admin.save();
          res.status(200).json({ message: "Admin seeded!", admin });
        } catch (error) {
          res.status(500).json({ message: "Server not responsing!" });
        }
      });
    }
  })
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server is running at ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
