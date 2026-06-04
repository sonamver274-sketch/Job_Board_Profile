# JobFlow — Job Board Backend

REST API for the JobFlow job board application, built by **Sonam Verma**.

**Live API:** https://job-board-backend-zwyb.onrender.com  
**Frontend:** https://job-board-fr.onrender.com

---

## Features

- User registration and login with JWT authentication
- Role-based access control (jobSeeker / employer)
- Full CRUD for job listings
- Apply for jobs, view applications, update application status
- Secure password hashing with bcrypt

---

## Tech Stack

| Technology | Usage |
|---|---|
| Node.js + Express | Server framework |
| MongoDB + Mongoose | Database |
| JWT | Authentication |
| bcryptjs | Password hashing |
| cookie-parser | Cookie handling |

---

## API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | /api/v1/auth/register | Register new user |
| POST | /api/v1/auth/login | Login user |
| POST | /api/v1/auth/logout | Logout user |

### Jobs
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/v1/jobs | Get all jobs |
| GET | /api/v1/jobs/:id | Get job by ID |
| POST | /api/v1/jobs | Create job (employer only) |
| PUT | /api/v1/jobs/:id | Update job |
| DELETE | /api/v1/jobs/:id | Delete job |

### Applications
| Method | Endpoint | Description |
|---|---|---|
| POST | /api/v1/applicant/:id/apply | Apply for a job |
| GET | /api/v1/applicant/my | Get my applications |
| GET | /api/v1/applicant/:id/applications | Get applicants for a job |
| PUT | /api/v1/applicant/:id/status | Update application status |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/sonamver274-sketch/Job_Board_Profile.git
cd Job_Board_Profile

# Install dependencies
npm install

# Create .env file
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string
PORT=8000

# Start server
npm run dev
```

---

## Author

**Sonam Verma**
GitHub: [@sonamver274-sketch](https://github.com/sonamver274-sketch)
