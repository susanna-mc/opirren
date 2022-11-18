import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { getUserByUsername } from '../../database/users';

export type RegisterResponseBody =
  | { errors: { message: string }[] }
  | { user: { username: string } };

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<RegisterResponseBody>,
) {
  if (request.method === 'POST') {
    if (
      typeof request.body.username !== 'string' ||
      typeof request.body.password !== 'string' ||
      !request.body.username ||
      !request.body.password
    ) {
      return response
        .status(400)
        .json({ errors: [{ message: 'username or password not provided' }] });
    }
    const user = await getUserByUsername(request.body.username);

    if (user) {
      return response
        .status(401)
        .json({ errors: [{ message: 'username is already taken' }] });
    }

    const passwordHash = await bcrypt.hash(request.body.password, 12);


    .json({ user: { username: userWithoutPassword.username } });
  } else {
    response.status(401).json({ errors: [{ message: 'Method not allowed' }] });
  }
}
