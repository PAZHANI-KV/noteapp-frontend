import { Box, Flex, VStack, Image } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/users/user.actions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/config";


export default function SignupPage() {
    const nav = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleSignup = async () => {
        let data = await axios.post(BASE_URL + "/user/register", {
            name, email, password
        })
        let { message, status } = data.data
        if (status == 1) {
            alert(message)
            nav("/login")
        } else {
            alert(message)
        }
    }


    return <Flex padding={4} w="100%">


        <Image w={"60%"} h={"70%"} src={"https://as1.ftcdn.net/v2/jpg/01/22/71/96/1000_F_122719641_V0yw2cAOrfxsON3HeWi2Sf4iVxhv27QO.jpg"}></Image>

        <VStack w={"50%"} >

            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign up with Notes App</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="name">
                                <FormLabel>Name</FormLabel>
                                <Input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email Address</FormLabel>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                </Stack>
                                <Button
                                    onClick={handleSignup}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign up
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>

        </VStack>

    </Flex>
}