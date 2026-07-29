import { Contact } from "../models/contact.model.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, phone, email, course, message } = req.body;

    if (!name || !phone || !email || !course || !message) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const newContact = await Contact.create({
      name,
      phone,
      email,
      course,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
      data: newContact,
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ success: false, message: "Server Error. Please try again later." });
  }
};
