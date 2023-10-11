## AI COMPANION

AI app that lets you create custom companions, that will respond to your messages in companion's personality.

MySQL Prisma database connection (Planetscale db)

```
npx prisma generate
npx prisma db push
npx prisma studio (development database)
```

Seed database

```
node scripts/seed.ts
```

In order to run populate /.env

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

PINECONE_INDEX=
PINECONE_ENVIRONMENT=
PINECONE_API_KEY=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

OPENAI_API_KEY=

REPLICATE_API_TOKEN=
STRIPE_API_KEY=

NEXT_PUBLIC_APP_URL=http://localhost:3000

STRIPE_WEBHOOK_SECRET=
```

Run in development

```
npm run dev
```

For inspiration and tutoring, thank's goes to: @codewithantonio
