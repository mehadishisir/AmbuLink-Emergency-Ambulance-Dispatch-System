```markdown
# AmbuLink - Emergency Ambulance Dispatch System

A robust, scalable RESTful API backend for an Emergency Ambulance Dispatch platform. Patients can request ambulances, admins can manage hospitals and ambulances and assign drivers, and drivers can respond to emergencies and update request status.

## Live Links

- **Live API:** https://ambulink-nine.vercel.app
- **API Documentation:** https://documenter.getpostman.com/view/52607853/2sBYHQ2Nq7
- **Backend Repository:** https://github.com/mehadishisir/AmbuLink-Emergency-Ambulance-Dispatch-System

## Demo Credentials

| Role    | Email                  | Password     |
|---------|------------------------|--------------|
| Admin   | admin@example.com      | Admin@123    |
| Patient | patient@example.com    | Patient@123  |
| Driver  | driver@example.com     | Driver@123   |

> These are demo credentials created specifically for evaluation.

## Project Overview

AmbuLink is an emergency ambulance dispatch platform designed to connect patients with nearby hospitals and available ambulances in real time. It provides three distinct user roles with well-defined permissions and workflows:

- **Patient** — Create emergency requests, view own requests, make payments for completed services.
- **Admin** — Manage hospitals, ambulances, and drivers; assign drivers to emergency requests.
- **Driver** — View assigned emergency requests and update status.

The project follows a modular architecture (Routes → Controllers → Services → Prisma) for maintainability and scalability.

## Tech Stack

| Category          | Technology                    |
|-------------------|-------------------------------|
| Runtime           | Node.js                       |
| Language          | TypeScript                    |
| Framework         | Express.js                    |
| Database          | PostgreSQL                    |
| ORM               | Prisma                        |
| Authentication    | JWT (Access + Refresh Tokens) |
| Validation        | Zod                           |
| Payment           | Stripe                        |
| Email             | Nodemailer (OTP verification) |
| Deployment        | Vercel                        |
| API Testing       | Postman                       |

## Key Features

### Authentication & Authorization
- Email/Password registration with OTP email verification
- JWT-based access and refresh token authentication
- Strict role-based authorization (ADMIN, PATIENT, DRIVER)
- Password reset via OTP
- Cookie-based token storage

### Core Modules
- **Auth** — Registration, verification, login, forgot/reset password
- **Hospital** — Full CRUD for hospitals with bed availability tracking
- **Ambulance** — Full CRUD for ambulances with driver and hospital assignment
- **Emergency Request** — Patient creates request, admin assigns driver, driver updates status
- **Payment** — Stripe checkout session, payment verification, and status tracking

### Business Logic Highlights
- Role-restricted endpoints (e.g., only Admin can create hospitals, only Driver can update status)
- Emergency request lifecycle: PENDING → ASSIGNED → EN_ROUTE → ARRIVED → COMPLETED
- Payment only allowed after service completion
- Structured error handling with consistent JSON responses
- Input validation using Zod on all mutating endpoints

## API Response Format

All endpoints return a consistent JSON structure.

### Success Response
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Operation successful",
  "data": {}
}
```

### Error Response
```json
{
  "success": false,
  "statusCode": 400,
  "message": "Something went wrong",
  "error": {}
}
```

## API Endpoints Overview

### Auth
| Method | Endpoint | Access |
|--------|----------|--------|
| POST | /api/auth/register | Public |
| POST | /api/auth/verify-email | Public |
| POST | /api/auth/login | Public |
| GET | /api/auth/me | Authenticated |
| POST | /api/auth/forgot-password | Public |
| POST | /api/auth/reset-password | Public |
| POST | /api/auth/resend-otp | Public |

### Hospital
| Method | Endpoint | Access |
|--------|----------|--------|
| POST | /api/hospitals | Admin |
| GET | /api/hospitals | Public |
| GET | /api/hospitals/:id | Public |
| PATCH | /api/hospitals/:id | Admin |
| DELETE | /api/hospitals/:id | Admin |

### Ambulance
| Method | Endpoint | Access |
|--------|----------|--------|
| POST | /api/ambulances | Admin |
| GET | /api/ambulances | Public |
| GET | /api/ambulances/:id | Public |
| PATCH | /api/ambulances/:id | Admin |
| DELETE | /api/ambulances/:id | Admin |

