---
title: "Modernizing the Monolith: Hosting Next.js on OCI"
summary: "We often think of Oracle as just 'databases and ERPs', but OCI is a powerhouse for modern containerized workloads. Here is my architecture for running high-performance Next.js apps using OCI Container Instances."
date: "2024-11-28"
tags: ["Next.js", "Oracle Cloud Infrastructure", "DevOps"]
---

There is a misconception that if you work in the Oracle ecosystem, you are stuck building UI with APEX or VBCS (Visual Builder) forever.

While APEX is fantastic for internal data tools, sometimes you need the raw performance, SEO capabilities, and UX flexibility of a custom React/Next.js application.

The good news? Oracle Cloud Infrastructure (OCI) is actually an incredible home for these workloads. Here is how I architect modern frontends on the OCI stack.

## The Architecture: Container Instances vs. OKE

For massive scale, you use OKE (Oracle Kubernetes Engine). But for most mid-sized applications or internal dashboards, **OCI Container Instances** are the sweet spot. They are serverless containers—think AWS Fargate, but simpler.

### Step 1: Dockerize the Next.js App

Nothing fancy here. A standard multi-stage Dockerfile to keep the image light.

```dockerfile
# Standard multi-stage build
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
CMD ["node", "server.js"]
```

### Step 2: Push to OCIR (Oracle Container Registry)

I create a private repo in OCIR. The speed of pulling images within the OCI internal network is blazing fast compared to pulling from Docker Hub.

### Step 3: Deploy to Container Instances

Here is where the magic happens. I don't provision a VM. I don't configure Kubernetes YAMLs. I just tell OCI:

> "Run 2 replicas of this image, give them 2 vCPUs and 8GB RAM each."

It spins up in seconds. I put them behind an **OCI Load Balancer** to handle SSL termination and traffic distribution.

## Why this Stack?

1.  **Cost:** OCI's data egress fees are significantly lower than competitors. For a media-heavy Next.js site, this saves a fortune.
2.  **Latency:** If your backend is an Autonomous Database (ATP) running in the same region, the latency between your Next.js API routes and the DB is sub-millisecond. It feels instantaneous.
3.  **Security:** I can wrap the Container Instances in a private subnet, meaning they are completely invisible to the public internet. The *only* way in is through the Load Balancer (WAF).

## Interconnecting with Oracle SaaS

The real power comes when you connect this custom UI to Oracle SaaS (ERP/HCM).

I use **OCI API Gateway** as the "front door".
*   The Next.js app calls the API Gateway.
*   The Gateway handles OAuth with IDCS (Identity Cloud Service).
*   The Gateway routes the request to the backend (or directly to OIC).

This keeps my frontend dumb and secure. It doesn't know about ERP credentials; it just knows how to talk to the Gateway.

## Conclusion

You don't have to choose between "Oracle Tech" and "Modern Tech". You can run the latest Next.js 14 features right alongside your mission-critical PL/SQL logic. It’s the best of both worlds.

