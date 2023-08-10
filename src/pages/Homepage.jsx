import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png";

export default function Homepage() {

    return <Box padding={8}>
        <Image position={"absolute"} right={0} w={500} src={note} />
        <Heading mt={16} textAlign={"start"} size={"4xl"}>Note App</Heading>
        <Text mt={8} maxW={"50%"} textAlign={"justify"}>Introducing our cutting-edge MERN-powered note-taking app that revolutionizes the way you organize and manage your information. This meticulously crafted application seamlessly integrates MongoDB, Express.js, React, and Node.js to provide you with a comprehensive and intuitive platform.

            With our note app, you can effortlessly create, edit, and organize your notes in a clean and user-friendly interface. The real-time synchronization ensures that your notes are always up-to-date across all devices, making it convenient for you to access your information anytime, anywhere.

            Experience the power of collaboration as you share notes and collaborate with friends, family, or colleagues in real-time. Our app's robust backend ensures data security while enabling smooth multi-user interactions.

            Enjoy a plethora of features including customizable categories, rich text formatting, task lists, reminders, and seamless search functionality. Personalize your note-taking experience to match your unique style and preferences.

            Whether you're a student, professional, or creative individual, our MERN note app adapts to your needs. Stay organized, boost productivity, and never miss a detail with our state-of-the-art note-taking solution.

            Join us in elevating your note-taking experience—simplify your life, streamline your tasks, and unlock a new level of efficiency with our MERN-powered note app.




        </Text>
    </Box>

}