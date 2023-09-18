import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import {
	Stack,
	Card,
	CardBody,
	Image,
	Heading,
	Text,
	CardFooter,
	Button,
} from "@chakra-ui/react";

function Details(pr_name) {
	return (
		<div>
			<Navbar />
			<Card
				direction={{ base: "column", sm: "row" }}
				overflow="hidden"
				variant="outline"
				margin={"100px"}
				height={"500px"}
			>
				<Image
					objectFit="fill"
					maxW={{ base: "100%", sm: "400px" }}
					src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
					alt="Caffe Latte"
				/>

				<Stack>
					<CardBody>
						<Heading size="md">{pr_name}</Heading>

						<Text py="2">
							Caffè latte is a coffee beverage of Italian origin made with
							espresso and steamed milk.
						</Text>
					</CardBody>

					<CardFooter>
						<Button variant="solid" colorScheme="blue">
							Buy Now
						</Button>
					</CardFooter>
				</Stack>
			</Card>
		</div>
	);
}

export default Details;
