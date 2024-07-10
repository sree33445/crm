import { usersDB } from "@/app/lib/db/page";

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const db = await connectToDatabase()
        const collection = db.collection('users')
        
        const result = await collection.insertOne(req.body)
        
        res.status(201).json({ message: 'User created successfully', userId: result.insertedId })
      } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message })
      }
    } else {
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  }