### Emergency Request
| Method | Endpoint | Access |
|--------|----------|--------|
| POST | /api/emergency-requests | Patient |
| GET | /api/emergency-requests/my-requests | Patient |
| GET | /api/emergency-requests | Admin |
| GET | /api/emergency-requests/:id | Authenticated |
| PATCH | /api/emergency-requests/:id/assign | Admin |
| GET | /api/emergency-requests/assigned | Driver |
| PATCH | /api/emergency-requests/:id/status | Driver |

### Payment
| Method | Endpoint | Access |
|--------|----------|--------|
| POST | /api/payments/create-checkout-session | Patient |
| POST | /api/payments/verify-payment | Patient |
| GET | /api/payments/request/:emergencyRequestId | Patient |

## Project Structure

```
src/
├── app/
│   └── modules/
│       ├── Auth/
│       ├── Hospital/
│       ├── Ambulance/
│       ├── EmergencyRequest/
│       ├── Payment/
│       └── Driver/
├── config/
├── generated/
│   └── prisma/
├── lib/
│   └── prisma.ts
├── middleware/
│   ├── checkAuth.ts
│   ├── globalErrorHandler.ts
│   ├── notFound.ts
│   └── validateRequest.ts
├── templates/
├── utils/
│   ├── AppError.ts
│   ├── catchAsync.ts
│   ├── jwt.ts
│   └── sendResponse.ts
├── app.ts
└── server.ts
prisma/
├── schema.prisma
└── seed.ts
postman/
└── ambulink.postman_collection.json
```

## Local Setup

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/mehadishisir/AmbuLink-Emergency-Ambulance-Dispatch-System.git
cd AmbuLink-Emergency-Ambulance-Dispatch-System
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory
```env
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/ambulink
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=7d
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
FRONTEND_URL=http://localhost:3000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

4. Run Prisma migrations and generate client
```bash
npx prisma migrate dev
npx prisma generate
```

5. Seed the database
```bash
npm run seed
```

6. Start the development server
```bash
npm run dev
```

Server will run at `http://localhost:5000`

## Postman Collection

A complete Postman collection is included at `postman/ambulink.postman_collection.json`. It covers:

- All Auth endpoints
- Hospital CRUD
- Ambulance CRUD
- Emergency Request workflow (Patient → Admin → Driver)
- Payment flow with Stripe
- Negative test cases (401, 403, 404, Zod validation errors)

### How to Use

1. Open Postman
2. Click **Import** → select `postman/ambulink.postman_collection.json`
3. Set collection variables (`baseUrl`, `patientToken`, `adminToken`, `driverToken`) or run the login requests first
4. Run requests in the following order:
   - Auth (all logins)
   - Hospital (create)
   - Ambulance (create)
   - Emergency Request (create → assign → status update)
   - Payment (create session → verify → get)

## Payment Flow

1. Patient creates an emergency request
2. Admin assigns a driver
3. Driver updates the request to `COMPLETED`
4. Patient initiates `POST /payments/create-checkout-session`
5. Patient completes payment on Stripe checkout page (test card: `4242 4242 4242 4242`)
6. Frontend calls `POST /payments/verify-payment` with `sessionId`
7. Payment status is updated in the database

## Security Features

- Password hashing with bcrypt
- JWT-based authentication with access/refresh tokens
- Role-based access control (RBAC)
- Input validation with Zod on all mutating endpoints
- Environment variable protection via `.env`
- HTTP-only cookies for token storage
- CORS configuration for allowed origins

## Deployment

The API is deployed on Vercel. To deploy:

1. Push code to GitHub
2. Import the repository in Vercel
3. Add all environment variables from `.env` in Vercel project settings
4. Deploy

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run seed     # Seed database
```

## Author

**Mehadish Isir**
- GitHub: [@mehadishisir](https://github.com/mehadishisir)

## Acknowledgements

- Programming Hero — Apollo Level 2 Web Development (B7A6)
- PostgreSQL, Prisma, Stripe, and the open-source community

## License

This project is created for educational purposes as part of the Programming Hero Apollo Level 2 assignment.

---

**Demo Admin Credentials for Evaluation:**
- Email: `admin@example.com`
- Password: `Admin@123`
```
