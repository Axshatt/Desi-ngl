import { messageModal, userModal } from "../../../db";
import { fakeMessages } from "../../../utils/fakeMessages";

export default async function handler(req, res) {
    // Optional: Verify Vercel Cron Secret for security
    // if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    //   return res.status(401).end('Unauthorized');
    // }

    try {
        // 1. Get all users
        const users = await userModal.find({});

        if (!users.length) {
            return res.status(200).json({ message: "No users found" });
        }

        const results = [];

        // 2. Send a random message to EACH user
        for (const user of users) {
            const randomMsg = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];

            await messageModal.create({
                message: randomMsg,
                userId: user._id,
                createdAt: new Date()
            });

            results.push({ user: user.username, msg: randomMsg });
        }

        return res.status(200).json({ success: true, count: results.length, details: results });
    } catch (error) {
        console.error("Cron Job Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
