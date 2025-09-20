export default async function handler(req, res) {
  const { num } = req.query;

  if (!num) return res.status(400).json({ error: 'Number missing' });

  try {
    // TODO: Replace this with your actual logic to fetch WhatsApp DP
    // Example: use your existing method to get photo URL or base64

    // Placeholder image (ඇත්තටම ඔයාගේ logic එක දාන්න ඕන)
    const placeholder = "https://via.placeholder.com/400?text=WhatsApp+DP";

    return res.status(200).json({ photo: placeholder });
  } catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
