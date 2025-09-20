export default async function handler(req, res) {
  const { num } = req.query;

  if (!num) return res.status(400).json({ error: "Number missing" });

  try {
    // Avatar API (Always JSON safe)
    const photoUrl = `https://ui-avatars.com/api/?name=${num}&background=25D366&color=fff&size=400`;

    return res.status(200).json({ photo: photoUrl });
  } catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
