# 📧 Simple Email Sender using Node.js and NodeMailer

This project is a simple Express application that sends an email using NodeMailer when you access the `/sendemail` route.

---

## 🚀 Objective

Build a Node.js Express app with a single route `/sendemail` that, when accessed, sends an email to:
- `sumitgourav07@gmail`
- `venugopal.burli@masaischool.com`

With the message:

> "This is a testing Mail sent by NEM student, no need to reply."

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- NodeMailer
- dotenv

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Sumit01-tech/NEM-Assignment-14.git
cd simple-email-sender
```

### 2. Initialize Node and Install Dependencies

```bash
npm init -y
npm install express nodemailer dotenv
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
SENDER_EMAIL=sumitgourav07@gmail.com
SENDER_PASS=xphx cled ysqs jtak
PORT=8000
```

> 🔐 **Note:** Use a Gmail [xphx cled ysqs jtak](https://support.google.com/accounts/answer/185833) instead of your Gmail password.

### 4. Run the Application

To start the server:

```bash
node index.js
```

Or using `nodemon`:

```bash
npm install --save-dev nodemon
npm run dev
```

In `package.json`, add:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

---

## 📬 How to Use

Visit:

```
http://localhost:8000/sendemail
```

You should receive an email at:
- sumitgourav07@gmail.com
- `venugopal.burli@masaischool.com`

Message content:

> "This is a testing Mail sent by NEM student, no need to reply."

---

## ✅ Expected Output

- Browser response: `Email sent successfully!`
- Check both inboxes for the test email.

---

## 📁 Folder Structure

```
simple-email-sender/
├── index.js
├── .env
├── package.json
├── README.md
```

---

## ✍️ Author

**Sumit Gourav (NEM Student)**

---

## 📜 License

This project is licensed for educational purposes under the Masai School Assignment Terms.
