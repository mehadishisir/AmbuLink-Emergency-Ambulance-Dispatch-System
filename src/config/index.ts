import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
	node_env: process.env.NODE_ENV,
	port: process.env.PORT,
	database_url: process.env.DATABASE_URL,

	admin_name: process.env.ADMIN_NAME!,
	admin_email: process.env.ADMIN_EMAIL!,
	admin_password: process.env.ADMIN_PASSWORD!,

	jwt_access_secret: process.env.JWT_ACCESS_SECRET!,
	jwt_refresh_secret: process.env.JWT_REFRESH_SECRET!,
	jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN!,
	jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN!,

	bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,

	backend_url: process.env.BACKEND_URL,
	frontend_url: process.env.FRONTEND_URL,
};