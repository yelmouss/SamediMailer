const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASSMAIL,
    },
});

const ccEmail = "yelmouss.gmc@gmail.com"


exports.SayfatMail = async (req, res) => {
    try {
        const { to, subject, corps } = req.body;


        const mailOptions = {
            from: process.env.MAIL,
            to,
            cc: ccEmail,
            subject,
            text: corps,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};
