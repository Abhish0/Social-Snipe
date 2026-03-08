# 🐦 Social Snipe — Full Stack Social Media Platform

A full-featured social media web application inspired by Facebook, built with the MERN stack. Users can create profiles, post updates, follow others, and interact in real time.

🌐 **Live Demo:** [social-snipe.vercel.app](https://social-snipe.vercel.app)  
📦 **Backend API:** [social-snipe.onrender.com](https://social-snipe.onrender.com)

---

## 🚀 Features

- 🔐 **Authentication** — Register, login and logout with JWT-based auth
- 👤 **User Profiles** — View and update your profile information
- 📝 **Posts** — Create, view and delete posts
- ❤️ **Likes** — Like and unlike posts
- 👥 **Follow System** — Follow and unfollow other users
- 📰 **Timeline Feed** — See posts from people you follow
- 🖼️ **Image Uploads** — Share images with your posts

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React.js | UI framework |
| Context API | State management |
| Axios | API calls |
| CSS Modules | Styling |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | Web framework |
| MongoDB + Mongoose | Database |
| JWT | Authentication |
| Bcrypt | Password hashing |

### Deployment
| Service | Purpose |
|---|---|
| Vercel | Frontend hosting |
| Render | Backend hosting |
| MongoDB Atlas | Cloud database |

---

## 📁 Project Structure

```
Social_Snipe/
├── api/                  # Backend (Node.js + Express)
│   ├── models/           # MongoDB schemas (User, Post)
│   ├── routes/           # API routes (auth, users, posts)
│   ├── index.js          # Server entry point
│   └── .env              # Environment variables
│
└── client/               # Frontend (React.js)
    ├── public/           # Static assets
    └── src/
        ├── components/   # Reusable UI components
        ├── context/      # Auth & global state
        ├── pages/        # Login, Home, Profile pages
        └── apiCalls/     # Axios API functions
```

---

## ⚙️ Running Locally

### Prerequisites
- Node.js v16+
- MongoDB (local) or MongoDB Atlas account

### 1. Clone the repo
```bash
git clone https://github.com/Abhish0/Social-Snipe.git
cd Social-Snipe
```

### 2. Setup Backend
```bash
cd api
npm install
```

Create a `.env` file in the `api` folder:
```env
MONGO_URL=mongodb://localhost:27017/socialsnipe
JWT_SECRET=your_jwt_secret
PORT=5000
```

Start the backend:
```bash
node index.js
```

### 3. Setup Frontend
```bash
cd client
npm install
```

Create a `.env` file in the `client` folder:
```env
REACT_APP_API_URL=http://localhost:5000
```

Start the frontend:
```bash
npm start
```

### 4. Open in browser
```
http://localhost:3000
```

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### Users
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users/:id` | Get user profile |
| PUT | `/api/users/:id` | Update user profile |
| PUT | `/api/users/:id/follow` | Follow a user |
| PUT | `/api/users/:id/unfollow` | Unfollow a user |

### Posts
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/posts` | Create a post |
| GET | `/api/posts/timeline/:id` | Get timeline posts |
| PUT | `/api/posts/:id/like` | Like/unlike a post |
| DELETE | `/api/posts/:id` | Delete a post |

---

## 🌍 Deployment

- Frontend deployed on **Vercel** — auto deploys on every push to `master`
- Backend deployed on **Render** — free tier (may sleep after inactivity)
- Database hosted on **MongoDB Atlas** (free tier)

---

## 👨‍💻 Author

**Abhishek** — [github.com/Abhish0](https://github.com/Abhish0)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).