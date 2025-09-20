import { getSocket } from "../../lib/session.js";

export default async function handler(req, res) {
  const { num } = req.query;

  if (!num) return res.status(400).json({ error: "Number missing" });

  try {
    const sock = await getSocket();

    // JID එක create කරනවා (WhatsApp format)
    const jid = `${num}@s.whatsapp.net`;

    // DP URL එක ගන්න
    const url = await sock.profilePictureUrl(jid, "image");

    if (!url) {
      return res.status(404).json({ error: "No profile photo found" });
    }

    return res.status(200).json({ photo: url });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
