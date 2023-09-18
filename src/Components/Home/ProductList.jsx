import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import {
	Stack,
	Card,
	CardBody,
	Image,
	Heading,
	Text,
	Divider,
	CardFooter,
	ButtonGroup,
	Button,
	Box,
	Progress,
    Spinner,
    SkeletonText,
    SkeletonCircle
} from "@chakra-ui/react";
function ProductList({ct_id}) {
	const [Prod, setProd] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
	useEffect(() => {
		fetch(`http://127.0.0.1:8000/prod/?ct_id=${ct_id}`)
			.then((res) => res.json())
			.then((data) => {
				setProd(data);
                setIsLoading(false);
				console.log(data);
			});
	}, []);
	return (
		<>
			<div>
				<Navbar />
				<Box>
					<Progress
						colorScheme="pink"
						hasStripe
						height="42px"
						value={100}
						isAnimated
					/>
					<Text
						color={"white"}
						fontSize={{ base: "80%", sm: "100%", lg: "100%" }}
						position="absolute"
						top={{ base: "117px", sm: "115px", md: "142px", lg: "85px" }}
						left={{ base: "5%", sm: "27%", md: "30%", lg: "40%" }}
					>
						New arrivals in womenswear upto 30% off ❤️
					</Text>
				</Box>
				<Box width={"100%"} textAlign="left" height={"520px"} margin={"20px"}>
                {isLoading ? (
					<Box padding='10' boxShadow='lg' bg='white'>
                    <SkeletonCircle size='10' />
                    <SkeletonText mt='4' noOfLines={8} spacing='6' skeletonHeight='6cd ' />
                  </Box>
				) : (
					Prod.map((item) => {
						return (
							<Card
								maxW="sm"
								margin={"10px"}
								boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
							>
								<CardBody>
									<NavLink to={`/details/${item.pr_id}`}>
										<Image
											key={item.ct_id}
											src={item.images}
											borderRadius="lg"
										/>
									</NavLink>
									<Stack mt="6" spacing="3">
										<Heading size="md"></Heading>
										<Text>{item.pr_name}</Text>
										<Text color="blue.600" fontSize="2xl">
											${item.price}
										</Text>
									</Stack>
								</CardBody>
								<Divider />
								<CardFooter>
									<ButtonGroup spacing="2">
										<Button variant="solid" colorScheme="blue">
											Buy now
										</Button>
										<Button variant="ghost" colorScheme="blue">
											Add to cart
										</Button>
									</ButtonGroup>
								</CardFooter>
							</Card>
						);
					}))}
				</Box>

				<Divider mt="50px" />
				<Box mt={"30px"}>
					<Footer />
				</Box>
			</div>
		</>
	);
}

export default ProductList;
