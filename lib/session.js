// lib/session.js
import makeWASocket, { useMultiFileAuthState } from "@whiskeysockets/baileys"

let sock;

export async function getSocket() {
  if (sock) return sock;

  const { state, saveCreds } = await useMultiFileAuthState('./auth_info');
  sock = makeWASocket({ auth: state });

  sock.ev.on('creds.update', saveCreds);

  return sock;
}
