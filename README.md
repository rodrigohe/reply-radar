# reply-radar
Keep tabs on how many job applications went unanswered!

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

In the root of this project, create a `.env` file with the following

```.env
# Database credentials
POSTGRES_URL=postgres://<username>:<password>@psql:5432/reply_radar
POSTGRES_USER=<username>
POSTGRES_PASSWORD=<password>
POSTGRES_DATABASE=reply_radar

# openssl rand -hex 32
AUTH_SECRET=<output from the above>
AUTH_TRUST_HOST=http://localhost:3000/api/auth
```

Then, run
```bash
docker-compose build
docker-compose up -d
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Credentials
| email           | password     |
|-----------------|--------------|
| test@email.com  | Password123! |
| user1@email.com | abcd1234     |
| user2@email.com | abcd1234     |
| user3@email.com | abcd1234     |
| user4@email.com | abcd1234     |