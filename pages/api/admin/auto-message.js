import { messageModal, userModal } from "../../../db";
import { fakeMessages } from "../../../utils/fakeMessages";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        const user = await userModal.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Pick a random message
        const randomMsg = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];

        // Insert into DB
        await messageModal.create({
            message: randomMsg,
            userId: user._id,
            createdAt: new Date() // Ensure your schema supports timestamps if you want sorting
        });

        return res.status(200).json({ success: true, message: randomMsg });
    } catch (error) {
        console.error("Auto-message error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
