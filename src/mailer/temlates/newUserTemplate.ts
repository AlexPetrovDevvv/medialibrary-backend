import config from "config";

export interface NewUserData {
  login: string;
  password: string;
}

export default function (data: NewUserData) {
  return `
    <!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><head><title></title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
    .ReadMsgBody { width:100%; }
    .ExternalClass { width:100%; }
    .ExternalClass * { line-height:100%; }
    body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
    table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
    img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
    p { display:block;margin:13px 0; }</style><!--[if !mso]><!--><style type="text/css">@media only screen and (max-width:480px) {
      @-ms-viewport { width:320px; }
      @viewport { width:320px; }
    }</style><!--<![endif]--><!--[if mso]>
  <xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]--><!--[if lte mso 11]>
  <style type="text/css">
    .outlook-group-fix { width:100% !important; }
  </style>
  <![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);</style><!--<![endif]--><style type="text/css">@media only screen and (min-width:480px) {
  .mj-column-per-100 { width:100% !important; max-width: 100%; }
}</style><style type="text/css">@media only screen and (max-width:480px) {
table.full-width-mobile { width: 100% !important; }
td.full-width-mobile { width: auto !important; }
}</style><style type="text/css">.golden-border {
  border: 2px solid #191516;
  border-radius: 5px;
}</style></head><body style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; background: #ffffff; background-color: #ffffff; Margin: 0px auto; max-width: 600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; background: #ffffff; background-color: #ffffff; width: 100%;" width="100%" bgcolor="#ffffff"><tbody style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><tr style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><td style="font-family: 'Roboto', sans-serif; margin: 0px; line-height: 150%; letter-spacing: .3px; direction: ltr; font-size: 0px; padding: 20px 0; padding-bottom: 0; padding-top: 0; text-align: center; vertical-align: top;" align="center" valign="top"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; font-size: 13px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; vertical-align: top;" width="100%" valign="top"><tr style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><td align="center" style="font-family: 'Roboto', sans-serif; margin: 0px; line-height: 150%; letter-spacing: .3px; font-size: 0px; padding: 10px 25px; padding-top: 40px; padding-bottom: 20px; word-break: break-word;"><div style="margin: 0px; padding: 0px; letter-spacing: .3px; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1; text-align: center; color: #191516;"><h1 style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;">Регистрация аккаунта ${
    data.login
  }</h1></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; background: #ffffff; background-color: #ffffff; Margin: 0px auto; max-width: 600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; background: #ffffff; background-color: #ffffff; width: 100%;" width="100%" bgcolor="#ffffff"><tbody style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><tr style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><td style="font-family: 'Roboto', sans-serif; margin: 0px; line-height: 150%; letter-spacing: .3px; direction: ltr; font-size: 0px; padding: 20px 0; padding-bottom: 0; padding-top: 0; text-align: center; vertical-align: top;" align="center" valign="top"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; font-size: 13px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; vertical-align: top;" width="100%" valign="top"><tr style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><td align="center" style="font-family: 'Roboto', sans-serif; margin: 0px; line-height: 150%; letter-spacing: .3px; font-size: 0px; padding: 10px 25px; padding-top: 0px; padding-bottom: 30px; word-break: break-word;"><div style="margin: 0px; padding: 0px; letter-spacing: .3px; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1; text-align: center; color: #191516;"><p style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;">Ваша почта была указана администратором, при регистрации нового пользователя в приложении «Медиабиблиотеки».</p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; background: #ffffff; background-color: #ffffff; Margin: 0px auto; max-width: 600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; background: #ffffff; background-color: #ffffff; width: 100%;" width="100%" bgcolor="#ffffff"><tbody style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><tr style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><td style="font-family: 'Roboto', sans-serif; margin: 0px; line-height: 150%; letter-spacing: .3px; direction: ltr; font-size: 0px; padding: 20px 0; padding-bottom: 30px; padding-left: 25px; padding-right: 25px; padding-top: 0; text-align: center; vertical-align: top;" align="center" valign="top"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="golden-border-outlook" style="vertical-align:top;width:550px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix golden-border" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; font-size: 13px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; vertical-align: top;" width="100%" valign="top"><tr style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><td style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; font-size: 0px; word-break: break-word;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="25" style="vertical-align:top;height:25px;"><![endif]--><div style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; height: 25px;">&nbsp;</div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr><tr style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><td align="center" style="font-family: 'Roboto', sans-serif; margin: 0px; line-height: 150%; letter-spacing: .3px; font-size: 0px; padding: 10px 25px; padding-top: 0px; padding-bottom: 15px; word-break: break-word;"><div style="margin: 0px; padding: 0px; letter-spacing: .3px; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 20px; line-height: 1; text-align: center; color: #191516;"><p style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><b style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;">Регистрационные данные:</b></p></div></td></tr><tr style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><td align="left" style="font-family: 'Roboto', sans-serif; margin: 0px; line-height: 150%; letter-spacing: .3px; font-size: 0px; padding: 10px 25px; padding-top: 0px; padding-bottom: 10px; word-break: break-word;"><div style="margin: 0px; padding: 0px; letter-spacing: .3px; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1; text-align: left; color: #191516;"><p style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;">Логин: <b style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;">${
    data.login
  }</b></p></div></td></tr><tr style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><td align="left" style="font-family: 'Roboto', sans-serif; margin: 0px; line-height: 150%; letter-spacing: .3px; font-size: 0px; padding: 10px 25px; padding-top: 0px; padding-bottom: 25px; word-break: break-word;"><div style="margin: 0px; padding: 0px; letter-spacing: .3px; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1; text-align: left; color: #191516;"><p style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;">Пароль: <b style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;">${
    data.password
  }</b></p></div></td></tr><tr style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><td align="left" style="font-family: 'Roboto', sans-serif; margin: 0px; line-height: 150%; letter-spacing: .3px; font-size: 0px; padding: 10px 25px; padding-top: 0px; padding-bottom: 10px; word-break: break-word;"><div style="margin: 0px; padding: 0px; letter-spacing: .3px; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1; text-align: left; color: #191516;"><a href="${config.get(
    "siteUrl"
  )}" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; letter-spacing: .3px; font-style: normal; font-weight: 400; font-size: 18px; line-height: 150%; color: #00B295; cursor: pointer;">Ссылка на вход в приложение: ${config.get("siteUrl")}</a></div></td></tr><tr style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><td style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; font-size: 0px; word-break: break-word;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="25" style="vertical-align:top;height:25px;"><![endif]--><div style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; height: 25px;">&nbsp;</div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; background: #ffffff; background-color: #ffffff; Margin: 0px auto; max-width: 600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; background: #ffffff; background-color: #ffffff; width: 100%;" width="100%" bgcolor="#ffffff"><tbody style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><tr style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><td style="font-family: 'Roboto', sans-serif; margin: 0px; line-height: 150%; letter-spacing: .3px; direction: ltr; font-size: 0px; padding: 20px 0; padding-bottom: 0; padding-top: 0; text-align: center; vertical-align: top;" align="center" valign="top"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; font-size: 13px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px; vertical-align: top;" width="100%" valign="top"><tr style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><td align="left" style="font-family: 'Roboto', sans-serif; margin: 0px; line-height: 150%; letter-spacing: .3px; font-size: 0px; padding: 10px 25px; padding-top: 0px; padding-bottom: 50px; word-break: break-word;"><div style="margin: 0px; padding: 0px; letter-spacing: .3px; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1; text-align: left; color: #191516;"><p style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;"><b style="font-family: 'Roboto', sans-serif; margin: 0px; padding: 0px; line-height: 150%; letter-spacing: .3px;">*</b>Для входа в приложение, вы можете использовать указанный выше логин, или вашу электронную почту.</p></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>
    `;
}