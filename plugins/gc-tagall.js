const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = `${pesan}`;
  let teks = `╭┄〔 𝗕𝗼𝘁 𝗗𝗲 𝗕𝗲𝗿𝗲 🧸 〕┄⊱\n┆\n┆ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼𝘀 𝗗𝗲𝗹 𝗚𝗿𝘂𝗽𝗼 : ${participants.length} ${oi}\n┆\n┆ 𝗧𝗲𝗻𝗲𝗺𝗼𝘀 𝗔𝗰𝘁𝗶𝘃𝗶𝗱𝗮𝗱𝗲𝘀 𝗚𝗮𝗮 ღ\n┆\n`;
  for (const mem of participants) {
    teks += `┆ღ @${mem.id.split('@')[0]}\n`;
  }
  teks += `└𝗕𝗼𝘁 𝗗𝗲 𝗕𝗲𝗿𝗲 🧸\n\n`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;
