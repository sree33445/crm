import { usersDB } from "../../lib/db"

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, role } = req.body;

    if (!name || !role) {
      return res.status(400).json({ message: 'Name and role are required' });
    }

    // Simple validation for role
    const validRoles = ['cash collector', 'counselor', 'manager'];
    if (!validRoles.includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    const newUser = { id: Date.now(), name, role };
    usersDB.push(newUser); // Save user to DB
    return res.status(201).json(newUser);
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

