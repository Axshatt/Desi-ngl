// Super Admin Authentication
// Only accessible with the correct password from environment variables

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { password } = req.body

  if (!password) {
    return res.status(400).json({ error: 'Password required' })
  }

  // Check against environment variable
  const adminPassword = process.env.SUPER_ADMIN_PASSWORD || 'admin123' // Default for development

  if (password === adminPassword) {
    // Generate a simple session token
    const token = Buffer.from(`superadmin:${Date.now()}`).toString('base64')
    
    return res.status(200).json({ 
      success: true,
      token,
      message: 'Authentication successful'
    })
  } else {
    return res.status(401).json({ error: 'Invalid password' })
  }
}
