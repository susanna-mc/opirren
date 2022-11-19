import crypto from 'node:crypto';
import { create } from 'node:domain';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { createSession } from '../../database/sessions';
import { getUserWithPasswordHashbyUsername } from '../../database/users';

export type LoginResponseBody =
  | { errors: { message: string }[] }
  | { user: { username: string } };

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<LoginResponseBody>,
) {
  if (request.method === 'POST') {
    // 1. data exists
    if (
      typeof request.body.username !== 'string' ||
      typeof request.body.password !== 'string' ||
      !request.body.username ||
      !request.body.password
    ) {
      response
        .status(400)
        .json({ errors: [{ message: 'username and password not provided' }] });
    }
    // 2. check user exists
    const user = await getUserWithPasswordHashbyUsername(request.body.username);

    if (!user) {
      return response
        .status(401)
        .json({ errors: [{ message: 'user not found' }] });
    }
    // 3. hash and pw match check
    const isValidPassword = await bcrypt.compare(
      request.body.password,
      user.passwordHash,
    );

    if (!isValidPassword) {
      return response
        .status(401)
        .json({ errors: [{ message: 'password is invalid' }] });
    }

    console.log('isValidPassword', isValidPassword);

    // 4. create session and token

    const session = await createSession(
      user.id,
      crypto.randomBytes(80).toString('base64'),
    );
    console.log(session);

    // response method endpoint

    response.status(200).json({ user: { username: user.username } });
  } else {
    response.status(401).json({ errors: [{ message: 'Method not allowed' }] });
  }
}
