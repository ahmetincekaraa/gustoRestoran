import cookie from "cookie";

const handler = (req, res) => {
  const { method } = req;

  if (method === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        //Sıkıntı burada token oluşturmaması.
        //.env dosyasındaki admin token'ı silince profile giriyo.
        cookie?.serialize("token", process.env.ADMIN_TOKEN, {
          maxAge: 60 * 60 * 24,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json({ message: "Başarılı." });
    } else {
      res.status(400).json({ message: "Kimlik Bilgileri Yanlış." });
    }
  }
  if (method === "PUT") {
    res.setHeader(
      "Set-Cookie",
      cookie?.serialize("token", process.env.ADMIN_TOKEN, {
        maxAge: -1,
        path: "/",
      })
    );
    res.status(200).json({ message: "Başarılı." });
  }
};
export default handler;
