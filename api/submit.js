export default async function handler(req) {
  if (req.method !== "POST") {
    return Response.json({tip:"提交失败"}, {status:400})
  }
  const mysql = require("mysql2/promise");
  const db = mysql.createPool({
    host:"gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
    port:4000,
    user:"3SYD519uj64H2p4.root",
    password:"f3gDXdGamEgEbqaR",
    database:"test"
  });

  const {user_name, phone, text_content, img_link} = await req.json();
  await db.query(
    "INSERT INTO form_info(user_name,phone,text_content,img_link) VALUES (?,?,?,?)",
    [user_name, phone, text_content, img_link]
  )
  return Response.json({tip:"提交成功！"})
}
