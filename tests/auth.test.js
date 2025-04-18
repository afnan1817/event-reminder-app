// tests/auth.test.js
const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = require('../app');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Auth Endpoints', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@example.com', password: 'password123' });
    expect(res.statusCode).toEqual(201);
  });

  it('should log in the user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password123' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.token).toBeDefined();
  });
});
