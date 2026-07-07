export const sendContact = async (req, res) => {

    const { nom, email, objet, message } = req.body;

    console.log("Nouveau message");
    console.log(nom);
    console.log(email);
    console.log(objet);
    console.log(message);

    res.status(200).json({
        message: "Message reçu."
    });

};